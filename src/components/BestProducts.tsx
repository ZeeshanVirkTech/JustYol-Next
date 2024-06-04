import { productsData } from '@/data/prodctsData';
import { Divider, Grid, Typography } from '@mui/material';
import ProductCard2 from './ProductCard2';

const BestProducts = () => {
  return (
    <Grid container>
      <Grid
        container
        xs={12}
        sm={6}
        md={6}
        lg={4}
        xl={4}
        direction="column"
        gap={6}
      >
        <Grid>
          <Typography
            sx={{
              color: '#62646C',
              fontSize: {
                xs: '20px',
                sm: '20px',
                md: '20px',
                lg: '24px',
                xl: '24px',
              },
              fontWeight: 'bold',
            }}
          >
            أفضل المنتجات
          </Typography>
          <Divider
            sx={{
              backgroundColor: '#FF6666',
              width: '30%',
            }}
          />
        </Grid>
        <Grid container direction="row" gap={2}>
          {productsData
            .slice(0, 4)
            .map((product: ProductItem, index: number) => (
              <ProductCard2 key={index} product={product} />
            ))}
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        sm={6}
        md={6}
        lg={4}
        xl={4}
        direction="column"
        gap={6}
      >
        <Grid>
          <Typography
            sx={{
              color: '#62646C',
              fontSize: {
                xs: '20px',
                sm: '20px',
                md: '20px',
                lg: '24px',
                xl: '24px',
              },
              fontWeight: 'bold',
            }}
          >
            منتجات رائجة{' '}
          </Typography>
          <Divider
            sx={{
              backgroundColor: '#FF6666',
              width: '30%',
            }}
          />
        </Grid>
        <Grid container direction="row" gap={2}>
          {productsData
            .slice(0, 4)
            .map((product: ProductItem, index: number) => (
              <ProductCard2 key={index} product={product} />
            ))}
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        sm={6}
        md={6}
        lg={4}
        xl={4}
        direction="column"
        gap={6}
      >
        <Grid>
          <Typography
            sx={{
              color: '#62646C',
              fontSize: {
                xs: '20px',
                sm: '20px',
                md: '20px',
                lg: '24px',
                xl: '24px',
              },
              fontWeight: 'bold',
            }}
          >
            الأكثر مبيعا{' '}
          </Typography>
          <Divider
            sx={{
              backgroundColor: '#FF6666',
              width: '30%',
            }}
          />
        </Grid>
        <Grid container direction="row" gap={2}>
          {productsData
            .slice(0, 4)
            .map((product: ProductItem, index: number) => (
              <ProductCard2 key={index} product={product} />
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BestProducts;
