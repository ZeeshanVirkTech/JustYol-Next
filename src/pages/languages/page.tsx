import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import BelgiumFlag from '../../assets/belgium.png';
import FranceFlag from '../../assets/france.png';
import GermanyFlag from '../../assets/germany.png';
import ItalyFlag from '../../assets/italy.png';
import LngBg from '../../assets/lngbg.png';
import logoBlack from '../../assets/logoBlack.svg';
import MoraccoFlag from '../../assets/morocco.png';
import SpainFlag from '../../assets/spain.png';
import SwedenFlag from '../../assets/sweden.png';
import TurkeyFlag from '../../assets/turkey.png';
import UKFlag from '../../assets/uk.png';

const countries = [
  { name: 'UK', image: UKFlag, translated: 'بريطانيا' },
  { name: 'Turkey', image: TurkeyFlag, translated: 'تركيا' },
  { name: 'Germany', image: GermanyFlag, translated: 'ألمانيا' },
  { name: 'Italy', image: ItalyFlag, translated: 'إيطاليا' },
  { name: 'Spain', image: SpainFlag, translated: 'إسبانيا' },
  { name: 'Morocco', image: MoraccoFlag, translated: 'المغرب' },
  { name: 'Sweden', image: SwedenFlag, translated: 'السويد' },
  { name: 'Belgium', image: BelgiumFlag, translated: 'بلجيكا' },
  { name: 'France', image: FranceFlag, translated: 'فرنسا' },
];

const Page = () => {
  const isXs = useMediaQuery((theme: any) => theme.breakpoints.down('xs'));
  const isSm = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: isXs || isSm ? 5 : 9,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${LngBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isXs ? 2 : 0,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: {
            xs: '400px',
            sm: '400px',
            md: '900px',
            lg: '900px',
            xl: '900px',
          },
          width: isXs ? '100%' : 'auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            alignItems: 'center',
          }}
        >
          <Typography variant={isXs ? 'body1' : 'h6'} sx={{ fontWeight: 800 }}>
            جـــســت يــــول
          </Typography>
          <Typography variant={isXs ? 'h6' : 'h4'} sx={{ fontWeight: 'bold' }}>
            |{' '}
          </Typography>
          <Image src={logoBlack} alt="image" />
        </Box>
        <Divider />
        <Typography variant={isXs ? 'body1' : 'h5'} sx={{ fontWeight: 800 }}>
          قم باختيار الدولة التي تريد التوصيل إليها
        </Typography>
        <Slider {...settings}>
          {countries.map((country, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <IconButton>
                <Image
                  src={country.image}
                  alt={`${country.name} flag`}
                  style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'contain',
                  }}
                />
              </IconButton>
              <Typography
                variant="body2"
                sx={{ marginTop: 1, color: '#81848A' }}
              >
                {country.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#81848A' }}>
                {country.translated}
              </Typography>
            </Box>
          ))}
        </Slider>
        <Typography variant="body2" sx={{ marginTop: 2, fontWeight: 800 }}>
          اختر الدولة التي تريد الشحن إليها. بمجرد اختيار البلد، يتم تحديد
          العملة المحلية للبلد المختار{' '}
        </Typography>
        <Box>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#000000',
              color: '#ffffff',
              fontWeight: 'bold',
              maxWidth: 150,
              paddingY: '10px',
            }}
          >
            حدد الدولة{' '}
          </Button>
        </Box>
        <Typography
          variant="body2"
          dir="ltr"
          sx={{
            fontWeight: 'bold',
          }}
        >
          © 2023 JustYol. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Page;
