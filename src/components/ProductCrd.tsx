import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Favourite from '../assets/love.svg';
import ShopingBag from '../assets/shopping bag2.svg';
import FlagIcon from '../assets/turkishFlag.png';
const ProductCard = ({ product }: ProductItemProps) => {
  const router = useRouter();
  const handleRoutClick = (path: any) => {
    router.push(path);
  };
  return (
    <Box
      sx={{
        borderRadius: 2,
        border: '1px solid #e0e0e0',
        padding: 2,
        maxWidth: 300,
        textAlign: 'center',
        backgroundColor: 'white',
        cursor: 'pointer',
      }}
      // onClick={() => handleRoutClick()}
      onClick={() => handleRoutClick('/products/productdetails/434234234234')}
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src={product.image}
            alt="Product"
            style={{
              width: '30%',
              objectFit: 'contain',
              height: '30%',
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
          }}
        >
          <Image
            src={FlagIcon}
            alt="Flag"
            style={{ width: 40, height: 40, objectFit: 'contain' }}
          />
        </Box>
      </Box>
      <Typography
        variant="h6"
        component="div"
        sx={{ marginTop: 2, fontSize: '14px', fontWeight: 'bold' }}
      >
        قميص نسائي منقوش بالرسومات
      </Typography>
      <Box
        sx={{
          marginTop: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', fontSize: '16px', color: '#AAACB0' }}
        >
          235 MAD
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textDecoration: 'line-through',
            color: '#AAACB0',
            fontSize: '12px',
          }}
        >
          306 MAD
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <Image src={Favourite} alt="image" />
          <Box sx={{ display: 'flex', gap: 0.2 }}>
            <StarIcon sx={{ color: '#ffeb3b', fontSize: 15 }} />
            <StarIcon sx={{ color: '#ffeb3b', fontSize: 15 }} />
            <StarIcon sx={{ color: '#ffeb3b', fontSize: 15 }} />
            <StarIcon sx={{ color: '#ffeb3b', fontSize: 15 }} />
            <StarIcon sx={{ color: '#e0e0e0', fontSize: 15 }} />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <Image src={ShopingBag} alt="image" />
          <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }}>
            حقيبة التسوق
          </Typography>
          <ArrowBackIcon style={{ fontSize: '2px' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
