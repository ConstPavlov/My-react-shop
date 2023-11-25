export type brandNamesType = {
  name: string;
  disabledChx: boolean;
};
export type sortNamesType = {
  name: string;
  sort: string;
};

export type IcategorySlice = {
  category: string;
  checkedCurrent: boolean;
  filterStock: brandNamesType[];
  activeSort: sortNamesType;
  query: string;
};
export type IsetAllFilters = {
  category: string;
  activeSort: sortNamesType;
  query: string;
};


