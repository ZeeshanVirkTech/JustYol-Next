export const topBarStyle = {
  primaryBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rootBox: {
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '10px',
    display: {
      xs: 'none',
      sm: 'none',
      md: 'flex',
      lg: 'flex',
      xl: 'flex',
    },
  },
  navMenuBox: {
    backgroundColor: '#ffffff',
    paddingX: {
      xs: 2,
      sm: 4,
      md: 6,
      lg: 12,
      xl: 12,
    },
    paddingY: 3,
    // display : {
    //   sm : "none",
    //   md : "block",
    //   lg : "block",
    //   xl : "block",
    // }
  },
  menuLogoBox: {},
  itemButton: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  primaryItemList: {
    cursor: 'pointer',
    paddingX: 2,
    paddingY: 0.5,
  },
  selectedItemList: {
    backgroundColor: '#FF6666',
    paddingX: 2,
    paddingY: 0.5,
    border: '1px solid #FF6666',
    borderRadius: 2,
    color: '#ffffff',
  },
  itemListSize: {
    fontSize: {
      md: 10,
      lg: 15,
      xl: 15,
    },
  },
};
