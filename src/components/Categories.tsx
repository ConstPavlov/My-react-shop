import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Categories: React.FC<any> = React.memo(({ filterNames, handleChange }) => {
  const localFilterNames = [...filterNames];
  // const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, checked } = event.target;
  // };

  return (
    <div>
      <h1>Фильтры</h1>
      <div>
        {/* <FormGroup>
        <h2>Категории</h2>
        {categoryArray.map((brand: ICategory, i: number) => (
          <FormControlLabel
            key={i + 1}
            control={
              <Checkbox
                name={brand.name}
                onChange={(e) => setCategory(i, { checked: e.target.checked })}
              />
            }
            label={brand.name}
          />
        ))}
      </FormGroup> */}
        <FormGroup>
          <h2>Бренд</h2>
          {localFilterNames.map(({ name, disabledChx }: any, i: number) => (
            <FormControlLabel
              key={i}
              control={<Checkbox name={name} onChange={handleChange} disabled={disabledChx} />}
              label={name}
            />
          ))}
        </FormGroup>
      </div>
    </div>
  );
});

export default Categories;
