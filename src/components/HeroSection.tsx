import { slides } from '@/data/heroSectionData';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Slider, { type Settings } from 'react-slick';

const HeroSection: React.FC = () => {
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
        borderRadius: 4,
        border: 'none',
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{ position: 'relative', borderRadius: 4, border: 'none' }}
          >
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
                top: {
                  sm: '100px',
                  md: '50px',
                  lg: '170px',
                  xl: '170px',
                },
                left: 0,
                right: '100px',
                width: '30%',
                height: '30%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '20px',
                color: '#ffffff',
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'block',
                  lg: 'block',
                  xl: 'block',
                },
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    marginBottom: '10px',
                    textAlign: 'left',
                    whiteSpace: 'nowrap',
                    fontSize: {
                      sm: '30px',
                      md: '30px',
                      lg: '50px',
                      xl: '50px',
                    },
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    marginBottom: '10px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: {
                      sm: '40px',
                      md: '40px',
                      lg: '50px',
                      xl: '50px',
                    },
                  }}
                >
                  {slide.subtitle}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: '20px',
                    textAlign: 'left',
                    fontSize: {
                      sm: '10px',
                      md: '20px',
                      lg: '20px',
                      xl: '20px',
                    },
                  }}
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

export default HeroSection;
