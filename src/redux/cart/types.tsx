export type TItemCart = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  count: number;
};

export interface Icart {
  totalPrice: number;
  itemsCart: TItemCart[];
  quantityTovars: number;
}
