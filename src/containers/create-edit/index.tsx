import React, { useEffect } from "react";
import EditCardComponent from "../../components/edit-card";
import ApiService from "../../services/product.service";
import { useHistory } from "react-router-dom";
import validator from "../../helpers/validator";
import { CreateEditContainer } from "./styles";
import { ICard } from "../../types";
import { useStore } from "../../store-context/storeContext";

const CreateEdit = ({ ...props }) => {
  const history = useHistory();
  const { CREATE_EDIT_VIEW, MAIN_VIEW } = Object(useStore());
  const {
    actions: {
      setTitle,
      setPrice,
      setDescription,
      setErrors,
      initValues,
      setEditMode,
    },
    state: { id, title, price, description, inCart, errors, editMode },
  } = CREATE_EDIT_VIEW;

  const {
    state: { products },
  } = MAIN_VIEW;

  //initialize edit Reducer values ​​if id came from url is correct
  const initEditMode = () => {
    const productIdByLink = props.match.params.id;
    if (!productIdByLink) return;
    const candidate = products.find(
      (product: ICard) => product.id === productIdByLink
    );
    if (candidate) {
      setEditMode(true);
      initValues(candidate);
    }
  };

  const onValidate = () => {
    const errors = validator(title, price, description);
    setErrors(errors);
  };

  useEffect(() => {
    initEditMode();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    onValidate();
    // eslint-disable-next-line
  }, [title, price, description]);

  const onSubmit = () => {
    if (Object.keys(errors).length === 0) {
      const apiAction = editMode
        ? ApiService.updateProduct
        : ApiService.addProduct;
      (async () => {
        await apiAction({ id, title, description, price: +price, inCart });
      })();
      history.push("/");
    }
  };

  return (
    <CreateEditContainer>
      <EditCardComponent
        setTitle={(title: string) => {
          setTitle(title);
        }}
        setPrice={(price: string) => {
          setPrice(price);
        }}
        setDescription={(desc: string) => {
          setDescription(desc);
        }}
        onSubmit={onSubmit}
        values={{ title, price, description }}
        errors={errors}
      />
    </CreateEditContainer>
  );
};

export default CreateEdit;
