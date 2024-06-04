import { tags } from '@/data/tagsData';
import { Box, Grid, Link, Typography } from '@mui/material';
import Image from 'next/image';
import AppStore from '../assets/appstore.png';
import Aramex from '../assets/aramex.png';
import DHL from '../assets/dhl.png';
import MasterCard from '../assets/mastercard.png';
import PlayStore from '../assets/playstore.png';
import Ups from '../assets/ups.png';
import Visa from '../assets/visa.png';
import WindowStore from '../assets/windowstore.png';
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#F8FAFC',
          paddingX: {
            md: 2,
            lg: 15,
            xl: 15,
          },
          paddingY: 2,
          gap: {
            sm: 1,
            md: 2,
            lg: 2,
            xl: 2,
          },
          display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block',
          },
          color: 'gray',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-between',
            gap: 12,
          }}
        >
          <Grid item>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 'bold',
              }}
            >
              معلومات
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                gap: 2,
              }}
            >
              <Link href="#" color="inherit" underline="hover">
                الشروط والأحكام
              </Link>
              <Link href="#" color="inherit" underline="hover">
                سياسة الخصوصية
              </Link>
              <Link href="#" color="inherit" underline="hover">
                اتفاقية البيع عن بعد
              </Link>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                marginTop: 5,
              }}
            >
              <Image
                src={WindowStore}
                alt="Windows Store"
                width={100}
                height={30}
                style={{ marginLeft: 2 }}
              />
              <Image
                src={AppStore}
                alt="App Store"
                width={100}
                height={30}
                style={{ marginLeft: 2 }}
              />
              <Image
                src={PlayStore}
                alt="Google Play"
                width={100}
                height={30}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 'bold',
              }}
            >
              روابط
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                gap: 2,
              }}
            >
              <Link href="#" color="inherit" underline="hover">
                قائمة الرغبات
              </Link>
              <Link href="#" color="inherit" underline="hover">
                العربة
              </Link>
              <Link href="#" color="inherit" underline="hover">
                التسوق بالعمولة Justyol برنامج شركاء
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 'bold',
              }}
            >
              حسابي
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                gap: 2,
              }}
            >
              <Link href="#" color="inherit" underline="hover">
                طلباتي
              </Link>
              <Link href="#" color="inherit" underline="hover">
                كوبوناتي
              </Link>
              <Link href="#" color="inherit" underline="hover">
                عنواني
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 'bold',
              }}
            >
              خيارات الدفع
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                // alignItems: "center",
              }}
            >
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Image
                  src={MasterCard}
                  alt="MasterCard"
                  style={{
                    width: '20%',
                    height: '50%',
                    objectFit: 'contain',
                  }}
                />
                <Image
                  src={Visa}
                  alt="Visa"
                  style={{
                    width: '30%',
                    height: '50%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontSize: 18,
                  fontWeight: 'bold',
                }}
              >
                الشحن إلى جميع أنحاء العالم
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Image
                  src={Aramex}
                  alt="Aramex"
                  style={{
                    width: '30%',
                    height: '50%',
                    objectFit: 'contain',
                  }}
                />
                <Image
                  src={Ups}
                  alt="UPS"
                  style={{
                    width: '15%',
                    height: '30%',
                    objectFit: 'contain',
                  }}
                />
                <Image
                  src={DHL}
                  alt="DHL"
                  style={{
                    width: '35%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          padding: '20px 0',
          backgroundColor: '#f5f5f5',
          display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block',
          },
        }}
      >
        <Grid container justifyContent="center" dir="ltr">
          <Grid item xs={10} dir="ltr">
            <Box
              dir="ltr"
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center',
                textAlign: 'left',
              }}
            >
              {tags.map((tag, index) => (
                <Link
                  dir="ltr"
                  key={index}
                  href="#"
                  sx={{
                    color: '#666666',
                    textDecoration: 'none',
                    position: 'relative',
                    '&:hover': { color: 'black' },
                    '&:not(:last-of-type)::after': {
                      content: '""',
                      position: 'absolute',
                      right: '-0.5rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      height: '70%', // Adjust the height as needed
                      borderRight: '1px solid #ccc',
                    },
                    paddingRight: '1rem',
                  }}
                >
                  {tag}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: '#F',
          paddingX: {
            xs: 2,
            sm: 4,
            md: 10,
            lg: 15,
            xl: 15,
          },
          paddingY: 2,
          color: 'gray',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: {
                xs: 10,
                sm: 10,
                md: 15,
                lg: 20,
                xl: 20,
              },
            }}
          >
            Justyol.© 2023 All Rights Reserved
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.865"
            height="25"
            viewBox="0 0 24.865 25"
          >
            <g id="Twitter" transform="translate(-1275.66 -4481)">
              <rect
                id="Rectangle_12_copy"
                data-name="Rectangle 12 copy"
                width="24.865"
                height="25"
                rx="12.432"
                transform="translate(1275.66 4481)"
                fill="#020814"
              />
              <path
                id="Shape_1_copy_54"
                data-name="Shape 1 copy 54"
                d="M1294.215,4491.564a3.525,3.525,0,0,0,1.356-.363s-.093.33-1.258,1.374a6.842,6.842,0,0,1-5.58,7.012,7.226,7.226,0,0,1-5.224-.993,4.329,4.329,0,0,0,3.59-1.01,2.354,2.354,0,0,1-2.195-1.667,2.02,2.02,0,0,0,1-.034,2.39,2.39,0,0,1-1.855-2.423,1.593,1.593,0,0,0,.97.3,2.59,2.59,0,0,1-.647-3.215s2.28,2.667,5.105,2.508a2.378,2.378,0,0,1-.076-.6,2.433,2.433,0,0,1,4.159-1.683,2.809,2.809,0,0,0,1.651-.522S1295.254,4490.769,1294.215,4491.564Z"
                transform="translate(-1.204 -1.39)"
                fill="#fff"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.839"
            height="25"
            viewBox="0 0 24.839 25"
          >
            <g id="Instagram" transform="translate(-1354.66 -4481)">
              <rect
                id="Rectangle_12_copy_3"
                data-name="Rectangle 12 copy 3"
                width="24.839"
                height="25"
                rx="12.42"
                transform="translate(1354.66 4481)"
                fill="#020814"
              />
              <path
                id="Shape_16_copy_2"
                data-name="Shape 16 copy 2"
                d="M1372.042,4488.308h-7.7a2.436,2.436,0,0,0-2.427,2.439v7.745a2.436,2.436,0,0,0,2.427,2.439h7.7a2.436,2.436,0,0,0,2.427-2.439v-7.745A2.436,2.436,0,0,0,1372.042,4488.308Zm.7,1.455h.278v2.14l-2.122.006-.007-2.14Zm-6.34,3.562a2.22,2.22,0,1,1-.418,1.3A2.2,2.2,0,0,1,1366.4,4493.325Zm6.847,5.168a1.207,1.207,0,0,1-1.2,1.209h-7.7a1.207,1.207,0,0,1-1.2-1.209v-5.168h1.875a3.433,3.433,0,1,0,6.361,0h1.875Z"
                transform="translate(-1.112 -1.121)"
                fill="#fff"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.839"
            height="25"
            viewBox="0 0 24.839 25"
          >
            <g id="RSS" transform="translate(-1197 -4480.87)">
              <rect
                id="Rectangle_12_copy_4"
                data-name="Rectangle 12 copy 4"
                width="24.839"
                height="25"
                rx="12.42"
                transform="translate(1197 4480.87)"
                fill="#f66"
              />
              <path
                id="icon_copy_2"
                data-name="icon copy 2"
                d="M9.532,11.869A9.568,9.568,0,0,0,0,2.286V0A11.839,11.839,0,0,1,11.807,11.869Zm-4.134,0A5.42,5.42,0,0,0,0,6.441V4.155a7.694,7.694,0,0,1,7.673,7.715ZM0,10.472a1.388,1.388,0,1,1,1.388,1.4A1.392,1.392,0,0,1,0,10.472Z"
                transform="translate(1203.405 4487.39)"
                fill="#fff"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.839"
            height="25"
            viewBox="0 0 24.839 25"
          >
            <g id="Facebook" transform="translate(-1157 -4481)">
              <rect
                id="Rectangle_12"
                data-name="Rectangle 12"
                width="24.839"
                height="25"
                rx="12.42"
                transform="translate(1157 4481)"
                fill="#020814"
              />
              <path
                id="Shape_4_copy_2"
                data-name="Shape 4 copy 2"
                d="M1174.649,4489.182h-2.219a2.576,2.576,0,0,0-2.547,1.961,7.433,7.433,0,0,0-.162,1.977h-1.966v1.468h1.964v5.737h2.3v-5.731h2.129v-1.474h-2.134v-1.063a1.451,1.451,0,0,1,1.58-1.235h1.051Z"
                transform="translate(-1.65 -1.255)"
                fill="#fff"
              />
            </g>
          </svg>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
