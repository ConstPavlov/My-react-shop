
export type IAllParamCard = {
  id: string;
  imageUrl: string;
  title: string;
  subsection: string;
  brand: string;
  color: number[];
  memory: number[];
  price: string;
  category: string;
  rating: number;
  stock: boolean;
};
export enum Status {
  LOADING = 'loading',
  ERROR = 'error',
  SUCCESS = 'success'
}

export interface Icard{
  cards: IAllParamCard[];
  status: Status
}
export interface IfetchDataParametrs {
  sortByForLnk: string;
  orderForLink: string;
  brand: string;
  // queryParam: string
  mainSection: {sub: string, title: string};
}

