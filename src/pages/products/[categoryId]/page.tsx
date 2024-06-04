import ProductCard3 from '@/components/ProductCard3';
import ProductCard from '@/components/ProductCrd';
import ProductFilterMenu from '@/components/ProductFilterMenu';
import { productsData, productsData2 } from '@/data/prodctsData';
import AppsIcon from '@mui/icons-material/Apps';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Banner from '../../../assets/bannerproduct.png';

const Page = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        alignItems: { xs: 'center', sm: 'center', md: 'start' },
        maxWidth: '1500px',
        marginInline: 'auto',
        padding: '1rem',
        paddingY: { xs: 4, sm: 4, md: 8, lg: 15, xl: 15 },
        gap: 2,
      }}
    >
      <Box
        sx={{
          flex: 1,
          paddingX: { xs: 2, sm: 2, md: 0 },
          marginBottom: { xs: 4, sm: 4, md: 0 },
        }}
      >
        <ProductFilterMenu />
      </Box>
      <Box sx={{ flex: 4 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {/* Banner image */}
          <Image
            src={Banner}
            alt="image"
            width={1920}
            height={600}
            layout="responsive"
            objectFit="contain"
          />

          {/* Top section with product count and sorting options */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', sm: 'column', md: 'row' },
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
            }}
          >
            <Typography
              sx={{
                color: '#666666',
                marginBottom: { xs: 2, sm: 2, md: 0 },
                fontSize: {
                  xs: '12px',
                  sm: '12px',
                  md: '14px',
                  lg: '14px',
                  xl: '14px',
                },
              }}
            >
              323 المنتجات: 1 - 48 من{' '}
            </Typography>

            {/* Sorting options */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                marginBottom: { xs: 2, sm: 2, md: 0 },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <MenuIcon
                  sx={{
                    color: '#ACACAC',
                    fontSize: { xs: '12px', sm: '12px', md: '1.5rem' },
                  }}
                />
                <AppsIcon
                  sx={{
                    fontSize: { xs: '12px', sm: '12px', md: '1.5rem' },
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: '12px',
                      sm: '12px',
                      md: '14px',
                      lg: '14px',
                      xl: '14px',
                    },
                  }}
                >
                  ترتيب حسب :
                </Typography>
                <Typography
                  sx={{
                    color: '#ACACAC',
                    fontSize: {
                      xs: '12px',
                      sm: '12px',
                      md: '14px',
                      lg: '14px',
                      xl: '14px',
                    },
                  }}
                >
                  إفتراضي
                </Typography>
                <KeyboardArrowDownOutlinedIcon
                  sx={{
                    fontSize: { xs: '12px', sm: '12px', md: '1.5rem' },
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Product grids */}
          <Box>
            <Grid container spacing={4} justifyContent="center">
              {productsData.slice(0, 6).map((product, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  key={index}
                  display="flex"
                  justifyContent="center"
                >
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'flex',
                lg: 'flex',
                xl: 'flex',
              },
            }}
          >
            <Grid container spacing={4}>
              {productsData2.slice(0, 6).map((product, index) => (
                <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
                  <ProductCard3 product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
