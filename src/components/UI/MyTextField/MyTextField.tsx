import React from 'react';
import { TextField, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Control, Controller, FieldError } from 'react-hook-form';

type CustomTextFieldProps = {
  control: Control<any>;
  name: string;
  label: string;
  type: string;
  error?: FieldError;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  control,
  name,
  label,
  type,
  error,
  onChange,
}) => {
  return (
    <Box display="flex" alignItems="center" marginBottom={'10px'}>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{ required: `Введите ${label.toLowerCase()}` }}
        render={({ field }) => (
          <TextField
            {...field}
            type={type}
            id={`outlined-basic-${name}`}
            label={label}
            variant="outlined"
            fullWidth
            error={Boolean(error)}
            helperText={error?.message}
            className="login__field"
            onChange={e => {
              field.onChange(e);
              if (onChange) onChange(e);
            }}
          />
        )}
      />
    </Box>
  );
};

export default CustomTextField;
