import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const InputField = styled(TextField)(({ theme }) => ({
  textAlign: 'right',
  padding: '0 !important',
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#DCDBDD',
    },
    '&:hover fieldset': {
      borderColor: '#DCDBDD',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#84818A',
    fontSize: '1rem',
  },
  '& .MuiInputBase-input': {
    color: '#000000',
    fontSize: '1rem',
  },
  [theme.breakpoints.down('xs')]: {
    '& .MuiInputBase-input': {
      height: '10px',
    },
  },
  [theme.breakpoints.up('sm')]: {
    '& .MuiInputBase-input': {
      height: '20px',
    },
  },
  [theme.breakpoints.up('md')]: {
    '& .MuiInputBase-input': {
      height: '20px',
    },
  },
}));

export default InputField;
