import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TypeTypes } from '../../../redux/myCards/types';

interface TypeProps<T> {
  list: TypeTypes[];
  current: string;
  onSetCur: (v: any) => void;
}

const MySelect = React.memo(<T,>({ list, current, onSetCur }: TypeProps<T>) => {
  const [values, setValues] = React.useState<TypeTypes[]>([]);

  React.useEffect(() => {
    setValues(list);
  }, []);

  console.log(list);
  return (
    <FormControl sx={{ m: 1, minWidth: 220 }}>
      <Select
        value={current}
        onChange={(event: SelectChangeEvent) => onSetCur(event.target.value)}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem sx={{ fontSize: '12' }} value="">
          Не выбрано
        </MenuItem>
        {list.length > 0 &&
          list.map((item: TypeTypes) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
      </Select>
      <FormHelperText>Нажмите на список</FormHelperText>
    </FormControl>
  );
});

export default MySelect;
