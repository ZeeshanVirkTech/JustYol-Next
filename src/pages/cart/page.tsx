import CarouselProductCard from '@/components/CarouselProductCard';
import CartProducts from '@/components/CartProducts';
import Header from '@/components/Header';
import { productsData } from '@/data/prodctsData';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Slider from 'react-slick';

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
  const router = useRouter();
  const handleRoutClick = (path: any) => {
    router.push(path);
  };
  return (
    <>
      <Header title="حقيبة التسوق" path="نساء" currentPath="حقيبة التسوق" />
      <Grid
        container
        gap={2}
        sx={{
          maxWidth: '1500px',
          marginInline: 'auto',
          padding: '1rem',
          // paddingY: {
          //   xs: 4,
          //   sm: 4,
          //   md: 8,
          //   lg: 15,
          //   xl: 15,
          // },
        }}
      >
        <Grid container xs={12} sm={12} md={8}>
          <CartProducts />
          <CartProducts />
        </Grid>
        <Grid container xs={12} sm={12} md={3} direction="column">
          <Grid
            container
            direction="column"
            gap={4}
            sx={{
              backgroundColor: '#F6F8FA',
              border: '1px groove #EEEEEE',
              width: '100%',
              height: 'auto',
              padding: 2,
              borderRadius: '5px',
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: {
                  xs: '14px',
                  sm: '14px',
                  md: '16px',
                  lg: '18px',
                  xl: '18px',
                },
              }}
            >
              ملخص الطلب
            </Typography>
            <Divider
              sx={{
                borderColor: '#EFEFEF',
              }}
            />
            <Grid container alignItems="center" justifyContent="space-between">
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: {
                    xs: '14px',
                    sm: '14px',
                    md: '16px',
                    lg: '18px',
                    xl: '18px',
                  },
                }}
              >
                المبلغ الفارغ
              </Typography>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: {
                    xs: '14px',
                    sm: '14px',
                    md: '16px',
                    lg: '18px',
                    xl: '18px',
                  },
                }}
              >
                MAD 860.00
              </Typography>
            </Grid>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{
                backgroundColor: '#E9F2E8',
                border: '1px groove #D0E6C7',
                padding: 2,
                borderRadius: '5px',
              }}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: {
                    xs: '14px',
                    sm: '14px',
                    md: '16px',
                    lg: '18px',
                    xl: '18px',
                  },
                }}
              >
                تطبيق رمز الخصم
              </Typography>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  color: '#3A9E00',
                  fontSize: {
                    xs: '14px',
                    sm: '14px',
                    md: '16px',
                    lg: '18px',
                    xl: '18px',
                  },
                }}
              >
                - MAD 50
              </Typography>
            </Grid>
            <Divider
              sx={{
                borderColor: '#EFEFEF',
              }}
            />
            <Grid container alignItems="center" justifyContent="space-between">
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: {
                    xs: '14px',
                    sm: '14px',
                    md: '16px',
                    lg: '18px',
                    xl: '18px',
                  },
                }}
              >
                رسوم الشحن
              </Typography>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: {
                    xs: '14px',
                    sm: '14px',
                    md: '16px',
                    lg: '18px',
                    xl: '18px',
                  },
                }}
              >
                MAD 60.00
              </Typography>
            </Grid>
            <Grid
              container
              alignItems="center"
              sx={{
                backgroundColor: '#E9F2E8',
                border: '1px groove #D0E6C7',
                padding: 2,
                borderRadius: '5px',
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: '14px',
                    sm: '14px',
                    md: '16px',
                    lg: '18px',
                    xl: '18px',
                  },
                }}
              >
                إذا اشتريت بمبلغ 500 درهم تحصل على خصم 15% أو الشحن المجاني
              </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="space-between">
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: {
                    xs: '14px',
                    sm: '14px',
                    md: '16px',
                    lg: '18px',
                    xl: '18px',
                  },
                }}
              >
                المجموع
              </Typography>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: {
                    xs: '18px',
                    sm: '18px',
                    md: '18px',
                    lg: '22px',
                    xl: '22px',
                  },
                }}
              >
                MAD 870.00
              </Typography>
            </Grid>
            <Button
              variant="contained"
              onClick={() => handleRoutClick('/cart/checkout')}
              sx={{
                paddingY: 2,
                fontWeight: 'bold',
                color: '#ffffff',
              }}
            >
              تأكيد عملية الشراء
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        sx={{
          paddingX: 15,
          paddingY: 5,
          marginBottom: 5,
          display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block',
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: '24px',
            marginBottom: 5,
          }}
        >
          منتجات مشابهة
        </Typography>
        <Slider {...settings}>
          {productsData.map((product, index) => (
            <Box key={index} sx={{ padding: '0 10px' }}>
              <CarouselProductCard product={product} />
            </Box>
          ))}
        </Slider>
      </Grid>
    </>
  );
};

export default Page;
