import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Slider, { type Settings } from 'react-slick';
import Brand1 from '../assets/brand1.png';
import Brand2 from '../assets/brand2.png';
import Brand3 from '../assets/brand3.png';
import Brand4 from '../assets/brand4.png';
import Brand5 from '../assets/brand5.png';
import Brand6 from '../assets/brand6.png';

const brands = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6];

const Brands: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box>
        <Typography
          sx={{
            fontSize: {
              sm: '15px',
              md: '20px',
              lg: '36px',
              xl: '36px',
            },
            fontWeight: 'bold',
          }}
        >
          ماركاتكم المفضلة
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: '10px',
              sm: '10px',
              md: '15px',
              lg: '20px',
              xl: '20px',
            },
            fontWeight: 'bold',
          }}
        >
          بعض الماركات التي نقدمها لكم يمكنكم تصفح متجرنا ومشاهدة المزيد
        </Typography>
      </Box>
      <Box sx={{ padding: '20px' }}>
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <Box key={index} sx={{ padding: '10px', textAlign: 'center' }}>
              <Box
                sx={{
                  border: '4px solid #F5F5F6',
                  paddingY: '20px',
                  borderRadius: '20px',
                }}
              >
                <Image
                  src={brand}
                  alt={`Brand ${index}`}
                  style={{
                    width: '100px',
                    height: '100px',
                    margin: '0 auto',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default Brands;
