import React, { useEffect } from "react";
import Pagination from "../../components/pagination";
import Card from "../product-card";
import FilterSearch from "../../components/filter-search";
import {
  ListContainer,
  MainViewWrapper,
  Menu,
  PaginationWrapper,
} from "./styles";
import ProductService from "../../services/product.service";
import CartService from "../../services/cart.service";
import { ICard } from "../../types";
import Button from "../../components/shared/button";
import { NavLink, useHistory } from "react-router-dom";
import { useStore } from "../../store-context/storeContext";

const ListCard = () => {
  const history = useHistory();
  const { MAIN_VIEW, CREATE_EDIT_VIEW } = Object(useStore());
  const {
    actions: { setCurrentPage, setCurrentProducts, setProducts, updateStatus },
    state: { pagination, products, currentProducts },
  } = MAIN_VIEW;
  const {
    actions: { clearEditReducer },
  } = CREATE_EDIT_VIEW;

  useEffect(() => {
    (async () => {
      const cards = await ProductService.getProducts();
      setProducts(cards);
    })();
    clearEditReducer();
    // eslint-disable-next-line
  }, []);

  //handler for filtering product cards by title
  const filterSearchHandler = (filteredCards: ICard[]) => {
    setCurrentPage(1);
    setCurrentProducts(filteredCards);
  };

  //Change Page
  const paginateHandler = (pageNumber: number) => setCurrentPage(pageNumber);

  //Delete Card from list and (delete product from cart)
  const deleteCard = async (id: string) => {
    const candidateDeleteFromCart = currentProducts.find(
      (p: ICard) => p.id === id && p.inCart
    );
    if (candidateDeleteFromCart) {
      await CartService.deleteFromCart(id);
    }
    await ProductService.deleteProduct(id);
    setCurrentProducts(
      currentProducts.filter((product: ICard) => product.id !== id)
    );
  };

  //Add to Cart
  const addProductToCart = async (product: ICard) => {
    await ProductService.updateProduct({
      ...product,
      inCart: true,
    });
    updateStatus({ id: product.id, status: true });
    await CartService.addToCart({ ...product, quantity: 1 });
  };

  //Render current products
  const renderPaginationProducts = () => {
    const indexOfLastCard = pagination.currentPage * pagination.productsPerPage;
    const indexOfFirstCard = indexOfLastCard - pagination.productsPerPage;
    const products = currentProducts?.slice(indexOfFirstCard, indexOfLastCard);
    return (
      <React.Fragment>
        {products.length > 0 ? (
          products.map((card: ICard, i: number) => (
            <Card
              key={i}
              cardInfo={card}
              editCard={(id) => history.push(`/editView/${id}`)}
              addToCart={addProductToCart}
              deleteCard={deleteCard}
            />
          ))
        ) : (
          <div className="prompt">Products not found</div>
        )}
      </React.Fragment>
    );
  };

  return (
    <MainViewWrapper>
      <Menu>
        <div className="filter-search">
          <FilterSearch onFilter={filterSearchHandler} listCards={products} />
        </div>
        <NavLink to="/createView" className="create-card">
          <Button width={"100%"} height={"100%"}>
            <span className="btn-text">Create Card</span>
          </Button>
        </NavLink>
      </Menu>
      <ListContainer>{renderPaginationProducts()}</ListContainer>
      <PaginationWrapper>
        <Pagination
          perPage={pagination.productsPerPage}
          totalItems={currentProducts.length}
          paginate={paginateHandler}
          currentPage={pagination.currentPage}
        />
      </PaginationWrapper>
    </MainViewWrapper>
  );
};

export default ListCard;
