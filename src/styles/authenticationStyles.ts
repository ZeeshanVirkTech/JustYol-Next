export const authenticationStyles = {
  rootBox: {
    minHeight: '100vh',
    backgroundColor: '#00000080',
  },
  primaryButton: {
    borderRadius: '5px',
    paddingX: {
      xs: '8px',
      sm: '10px',
      md: '20px',
      lg: '20px',
      xl: '20px',
    },
    paddingY: {
      xs: '8px',
      sm: '8px',
      md: '10px',
      lg: '10px',
      xl: '10px',
    },
  },
  secondaryButton: {
    borderRadius: '5px',
    paddingX: {
      xs: '8px',
      sm: '10px',
      md: '20px',
      lg: '20px',
      xl: '20px',
    },
    paddingY: {
      xs: '8px',
      sm: '8px',
      md: '10px',
      lg: '10px',
      xl: '10px',
    },
    boxShadow: 'none',
    border: '1px solid #DCDBDD',
    display: 'flex',
    alignItems: 'center',
  },
  inputField: {
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
  },
  text: {
    fontSize: {
      xs: 8,
      sm: 10,
      md: 12,
      lg: 12,
      xl: 14,
    },
  },
  labelPrope: {
    left: 'auto',
    right: 0,
    top: 0,
    color: '#84818A',
  },
};
