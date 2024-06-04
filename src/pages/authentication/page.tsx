/* eslint-disable react/no-unescaped-entities */
import InputField from '@/components/InputField';
import { authenticationStyles } from '@/styles/authenticationStyles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
function MyComponent() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const router = useRouter();
  const handleRoutClick = () => {
    router.push('/');
  };
  const handleLoginClick = () => {
    setIsLogin(true);
  };
  const handleSignupClick = () => {
    setIsLogin(false);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  const handleClickShowPasswordLogin = () => {
    setShowPasswordLogin(!showPasswordLogin);
  };
  const handleMouseDownPasswordLogin = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  return (
    <Stack
      display="flex"
      alignItems="center"
      overflow="hidden"
      justifyContent="center"
      sx={authenticationStyles.rootBox}
    >
      <Box
        p={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
        sx={{
          borderRadius: '20px',
          backgroundColor: '#ffffff',
          gap: {
            xs: 2,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: '20px',
              display: {
                xs: 'none',
                sm: 'none',
                md: 'none',
                lg: 'flex',
                xl: 'flex',
              },
            }}
          >
            جست يول
          </Typography>
          <Box
            sx={{
              width: 4,
              height: 25,
              backgroundColor: '#000000',
              display: {
                xs: 'none',
                sm: 'none',
                md: 'none',
                lg: 'flex',
                xl: 'flex',
              },
            }}
          />
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="150.7 139 448.6 82.9"
            style={{ width: 110, fill: 'rgb(35, 31, 32)' }}
          >
            {'{'}" "{'}'}
            <g id="Layer">
              {'{'}" "{'}'}
              <path
                id="Layer"
                className="s0"
                d="m440.1 185v31.4h-16.3v-31.5l-27.6-44.2h18.1l18.2 29.5 18.8-29.5h16.6c0 0-27.8 44.3-27.8 44.3z"
              />
              {'{'}" "{'}'}
              <path
                id="Layer"
                fillRule="evenodd"
                className="s0"
                d="m468.7 178c0-25.8 14-38.7 36.7-38.7 22.7 0 37 13.2 37 38.2 0 25-14.6 40.3-37.3 40.3-22.7 0-36.4-13.7-36.4-39.8zm57-0.3c0-16.9-7.4-24.9-20.2-24.9-12.7-0.1-20 8-20 25.2 0 17.2 7.6 26.2 19.8 26.2 12.3 0 20.4-9.1 20.4-26.5z"
              />
              {'{'}" "{'}'}
              <path
                id="Layer"
                className="s0"
                d="m599.3 203.2v13.2h-44.8v-75.7h16.3v62.5z"
              />
              {'{'}" "{'}'}
            </g>
            {'{'}" "{'}'}
            <g id="Layer">
              {'{'}" "{'}'}
              <path
                id="Layer"
                className="s0"
                d="m248 185.3v-45.1h16.8v45.1c0 17.9-14.5 32.5-32.5 32.5-17.9 0-32.5-14.6-32.5-32.5v-45.1h16.8v45.1c0 8.6 7.1 15.7 15.7 15.7 8.7 0 15.7-7.1 15.7-15.7z"
              />
              {'{'}" "{'}'}
              <path
                id="Layer"
                className="s0"
                d="m182.9 157v30.8c0 15.9-10.3 29.3-24.5 34.1l-5.4-16c7.6-2.5 13.1-9.7 13.1-18.1v-34.1h-15.4v-13.5h32.2z"
              />
              {'{'}" "{'}'}
              <path
                id="Layer"
                className="s0"
                d="m367.9 153.7v34.1c0 8.4 5.5 15.6 13.1 18.1l-5.4 16c-14.3-4.8-24.6-18.2-24.6-34.1v-47.6h16.9 15.4v13.5c0 0-15.4 0-15.4 0z"
              />
              {'{'}" "{'}'}
              <path
                id="Layer"
                className="s0"
                d="m296.3 159.8c0 14.2 41.3 8.8 41.3 34.7 0 14-12 23.3-30.2 23.3-16.7 0-27.8-7-30-20.3l15.8-4.1c1.4 6.8 7.4 11 16.5 11 6.7 0 11.1-2.7 11.1-7.2 0-13.8-41.3-8.1-41.3-35.1 0-16 14.5-23.1 29.2-23.1 12.1 0 25.3 4.8 26.9 20.8l-14.9 3.9c-1.4-7.8-6.6-11.2-13.9-11.2-5.7 0-10.5 2.3-10.5 7.3z"
              />
              {'{'}" "{'}'}
            </g>
            {'{'}" "{'}'}
          </svg>
        </Box>
        <Box width="100%" height={2} bgcolor="#8F949E38" />
        <Box display="flex" gap={3} bgcolor="#F5F5F5" p={1} borderRadius={2}>
          <Button
            variant={isLogin ? 'contained' : 'text'}
            color={isLogin ? 'black' : 'inherit'}
            onClick={handleLoginClick}
            sx={authenticationStyles.primaryButton}
          >
            <Typography
              sx={authenticationStyles.text}
              color={isLogin ? '#ffffff' : '#565A62'}
            >
              تسجيل دخول
            </Typography>
          </Button>
          <Button
            variant={!isLogin ? 'contained' : 'text'}
            color={!isLogin ? 'black' : 'inherit'}
            onClick={handleSignupClick}
            sx={authenticationStyles.primaryButton}
          >
            <Typography
              sx={authenticationStyles.text}
              color={!isLogin ? '#ffffff' : '#565A62'}
            >
              تسجيل حساب جديد
            </Typography>
          </Button>
        </Box>
        <Box display="flex" gap={1}>
          <Button
            variant="contained"
            color="white"
            sx={authenticationStyles.secondaryButton}
          >
            <Box display="flex" gap={1} alignItems="center">
              <svg
                id="iphone"
                xmlns="http://www.w3.org/2000/svg"
                width="9.742"
                height="17.861"
                viewBox="0 0 9.742 17.861"
              >
                <path
                  id="Path_250"
                  data-name="Path 250"
                  d="M8.011,0H2.068a1.9,1.9,0,0,0-1.9,1.9V15.961a1.9,1.9,0,0,0,1.9,1.9H8.011a1.9,1.9,0,0,0,1.9-1.9V1.9A1.9,1.9,0,0,0,8.011,0ZM9.1,15.961a1.089,1.089,0,0,1-1.088,1.088H2.068A1.089,1.089,0,0,1,.98,15.961V1.9A1.089,1.089,0,0,1,2.068.812H8.011A1.089,1.089,0,0,1,9.1,1.9Zm0,0"
                  transform="translate(-0.168)"
                />
                <path
                  id="Path_251"
                  data-name="Path 251"
                  d="M88.342,42.668H85.906a.406.406,0,1,0,0,.812h2.436a.406.406,0,0,0,0-.812Zm0,0"
                  transform="translate(-82.253 -41.044)"
                />
                <path
                  id="Path_252"
                  data-name="Path 252"
                  d="M108.456,384.812a.812.812,0,1,1-.812-.812A.812.812,0,0,1,108.456,384.812Zm0,0"
                  transform="translate(-102.773 -369.386)"
                />
              </svg>
              <Typography sx={authenticationStyles.text}>
                دخول عبر الهاتف
              </Typography>
            </Box>
          </Button>
          <Button
            variant="contained"
            color="white"
            sx={authenticationStyles.secondaryButton}
          >
            <Box display="flex" gap={1} alignItems="center">
              <svg
                id="Group_239"
                data-name="Group 239"
                xmlns="http://www.w3.org/2000/svg"
                width="15.352"
                height="15.352"
                viewBox="0 0 13.352 13.352"
              >
                <circle
                  id="Oval"
                  cx="6.676"
                  cy="6.676"
                  r="6.676"
                  fill="#1977f3"
                />
                <path
                  id="Path"
                  d="M5.337,6l.3-1.93H3.782V2.816A.965.965,0,0,1,4.87,1.773h.842V.13A10.263,10.263,0,0,0,4.217,0,2.356,2.356,0,0,0,1.7,2.6V4.069H0V6H1.7v4.665a6.7,6.7,0,0,0,1.043.081,6.819,6.819,0,0,0,1.043-.081V6Z"
                  transform="translate(3.937 2.607)"
                  fill="#fff"
                />
              </svg>
              <Typography sx={authenticationStyles.text}>
                دخول بالفيسبوك
              </Typography>
            </Box>
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSignupClick}
            sx={{ ...authenticationStyles.primaryButton, color: '#ffffff' }}
          >
            <Box display="flex" gap={1} alignItems="center">
              <svg
                id="Group_240"
                data-name="Group 240"
                xmlns="http://www.w3.org/2000/svg"
                width="13.324"
                height="13.319"
                viewBox="0 0 13.324 13.319"
              >
                <path
                  id="Path"
                  d="M6.528,1.353A7.678,7.678,0,0,0,6.411,0H0V2.564H3.671A3.079,3.079,0,0,1,2.312,4.588V6.252H4.5A6.439,6.439,0,0,0,6.528,1.353Z"
                  transform="translate(6.796 5.46)"
                  fill="#fff"
                />
                <path
                  id="Path-2"
                  data-name="Path"
                  d="M6.073,5.383a6.585,6.585,0,0,0,4.505-1.608L8.388,2.112a4.128,4.128,0,0,1-2.312.636A4.06,4.06,0,0,1,2.26,0H0V1.715A6.814,6.814,0,0,0,6.073,5.383Z"
                  transform="translate(0.723 7.936)"
                  fill="#fff"
                />
                <path
                  id="Path-3"
                  data-name="Path"
                  d="M2.981,4.265a3.913,3.913,0,0,1,0-2.55V0H.723a6.545,6.545,0,0,0,0,5.98L2.981,4.265Z"
                  transform="translate(0 3.671)"
                  fill="#fff"
                />
                <path
                  id="Path-4"
                  data-name="Path"
                  d="M6.073,2.636a3.735,3.735,0,0,1,2.607,1l1.94-1.9A6.607,6.607,0,0,0,6.073,0,6.811,6.811,0,0,0,0,3.671L2.258,5.386A4.057,4.057,0,0,1,6.073,2.636Z"
                  transform="translate(0.723)"
                  fill="#fff"
                />
              </svg>
              <Typography sx={authenticationStyles.text}>
                دخول عبر جوجل
              </Typography>
            </Box>
          </Button>
        </Box>
        <Box>
          {/* <Box width="100%" height={2} bgcolor="#84818A" /> */}
          <Typography sx={authenticationStyles.text} color="#84818A">
            أو
          </Typography>
          {/* <Box width="100%" height={2} bgcolor="#84818A" /> */}
        </Box>
        {isLogin ? (
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <InputField
              fullWidth
              label="البريد الالكتروني"
              variant="outlined"
              type="email"
              inputProps={{}}
            />
            <TextField
              fullWidth
              label="كلمة المرور"
              variant="outlined"
              type={showPasswordLogin ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPasswordLogin}
                      onMouseDown={handleMouseDownPasswordLogin}
                      edge="end"
                    >
                      {showPasswordLogin ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography sx={authenticationStyles.text}>
                نسيت كلمة المرور؟
              </Typography>
              <Button
                variant="contained"
                color="black"
                sx={{
                  color: '#ffffff',
                  padding: '8px 30px',
                }}
              >
                <Typography
                  sx={authenticationStyles.text}
                  onClick={handleRoutClick}
                >
                  دخول
                </Typography>
              </Button>
            </Box>
          </form>
        ) : (
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <InputField fullWidth label="الاسم" variant="outlined" />
            <InputField
              fullWidth
              label="البريد الالكتروني"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="كلمة المرور"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography sx={authenticationStyles.text}>
                نسيت كلمة المرور؟
              </Typography>
              <Button
                variant="contained"
                color="black"
                sx={{
                  color: '#ffffff',
                  padding: '8px 30px',
                }}
              >
                <Typography
                  sx={authenticationStyles.text}
                  onClick={handleRoutClick}
                >
                  تسجيل
                </Typography>
              </Button>
            </Box>
            <Box>
              {/* <Typography sx={authenticationStyles.text} color="">
              بالتسجيل في  فإنك توافق على شروط الاستخدام و سياسة !الخصوصية. شكرًا
              </Typography> */}
            </Box>
          </form>
        )}
      </Box>
    </Stack>
  );
}

export default MyComponent;
