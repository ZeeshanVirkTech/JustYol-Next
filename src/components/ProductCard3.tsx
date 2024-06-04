import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Favourite from '../assets/love.svg';
import ShopingBag from '../assets/shopping bag2.svg';
import FlagIcon from '../assets/turkishFlag.png';
const ProductCard3 = ({ product }: ProductItemProps) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        border: '1px solid #e0e0e0',
        padding: 2,
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          '& img': {
            width: '100%',
            borderRadius: '8px 8px 0 0',
            borderColor: '#F6F6F6',
          },
        }}
      >
        <Box>
          <Image
            src={product.image}
            alt="Product"
            style={{
              width: '50%',
              objectFit: 'contain',
              height: '50%',
              backgroundColor: '#F6F6F6',
            }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '-15px',
            left: '-15px',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            padding: '5px',
          }}
        >
          <Image
            src={FlagIcon}
            alt="Flag"
            style={{ width: 40, height: 40, objectFit: 'contain' }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'start',
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ marginTop: 2, fontSize: '14px', fontWeight: 'bold' }}
          >
            قميص نسائي منقوش بالرسومات
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            // justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontSize: '16px', color: '#AAACB0' }}
          >
            {product.discountedPrice} MAD
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textDecoration: 'line-through',
              color: '#AAACB0',
              fontSize: '12px',
            }}
          >
            {product.originalPrice} MAD
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <Image src={Favourite} alt="Favourite" />
            <Box sx={{ display: 'flex', gap: 0.2 }}>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <StarIcon
                    key={index}
                    sx={{
                      color: index < product.rating ? '#ffeb3b' : '#e0e0e0',
                      fontSize: 15,
                    }}
                  />
                ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end',
              gap: 0.5,
              marginLeft: 'auto', // Add this to push the element to the left end
            }}
          >
            <Image src={ShopingBag} alt="Shopping Bag" />
            <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }}>
              حقيبة التسوق
            </Typography>
            <ArrowBackIcon style={{ fontSize: '2px' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard3;
