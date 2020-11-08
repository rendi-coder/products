import React from "react";
import * as Style from "./styles";
import { ICard } from "../../types";

const FilterSearch: React.FC<{
  onFilter: (filteredCards: ICard[]) => void;
  listCards: ICard[] | undefined;
}> = ({ onFilter, listCards }) => {
  const filterCard = (e: string) => {
    if (listCards?.length) {
      onFilter(
        listCards.filter((card) =>
          card.title.toUpperCase().includes(e.toUpperCase())
        )
      );
    }
  };
  return (
    <Style.SearchContainer>
      <div className="input">
        <input
          onChange={(e) => filterCard(e.target.value)}
          type="text"
          placeholder="Search"
          id="search-input"
          autoComplete={"off"}
        />
      </div>
    </Style.SearchContainer>
  );
};

export default FilterSearch;
