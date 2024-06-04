import { slides } from '@/data/heroSectionData';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Slider, { type Settings } from 'react-slick';

const HeroSection2: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box
      sx={{
        overflow: 'hidden',
        // display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 4,
        // paddingX: 5,
        // border : "none"
        display: {
          xs: 'none',
          sm: 'none',
          md: 'block',
          lg: 'block',
          xl: 'block',
        },
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            <Image
              src={slide.image}
              alt={slide.title}
              style={{
                width: '100%',
                height: '50%',
                display: 'block',
                objectFit: 'contain',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '170px',
                left: 0,
                right: '100px',
                width: '30%',
                height: '30%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '20px',
                color: '#ffffff',
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{ marginBottom: '10px', textAlign: 'left' }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    marginBottom: '10px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                  }}
                >
                  {slide.subtitle}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ marginBottom: '20px', textAlign: 'left' }}
                >
                  {slide.description}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'left',
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#ffffff',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#FF6666',
                        color: '#ffffff ',
                      },
                    }}
                  >
                    {slide.buttonText}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection2;
