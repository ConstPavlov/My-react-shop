export type TypeMyCard = {
  id: string;
  imageUrl: string;
  title: string;
  subsection: string;
  brandId: string;
  price: string;
  categoryId: string;
  rating: number;
  stock: boolean;
};
export enum Status {
  LOADING = 'loading',
  ERROR = 'error',
  SUCCESS = 'success',
}

export interface IMyCard {
  cards: TypeMyCard[];
  status: Status;
}
export interface IMyParams {
  mainSection: { sub: string; title: string };
}

export type TypeTypes = {
  id: number;
  name: string;
};
