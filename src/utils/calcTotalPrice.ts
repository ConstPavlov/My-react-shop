export const calcTotalPrice = (items: any) => {
  if (items.length > 0) {
    return items.reduce((acc: number, obj: any) => {
      return obj.price * obj.count + acc;
    }, 0);
  }
  return 0;
};