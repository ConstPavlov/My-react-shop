import { Box, Container, TextField } from '@mui/material';
import React, { useMemo } from 'react';
import CustonModal from '../../components/UI/modal/CustomModal';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '@mui/material/Button';
import MySelect from '../../components/UI/select/MySelect';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import axios from '../../axios/axios';
import styles from './CreateCard.module.scss';
import { brands, subsectionsList, types } from '../mock-data/consts';
import CustomTextField from '../../components/UI/MyTextField/MyTextField';

type TypeInputs = {
  name: string;
  price: string;
};

type TypeCurrInput = {
  id: number;
  name: string;
};

type TInfoItem = {
  title: string;
  description: string;
  num: any;
};

type TInfo = TInfoItem[];

const CreateCardModal = () => {
  const [modal, setModal] = React.useState(false);
  const [currentSubsection, setCurrentSubsection] =
    React.useState<TypeCurrInput>({
      id: 0,
      name: '',
    });
  const [currentType, setCurrentType] = React.useState<TypeCurrInput>({
    id: 0,
    name: '',
  });
  const [currentBrand, setCurrentBrand] = React.useState<TypeCurrInput>({
    id: 0,
    name: '',
  });
  const [toogle, setToogle] = React.useState<boolean>(true);
  const [currentName, setCurrentName] = React.useState('');

  const [imageUrl, setImageUrl] = React.useState('');
  const inputFileRef = React.useRef<HTMLInputElement>(null);
  const [fileImg, setFileImg] = React.useState<File | null>(null);

  const [info, setInfo] = React.useState<TInfo>([]);

  const {
    register,
    handleSubmit,
    watch,
    control,

    formState: { errors },
  } = useForm<TypeInputs>({
    defaultValues: {
      name: '',
      price: '',
    },
  });

  console.log(currentType);
  const closeModal = () => {
    setModal(false);
  };

  const changeName = useMemo<
    (event: React.ChangeEvent<HTMLInputElement>) => void
  >(
    () => (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(currentName, 'name changed )))');
      setCurrentName(event.target.value);
    },
    [currentName],
  );

  const handleChangeFile = async (event: any) => {
    try {
      const currentFile = event.target.files[0];
      console.log(currentFile);

      setFileImg(currentFile);
    } catch (error) {
      console.warn(error);
      alert('Error uploading the file');
    }
  };

  const handlePreview = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const onSubmit = (values: TypeInputs) => {
    const { name, price } = values;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${Number(price)}`);
    formData.append('typeId', `${Number(currentType.id)}`);
    formData.append('brandId', `${Number(currentBrand.id)}`);
    formData.append('subsection', `${currentSubsection.name}`);
    formData.append('stock', toogle.toString());
    if (fileImg) {
      formData.append('imageUrl', fileImg);
    }
    formData.append('info', JSON.stringify(info));

    console.log(formData);

    console.log(
      'Form data to be submitted:',
      Object.fromEntries(formData.entries()),
    );

    axios
      .post('/device', formData)
      .then(() => closeModal())
      .catch(error => {
        console.error('Error:', error);
      });
  };

  console.log(info);
  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToogle(!toogle);
  };

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', num: Date.now() }]);
  };

  const deletInfo = (number: number) => {
    setInfo([...info.filter(i => i.num !== number)]);
  };

  const handleInfoChange = (index: number, field: string, value: string) => {
    const newInfo = [...info];
    newInfo[index] = { ...newInfo[index], [field]: value };
    setInfo(newInfo);
  };

  return (
    <Box>
      <Button
        onClick={() => setModal(!modal)}
        variant="outlined"
        size="medium"
        sx={{ backgroundColor: '#00f2ffa6' }}
      >
        Create tovar
      </Button>
      <form>
        <CustonModal modal={modal} setModal={setModal}>
          <Box>
            <Box display="flex" flexDirection="column">
              <p className={styles.inputTitle}>Выберете тип</p>
              <MySelect
                current={currentType}
                onSetCur={(v: any) => setCurrentType(v as TypeCurrInput)}
                list={types}
              />
            </Box>

            <Box display="flex" alignItems={'center'} justifyContent="center">
              <Box>
                <p className={styles.inputTitle}>Выберете бренд</p>
                <MySelect
                  current={currentBrand}
                  onSetCur={(v: any) => setCurrentBrand(v as TypeCurrInput)}
                  list={brands}
                />
              </Box>
              <Box>
                <p className={styles.inputTitle}>Выберете подраздел</p>
                <MySelect
                  current={currentSubsection}
                  onSetCur={(v: any) =>
                    setCurrentSubsection(v as TypeCurrInput)
                  }
                  list={subsectionsList}
                />
              </Box>
            </Box>
            <CustomTextField
              control={control}
              name="name"
              label="Name"
              type="text"
              error={errors.name}
            />

            <CustomTextField
              control={control}
              name="price"
              label="Price"
              type="number"
              error={errors.price}
            />

            <Box>
              <Button
                color="secondary"
                onClick={addInfo}
                variant="outlined"
                size="large"
              >
                Add a property
              </Button>
            </Box>
            {info &&
              info.map((i: TInfoItem, index: number) => (
                <Box
                  key={i.num}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent="space-between"
                  margin={'5px 0px'}
                >
                  <Box>
                    <CustomTextField
                      control={control}
                      name={`info[${index}].title`}
                      label="Title"
                      type="text"
                      error={errors.name}
                      onChange={e =>
                        handleInfoChange(index, 'title', e.target.value)
                      }
                    />
                  </Box>
                  <Box>
                    <CustomTextField
                      control={control}
                      name={`info[${index}].description`}
                      label="Description"
                      type="text"
                      error={errors.name}
                      onChange={e =>
                        handleInfoChange(index, 'description', e.target.value)
                      }
                    />
                  </Box>
                  <IconButton
                    onClick={() => deletInfo(i.num)}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}

            <Box display="flex" justifyContent="flex-end">
              <Button
                color="secondary"
                onClick={handlePreview}
                variant="outlined"
                size="large"
              >
                Download the preview
              </Button>
            </Box>
            <input
              ref={inputFileRef}
              type="file"
              onChange={handleChangeFile}
              hidden
            />
            {fileImg && <h3>{fileImg ? fileImg.name : ''}</h3>}

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
          </Box>
        </CustonModal>
      </form>
    </Box>
  );
};

export default CreateCardModal;
