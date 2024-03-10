export const totalQuantity = (items: any) =>
  items.reduce((acc: number, card: any) => {
    return acc + card.count;
  }, 0);
