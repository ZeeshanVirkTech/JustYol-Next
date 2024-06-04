import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import comingsoon from '../../assets/comingsoon.png';
import logo from '../../assets/logo.svg';
const Page = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 36,
    hours: 47,
    minutes: 25,
    seconds: 10,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = { ...prev };
        if (newTime.seconds > 0) {
          newTime.seconds -= 1;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes -= 1;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours -= 1;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days -= 1;
              }
            }
          }
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        backgroundImage: `url(${comingsoon.src})`, // Update the path as needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        textAlign: 'center',
        filter: 'grayscale(100%)',
      }}
    >
      <Box
        sx={{
          zIndex: 1,
          marginBottom: 20,
          position: 'absolute',
          top: 40,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Image
          src={logo}
          alt="image"
          style={{
            width: 150,
            color: '#ffffff',
            height: 'auto',
          }}
        />
        <Typography
          sx={{
            fontSize: {
              md: 16,
              lg: 19,
              xl: 20,
            },
          }}
        >
          جـــســت يــــول
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />
      <Box
        sx={{
          zIndex: 1,
          marginBottom: 8,
        }}
      >
        <Typography
          variant="h2"
          sx={{ zIndex: 1, fontWeight: 'bold', fontSize: '48px' }}
        >
          انتظرونا قريباً
        </Typography>
        <Typography sx={{ zIndex: 1, marginBottom: '1rem', fontSize: '14px' }}>
          سيتم افتتاح الموقع في المعاد المحدد. ادخلوا لانهاء اعداد النقل.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row-reverse',
          gap: 2,
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: '#fff',
            padding: '1rem',
            borderRadius: '8px',
            width: {
              xs: '70px',
              sm: '70px',
              md: '155px',
              lg: '155px',
              xl: '155px',
            },
            height: {
              xs: '70px',
              sm: '70px',
              md: '155px',
              lg: '155px',
              xl: '155px',
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: {
                xs: '30px',
                sm: '30px',
                md: '45px',
                lg: '64px',
                xl: '64px',
              },
            }}
          >
            {timeLeft.days}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#000', fontWeight: 'bold', fontSize: '12px' }}
          >
            أيام
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: '#fff',
            padding: '1rem',
            borderRadius: '8px',
            width: {
              xs: '70px',
              sm: '70px',
              md: '155px',
              lg: '155px',
              xl: '155px',
            },
            height: {
              xs: '70px',
              sm: '70px',
              md: '155px',
              lg: '155px',
              xl: '155px',
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: {
                xs: '30px',
                sm: '30px',
                md: '45px',
                lg: '64px',
                xl: '64px',
              },
            }}
          >
            {timeLeft.hours}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#000', fontWeight: 'bold', fontSize: '12px' }}
          >
            ساعات
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: '#fff',
            padding: '1rem',
            borderRadius: '8px',
            width: {
              xs: '70px',
              sm: '70px',
              md: '155px',
              lg: '155px',
              xl: '155px',
            },
            height: {
              xs: '70px',
              sm: '70px',
              md: '155px',
              lg: '155px',
              xl: '155px',
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: {
                xs: '30px',
                sm: '30px',
                md: '45px',
                lg: '64px',
                xl: '64px',
              },
            }}
          >
            {timeLeft.minutes}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#000', fontWeight: 'bold', fontSize: '12px' }}
          >
            دقائق
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: '#fff',
            padding: '1rem',
            borderRadius: '8px',
            width: {
              xs: '70px',
              sm: '70px',
              md: '155px',
              lg: '155px',
              xl: '155px',
            },
            height: {
              xs: '70px',
              sm: '70px',
              md: '155px',
              lg: '155px',
              xl: '155px',
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: {
                xs: '30px',
                sm: '30px',
                md: '45px',
                lg: '64px',
                xl: '64px',
              },
            }}
          >
            {timeLeft.seconds}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#000', fontWeight: 'bold', fontSize: '12px' }}
          >
            ثواني
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
