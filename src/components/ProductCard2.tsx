import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import FlagIcon from '../assets/turkishFlag.png';

const ProductCard2 = ({ product }: ProductItemProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        padding: 2,
        maxWidth: 500,
        backgroundColor: 'white',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src={FlagIcon}
          alt="Flag"
          style={{
            width: 40,
            height: 40,
          }}
        />
      </Box>

      <Box sx={{ width: '70px', height: '70px' }}>
        <Image
          src={product.image}
          alt="Product"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>
      <Box sx={{ flex: 1, marginLeft: 1 }}>
        <Typography variant="subtitle2" sx={{ color: '#FF6666' }}>
          ملابس نسائية
        </Typography>
        <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold' }}>
          قميص نسائي منقوش بالرسومات
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontSize: '14px', color: '#AAACB0' }}
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
      </Box>
    </Box>
  );
};

export default ProductCard2;
