import { Box } from '@mui/material';
import Image from 'next/image';
import Slider from 'react-slick';
import ProductImage from '../assets/productimage.png';

const images = [
  ProductImage,
  ProductImage,
  ProductImage,
  ProductImage,
  ProductImage,
  ProductImage,
];

const settings = {
  //   dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const ReviewCarousel = () => {
  return (
    <Box
      sx={{
        width: {
          xs: '100%',
          sm: '100%',
          md: '80%',
          lg: '80%',
          xl: '80%',
        },
        margin: 'auto',
        paddingTop: 2,
      }}
    >
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src={src}
              alt={`carousel-img-${index}`}
              width={124}
              height={114}
              layout="fixed"
              style={{
                objectFit: 'contain',
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ReviewCarousel;
