import Header from '@/components/Header';
import OrderedProducts from '@/components/OrderedProducts';
import { Grid } from '@mui/material';

const Page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    rtl: true,
  };
  return (
    <>
      <Header title="قائمة الرغبات" path="رئيسي" currentPath="قائمة الرغبات" />
      <Grid
        container
        gap={2}
        sx={{
          maxWidth: '1500px',
          marginInline: 'auto',
          padding: '1rem',
          paddingY: {
            xs: 4,
            sm: 4,
            md: 8,
            lg: 15,
            xl: 15,
          },
        }}
      >
        <Grid container xs={12}>
          <OrderedProducts />
          <OrderedProducts />
        </Grid>
      </Grid>
    </>
  );
};

export default Page;
