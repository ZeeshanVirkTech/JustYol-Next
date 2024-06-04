import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import ProductImage from '../assets/productImg2.png';

const OrderedProducts = () => {
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
        {/* <Grid container alignItems="center" sm={2}> */}
        <Box>
          <Image
            src={ProductImage}
            alt="image"
            style={{
              width: '50%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </Box>
        {/* </Grid> */}
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
        </Grid>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: {
              xs: 'column-reverse',
              sm: 'column-reverse',
              md: 'row',
              lg: 'row',
              xl: 'row',
            },
            gap: { xs: 2, sm: 4 },
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
          <Button variant="contained" color="primary">
            <Typography
              sx={{
                color: '#ffffff',
              }}
            >
              {' '}
              أضف إلى السلة
            </Typography>{' '}
          </Button>
          <CloseIcon color="primary" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default OrderedProducts;
