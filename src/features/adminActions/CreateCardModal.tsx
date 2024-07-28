import { Box, TextField } from '@mui/material';
import React, { useMemo } from 'react';
import CustonModal from '../../components/UI/modal/CustomModal';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '@mui/material/Button';
import MySelect from '../../components/UI/select/MySelect';
import { TypeTypes } from '../../redux/myCards/types';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

type TypeInputs = {
  name: string;
  price: string;
};

const CreateCardModal = () => {
  const [modal, setModal] = React.useState(false);
  const [currentSubsection, setCurrentSubsection] = React.useState('');
  const [currentType, setCurrentType] = React.useState('');
  const [currentBrand, setCurrentBrand] = React.useState('');
  const [toogle, setToogle] = React.useState<boolean>(true);
  const [currentName, setCurrentName] = React.useState('');
  const [currentPrice, setCurrentPrice] = React.useState('');

  const {
    register,
    handleSubmit,
    watch,
    setError,

    formState: { errors },
  } = useForm<TypeInputs>({
    defaultValues: {
      name: '',
      price: '',
    },
  });

  console.log(currentType);
  console.log(currentBrand);

  const clickCreate = () => {
    setModal(!modal);
  };
  const closeModal = () => {
    setModal(false);
  };
  console.log(currentName);
  const changeName = useMemo<
    (event: React.ChangeEvent<HTMLInputElement>) => void
  >(
    () => (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(currentName, 'name changed )))');
      setCurrentName(event.target.value);
    },
    [currentName],
  );

  const onSubmit = (values: TypeInputs) => {
    const card = { ...values, currentType, currentBrand, stock: toogle };
    console.log(card);
  };

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToogle(!toogle);
  };

  const types: TypeTypes[] = [
    { id: 1, name: 'Telephone' },
    { id: 2, name: 'Computer' },
    { id: 3, name: 'TV' },
  ];
  const brands: TypeTypes[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Lenovo' },
    { id: 3, name: 'Xiaomi' },
  ];
  const subsectionsList: TypeTypes[] = [
    { id: 1, name: 'laptop' },
    { id: 2, name: 'phone' },
    { id: 3, name: 'TV' },
  ];
  return (
    <div>
      {' '}
      <Button
        onClick={clickCreate}
        variant="outlined"
        size="medium"
        sx={{ backgroundColor: '#00f2ffa6' }}
      >
        Create tovar
      </Button>
      <form>
        <CustonModal modal={modal} setModal={setModal}>
          <MySelect
            current={currentType}
            onSetCur={(v: any) => setCurrentType(v as string)}
            list={types}
          />
          <MySelect
            current={currentBrand}
            onSetCur={(v: any) => setCurrentBrand(v as string)}
            list={brands}
          />
          <MySelect
            current={currentSubsection}
            onSetCur={(v: any) => setCurrentSubsection(v as string)}
            list={subsectionsList}
          />
          <Box>
            <TextField
              className="login__field"
              type="text"
              id="outlined-basic-name"
              label="Title"
              variant="outlined"
              fullWidth
              error={Boolean(errors.name?.message)}
              helperText={errors.name?.message}
              {...register('name', { required: 'Введите название' })}
            />
            <IconButton onChange={() => setCurrentName('')} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Box>
            <TextField
              className="login__field"
              type="text"
              id="outlined-basic-name"
              label="Price"
              variant="outlined"
              fullWidth
              error={Boolean(errors.price?.message)}
              helperText={errors.price?.message}
              {...register('price', { required: 'Введите Цену' })}
            />
            <IconButton onChange={() => setCurrentType('')} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Box>

          <Box>
            <FormControlLabel
              control={
                <Switch
                  checked={toogle}
                  onChange={handleSwitch}
                  sx={{
                    '& .MuiSwitch-thumb': {
                      backgroundColor: '#272222', // Здесь вы указываете ваш кастомный цвет
                    },
                    '&.Mui-checked .MuiSwitch-thumb': {
                      backgroundColor: '#148787', // То же самое для активного состояния
                    },
                  }}
                />
              }
              name="stock"
              label="Is it in stock?"
            />
          </Box>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Create new
          </Button>
        </CustonModal>
      </form>
    </div>
  );
};

export default CreateCardModal;
