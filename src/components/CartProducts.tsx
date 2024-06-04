import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Checkbox, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import ProductImage from '../assets/productImg2.png';

const CartProducts = () => {
  return (
    <Grid
      container
      direction="column"
      sx={{
        border: '1px groove #F6F8FA',
      }}
    >
      <Grid
        container
        alignItems="center"
        sx={{
          backgroundColor: '#F6F8FA',
          paddingY: 2,
          paddingX: 2,
          borderBottom: '1px groove #F6F8FA',
        }}
      >
        <Checkbox />
        <Typography
          sx={{
            fontSize: { xs: '12px', sm: '14px' },
            fontWeight: 'bold',
          }}
        >
          اسم البائع : فاليبيرتا
        </Typography>
      </Grid>
      <Grid
        container
        alignItems="center"
        sx={{
          paddingY: 4,
          paddingX: 3,
        }}
      >
        <Grid container alignItems="center" sm={2}>
          <Checkbox />
          <Box
            sx={{
              width: {
                xs: '30%',
                sm: '30%',
                md: '50%',
              },
            }}
          >
            <Image
              src={ProductImage}
              alt="Product Image"
              width={500} // Original width of the image
              height={300} // Original height of the image
              layout="responsive"
            />
          </Box>
        </Grid>
        <Grid
          container
          direction="column"
          sx={{
            flex: 1,
            paddingX: 2,
          }}
        >
          <Typography
            color="primary"
            sx={{
              fontSize: { xs: '10px', sm: '12px' },
              fontWeight: 'bold',
              marginBottom: 1,
            }}
          >
            ملابس نسائية{' '}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '12px', sm: '14px' },
              fontWeight: 'bold',
              marginBottom: 1,
            }}
          >
            قميص نسائي منقوش بالرسومات
          </Typography>
          <Grid container direction="row" gap={2} sx={{ marginBottom: 1 }}>
            <Typography
              sx={{
                fontSize: { xs: '10px', sm: '12px' },
                color: '#1C1717',
              }}
            >
              M قياس: 18/24
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '10px', sm: '12px' },
                color: '#1C1717',
              }}
            >
              MAD سعر القطعه: 860.00
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#DBA342',
                  height: '15px',
                  width: '15px',
                }}
              />
              <Typography
                sx={{
                  color: '#252634',
                  fontSize: { xs: '10px', sm: '12px' },
                }}
              >
                جملي
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 2, sm: 8 },
            marginLeft: 'auto',
          }}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={1}
            sx={{
              backgroundColor: '#F6F8FA',
              width: 'auto',
              paddingX: 2,
              paddingY: 1,
            }}
          >
            <AddIcon
              sx={{
                fontSize: { xs: 16, sm: 20 },
              }}
            />
            <Typography>1</Typography>
            <RemoveIcon
              sx={{
                fontSize: { xs: 16, sm: 20 },
              }}
            />
          </Grid>
          <Typography
            sx={{
              fontSize: { xs: '12px', sm: '14px' },
              fontWeight: 'bold',
            }}
          >
            MAD 860.00
          </Typography>
          <CloseIcon color="primary" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CartProducts;
