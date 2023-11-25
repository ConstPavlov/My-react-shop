import React from 'react';
import ImportExportIcon from '@mui/icons-material/ImportExport';

export type sortNamesType = {
  name: string;
  sort: string;
};
interface MySortValue {
  value: { name: string; sort: string };
  setValue: any;
}
export const sortNames: sortNamesType[] = [
  { name: 'Популярные(ASC)', sort: 'rating' },
  { name: 'Не Популярные(DESC)', sort: '-rating' },
  { name: 'Дороже(ASC)', sort: '-price' },
  { name: 'Дешевле(DESC)', sort: 'price' },
];
const Sort: React.FC<MySortValue> = ({ value, setValue }) => {
  const [visible, setVisible] = React.useState(false);

  const openSortPopup = () => {
    setVisible(!visible);
  };
  const changeSort = (sortObj: sortNamesType) => {
    setVisible(false);
    setValue(sortObj);
  };
  return (
    <div className="sort">
      <ImportExportIcon className="sort__icon" />
      <div className="sort__text" onClick={openSortPopup}>
        Сначала <span>{value.name}</span>
      </div>
      {visible && (
        <div className="sort__popup">
          <ul className="sort__list">
            {sortNames.map((sortObj, i) => (
              <li className="sort__link" key={i} onClick={() => changeSort(sortObj)}>
                Сначала {sortObj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
