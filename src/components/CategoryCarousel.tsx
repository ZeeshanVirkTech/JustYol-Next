import { scrollCategoriesData } from '@/data/scrollCategoriesData';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
// Custom Arrows
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIcon
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
        color: '#ffffff',
        borderRadius: 4,
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIcon
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
        color: '#ffffff',
        borderRadius: 4,
        marginLeft: 10,
      }}
      onClick={onClick}
    />
  );
};

const settings = {
  dots: false, // Disable dots
  infinite: true,
  speed: 500,
  slidesToShow: 9,
  slidesToScroll: 4,
  //   arrows: true, // Enable arrows
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const CategoryCarousel = () => {
  const router = useRouter();
  const handleRouteClick = (categoryId: string) => {
    router.push(`/products/${categoryId}`);
  };
  return (
    <Box
      sx={{
        paddingInline: 3,
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
        {scrollCategoriesData.map((category, index) => (
          <Box
            key={index}
            sx={{
              aspectRatio: '1/1',
              maxWidth: '125px',
              textAlign: 'center',
              padding: 1,
              cursor: 'pointer',
            }}
            onClick={() => handleRouteClick('32432543243')}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                aspectRatio: '1/1',
                border: '3px solid #f5f5f6',
                borderRadius: '100%',
                transition: 'all 0.3s ease',
                width: {
                  xs: 60, // Width for xs screens
                  sm: 80, // Width for sm screens
                  md: 100, // Width for md screens and larger
                },
                height: {
                  xs: 60, // Height for xs screens
                  sm: 80, // Height for sm screens
                  md: 100, // Height for md screens and larger
                },
                '&:hover': {
                  backgroundColor: '#FF6666',
                  '& img': {
                    filter: 'brightness(0) invert(1)', // Change SVG fill to white
                  },
                  '& .category-title': {
                    color: '#FF6666', // Change text color to #FF6666
                  },
                },
              }}
            >
              <Image
                src={category.svg}
                alt={category.title}
                style={{ width: 40, height: 40 }}
              />
            </Box>
            <Typography
              className="category-title"
              variant="body2"
              sx={{ marginTop: 1, fontWeight: 600 }}
            >
              {category.title}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CategoryCarousel;
