export interface ICard {
  id: string;
  title: string;
  description: string;
  price: number;
  inCart?: boolean;
  quantity?: number;
}

export interface ICardValues {
  title: string;
  description: string;
  price: number;
}

export interface IErrors {
  title?: string;
  price?: string;
  description?: string;
}

export interface IButtonProps {
  width: string;
  height: string;
  background?: string;
  disabled?: boolean;
}

export interface ICreateCard {
  id: string | undefined;
  title: string;
  description: string;
  price: number;
  inCart: boolean;
}

export interface IProductCart {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

export interface IListReducer {
  products: ICard[];
  currentProducts: ICard[];
  pagination: { currentPage: number; productsPerPage: number };
}

export type TSetValue = (value: string) => void;
