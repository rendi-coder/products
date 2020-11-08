import React from "react";
import { PaginationContainer, PageItem } from "./styles";

const Pagination: React.FC<{
  perPage: number;
  currentPage: number;
  totalItems: number;
  paginate: (number: number) => void;
}> = ({ perPage, currentPage, totalItems, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / perPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginationContainer>
      {pageNumbers.length > 1 &&
        pageNumbers.map((number) => (
          <PageItem
            onClick={() => paginate(number)}
            key={number}
            currentPage={number === currentPage}
          >
            <span className="page-number">{number}</span>
          </PageItem>
        ))}
    </PaginationContainer>
  );
};

export default Pagination;
