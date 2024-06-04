import { Box, Grid, Typography } from '@mui/material';

interface HeaderProps {
  title: string;
  path: string;
  currentPath: string;
}

const Header = ({ title, path, currentPath }: HeaderProps) => {
  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingX: { xs: 2, sm: 2, md: 8, lg: 15, xl: 15 },
        paddingY: { xs: 3, sm: 3, md: 4, lg: 5, xl: 5 },
        backgroundColor: '#F8F9FB',
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: {
            xs: '16px',
            sm: '16px',
            md: '25px',
            lg: '32px',
            xl: '32px',
          },
        }}
      >
        {title}{' '}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          marginTop: 2,
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#FF6666',
        }}
      >
        <Typography
          sx={{
            color: '#000000',
            fontSize: {
              xs: '12px',
              sm: '12px',
              md: '16px',
              lg: '16px',
              xl: '16px',
            },
          }}
        >
          {path} /
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: '12px',
              sm: '12px',
              md: '16px',
              lg: '16px',
              xl: '16px',
            },
          }}
        >
          {currentPath}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Header;
