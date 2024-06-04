/* eslint-disable react/no-unescaped-entities */
import { topBarStyle } from '@/styles/topBarStyle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import logoBlack from '../assets/logoBlack.svg';
const TopBar = () => {
  const [selectedItem, setSelectedItem] = useState('women');
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const handleRoutClick = (path: any) => {
    router.push(path);
  };
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchDrawerOpen = () => {
    setSearchDrawerOpen(true);
  };

  const handleSearchDrawerClose = () => {
    setSearchDrawerOpen(false);
  };
  return (
    <AppBar position="sticky">
      <Box>
        <Box sx={[topBarStyle.primaryBox, topBarStyle.rootBox]}>
          <Box sx={topBarStyle.primaryBox} gap={3}>
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  md: '9px',
                  lg: '12px',
                  xl: '12px',
                },
              }}
            >
              المساعدة و الدعم
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  md: '9px',
                  lg: '12px',
                  xl: '12px',
                },
              }}
            >
              تتبع الطلب
            </Typography>
          </Box>
          <Box sx={topBarStyle.primaryBox} gap={10}>
            <ArrowForwardIosIcon
              sx={{
                fontSize: {
                  md: '11px',
                },
              }}
            />
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  md: '9px',
                  lg: '12px',
                  xl: '12px',
                },
              }}
            >
              الشحن إلى جميع أنحاء العالم - من تركيا لباب بيتك
            </Typography>
            <ArrowBackIosNewIcon
              sx={{
                fontSize: {
                  md: '11px',
                },
              }}
            />
          </Box>
          <Box sx={topBarStyle.primaryBox} gap={3}>
            <Box sx={topBarStyle.primaryBox}>
              <LanguageIcon
                sx={{
                  fontSize: {
                    md: '18px',
                  },
                }}
              />
              <Box sx={topBarStyle.primaryBox} gap={1}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: {
                      md: '9px',
                      lg: '12px',
                      xl: '12px',
                    },
                  }}
                >
                  اللغة
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{
                    fontSize: {
                      md: '9px',
                      lg: '12px',
                      xl: '12px',
                    },
                  }}
                >
                  العربية
                </Typography>
              </Box>
              <KeyboardArrowDownOutlinedIcon />
            </Box>
            <Box sx={topBarStyle.primaryBox}>
              <FmdGoodOutlinedIcon
                sx={{
                  fontSize: {
                    md: '18px',
                  },
                }}
              />
              <Box sx={topBarStyle.primaryBox} gap={1}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: {
                      md: '9px',
                      lg: '12px',
                      xl: '12px',
                    },
                  }}
                >
                  التوصيل إلى
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{
                    fontSize: {
                      md: '9px',
                      lg: '12px',
                      xl: '12px',
                    },
                  }}
                >
                  المغرب
                </Typography>
              </Box>
              <KeyboardArrowDownOutlinedIcon />
            </Box>
          </Box>
        </Box>
        <Box sx={topBarStyle.navMenuBox}>
          <Box sx={topBarStyle.primaryBox}>
            <Box
              sx={{
                ...topBarStyle.primaryBox,
                gap: {
                  md: 5,
                },
              }}
            >
              <Box
                sx={{ ...topBarStyle.primaryBox, gap: 2, cursor: 'pointer' }}
                onClick={() => handleRoutClick('/home')}
              >
                <Box
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'none',
                      md: 'block',
                      lg: 'block',
                      xl: 'block',
                    },
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.69"
                    height="11.677"
                    viewBox="0 0 14.69 11.677"
                  >
                    <g
                      id="Group_22"
                      data-name="Group 22"
                      transform="translate(-1529.655 -84)"
                    >
                      <g
                        id="Component_55_4"
                        data-name="Component 55 – 4"
                        transform="translate(1529.655 84)"
                      >
                        <path
                          id="Vector"
                          d="M.958,0A.94.94,0,0,0,0,.922a.94.94,0,0,0,.958.922ZM7.345,1.844A.94.94,0,0,0,8.3.922.94.94,0,0,0,7.345,0ZM.958,4.917a.923.923,0,1,0,0,1.844ZM13.732,6.76a.923.923,0,1,0,0-1.844ZM7.345,9.833a.923.923,0,1,0,0,1.844Zm6.387,1.844a.923.923,0,1,0,0-1.844ZM.958,1.844H7.345V0H.958Zm0,4.917H13.732V4.917H.958Zm6.387,4.917h6.387V9.833H7.345Z"
                          fill="#020814"
                        />
                      </g>
                    </g>
                  </svg>
                </Box>
                <Box>
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
              </Box>
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'block',
                    lg: 'block',
                    xl: 'block',
                  },
                }}
              >
                <List
                  sx={{
                    ...topBarStyle.primaryBox,
                    gap: {
                      md: 1,
                      lg: 2,
                      xl: 3,
                    },
                  }}
                >
                  <ListItemText
                    sx={[
                      topBarStyle.primaryItemList,
                      selectedItem === 'women' && topBarStyle.selectedItemList,
                    ]}
                    onClick={() => handleItemClick('women')}
                  >
                    <Typography sx={topBarStyle.itemListSize}>
                      للنساء
                    </Typography>
                  </ListItemText>
                  <ListItemText
                    sx={[
                      topBarStyle.primaryItemList,
                      selectedItem === 'men' && topBarStyle.selectedItemList,
                    ]}
                    onClick={() => handleItemClick('men')}
                  >
                    <Typography sx={topBarStyle.itemListSize}>
                      للرجال
                    </Typography>
                  </ListItemText>
                  <ListItemText
                    sx={[
                      topBarStyle.primaryItemList,
                      selectedItem === 'children' &&
                        topBarStyle.selectedItemList,
                    ]}
                    onClick={() => handleItemClick('children')}
                  >
                    <Typography sx={topBarStyle.itemListSize}>
                      للأطفال
                    </Typography>
                  </ListItemText>
                  <ListItemText
                    sx={[
                      topBarStyle.primaryItemList,
                      selectedItem === 'discounts' &&
                        topBarStyle.selectedItemList,
                    ]}
                    onClick={() => handleItemClick('discounts')}
                  >
                    <Typography sx={topBarStyle.itemListSize}>
                      تخفيضات
                    </Typography>
                  </ListItemText>
                </List>
              </Box>
            </Box>
            <Box
              sx={{
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'block',
                  lg: 'block',
                  xl: 'block',
                },
              }}
            >
              <List sx={topBarStyle.primaryBox}>
                <ListItemButton
                  sx={topBarStyle.itemButton}
                  onClick={handleSearchDrawerOpen}
                >
                  <svg
                    id="search_01"
                    data-name="search 01"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 19 19"
                  >
                    <path
                      id="Vector"
                      d="M17.869,18.806a.663.663,0,1,0,.937-.937Zm-.83-2.7a.663.663,0,0,0-.937.937ZM1.326,9.058A7.733,7.733,0,0,1,9.058,1.326V0A9.058,9.058,0,0,0,0,9.058ZM9.058,1.326a7.733,7.733,0,0,1,7.733,7.733h1.326A9.058,9.058,0,0,0,9.058,0Zm7.733,7.733a7.733,7.733,0,0,1-7.733,7.733v1.326a9.058,9.058,0,0,0,9.058-9.058ZM9.058,16.791A7.733,7.733,0,0,1,1.326,9.058H0a9.058,9.058,0,0,0,9.058,9.058Zm9.748,1.078L17.039,16.1l-.937.937,1.767,1.767Z"
                      fill="#020814"
                    />
                  </svg>
                  <Typography sx={topBarStyle.itemListSize}>بحث</Typography>
                </ListItemButton>
                <ListItemButton
                  sx={topBarStyle.itemButton}
                  onClick={() => handleRoutClick('/account')}
                >
                  <svg
                    id="user"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="17"
                    viewBox="0 0 15.5 19.5"
                  >
                    <path
                      id="Vector"
                      d="M11,4.75A3.25,3.25,0,0,1,7.75,8V9.5A4.75,4.75,0,0,0,12.5,4.75ZM7.75,8A3.25,3.25,0,0,1,4.5,4.75H3A4.75,4.75,0,0,0,7.75,9.5ZM4.5,4.75A3.25,3.25,0,0,1,7.75,1.5V0A4.75,4.75,0,0,0,3,4.75ZM7.75,1.5A3.25,3.25,0,0,1,11,4.75h1.5A4.75,4.75,0,0,0,7.75,0ZM14,15.25c0,.529-.449,1.211-1.636,1.8A10.613,10.613,0,0,1,7.75,18v1.5a12.092,12.092,0,0,0,5.285-1.1c1.346-.673,2.465-1.742,2.465-3.146ZM7.75,18a10.613,10.613,0,0,1-4.614-.946C1.949,16.461,1.5,15.779,1.5,15.25H0c0,1.4,1.118,2.472,2.465,3.146A12.091,12.091,0,0,0,7.75,19.5ZM1.5,15.25c0-.529.449-1.21,1.636-1.8A10.613,10.613,0,0,1,7.75,12.5V11a12.091,12.091,0,0,0-5.285,1.1C1.118,12.777,0,13.846,0,15.25ZM7.75,12.5a10.613,10.613,0,0,1,4.614.946C13.551,14.04,14,14.721,14,15.25h1.5c0-1.4-1.118-2.472-2.465-3.146A12.092,12.092,0,0,0,7.75,11Z"
                      fill="#020814"
                    />
                  </svg>
                  <Typography sx={topBarStyle.itemListSize}>الحساب </Typography>
                </ListItemButton>
                <ListItemButton
                  sx={topBarStyle.itemButton}
                  onClick={() => handleRoutClick('/wishlist')}
                >
                  <svg
                    id="love"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.5"
                    height="18.5"
                    viewBox="0 0 21.5 18.5"
                  >
                    <path
                      id="Vector"
                      d="M10.75,3.091l-.537.524a.75.75,0,0,0,1.074,0Zm.685-.7.537.524h0Zm-1.37,0,.537-.524h0ZM2.2,10.149l-.557.5ZM7.93,16.487l-.557.5Zm5.639,0,.557.5h0ZM19.3,10.149l.556.5h0Zm-.144-7.76-.537.524Zm-16.8,0,.537.524Zm13.4.75a.75.75,0,1,0,0,1.5ZM17,5.889a.75.75,0,0,0,1.5,0ZM11.287,3.615l.685-.7L10.9,1.865l-.685.7Zm-1.759-.7.685.7,1.074-1.047-.685-.7ZM1.647,10.652,7.374,16.99l1.113-1.006L2.76,9.646ZM14.126,16.99l5.726-6.338L18.74,9.646l-5.726,6.338ZM18.615,2.913a4.949,4.949,0,0,1,.125,6.734l1.113,1.006a6.449,6.449,0,0,0-.164-8.786Zm1.074-1.047a6.111,6.111,0,0,0-8.791,0l1.074,1.047a4.611,4.611,0,0,1,6.643,0ZM2.885,2.913a4.611,4.611,0,0,1,6.643,0L10.6,1.865a6.111,6.111,0,0,0-8.791,0ZM7.374,16.99a4.529,4.529,0,0,0,6.752,0l-1.113-1.006a3.029,3.029,0,0,1-4.526,0ZM1.811,1.865a6.449,6.449,0,0,0-.164,8.786L2.76,9.646a4.949,4.949,0,0,1,.125-6.734ZM15.75,4.639A1.25,1.25,0,0,1,17,5.889h1.5a2.75,2.75,0,0,0-2.75-2.75Z"
                      transform="translate(0 0)"
                      fill="#020814"
                    />
                  </svg>
                  <Typography sx={topBarStyle.itemListSize}>
                    قائمة الامنيات
                  </Typography>
                  <Typography>(0)</Typography>
                </ListItemButton>
                <ListItemButton
                  sx={topBarStyle.itemButton}
                  onClick={() => handleRoutClick('/cart')}
                >
                  <svg
                    id="shopping_bag"
                    data-name="shopping bag"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.059"
                    height="19.5"
                    viewBox="0 0 20.059 19.5"
                  >
                    <path
                      id="Rectangle_773"
                      data-name="Rectangle 773"
                      d="M.75,1.75h0Zm.75-1A.75.75,0,0,0,0,.75Zm6,0A.75.75,0,0,0,6,.75Zm-.75,1h0Zm-3,3v0Zm-2.25-3v-1H0v1ZM6,.75v1H7.5v-1ZM3.75,4A2.25,2.25,0,0,1,1.5,1.75H0A3.75,3.75,0,0,0,3.75,5.5Zm0,1.5A3.75,3.75,0,0,0,7.5,1.75H6A2.25,2.25,0,0,1,3.75,4Z"
                      transform="translate(6.279 3)"
                      fill="#020814"
                    />
                    <path
                      id="Rectangle_772"
                      data-name="Rectangle 772"
                      d="M17.586,4.092l.74-.123h0Zm1.667,10-.74.123h0Zm-16.781-10-.74-.123h0Zm-1.667,10,.74.123h0ZM6.418,1.5h7.223V0H6.418ZM16.847,4.216l1.667,10,1.48-.247-1.667-10ZM15.307,18H4.751v1.5H15.307ZM1.732,3.969l-1.667,10,1.48.247,1.667-10ZM6.418,0A4.75,4.75,0,0,0,1.732,3.969l1.48.247A3.25,3.25,0,0,1,6.418,1.5Zm7.223,1.5a3.25,3.25,0,0,1,3.206,2.716l1.48-.247A4.75,4.75,0,0,0,13.641,0Zm4.873,12.716A3.25,3.25,0,0,1,15.307,18v1.5a4.75,4.75,0,0,0,4.685-5.531ZM4.751,18a3.25,3.25,0,0,1-3.206-3.784l-1.48-.247A4.75,4.75,0,0,0,4.751,19.5Z"
                      fill="#020814"
                    />
                  </svg>

                  <Typography sx={topBarStyle.itemListSize}>
                    حقيبة التسوق
                  </Typography>
                  <Typography>(0)</Typography>
                </ListItemButton>
              </List>
            </Box>
            <Box
              sx={{
                display: {
                  xs: 'block',
                  sm: 'block',
                  md: 'none',
                  lg: 'none',
                  xl: 'none',
                },
              }}
              onClick={handleDrawerOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.69"
                height="11.677"
                viewBox="0 0 14.69 11.677"
              >
                <g
                  id="Group_22"
                  data-name="Group 22"
                  transform="translate(-1529.655 -84)"
                >
                  <g
                    id="Component_55_4"
                    data-name="Component 55 – 4"
                    transform="translate(1529.655 84)"
                  >
                    <path
                      id="Vector"
                      d="M.958,0A.94.94,0,0,0,0,.922a.94.94,0,0,0,.958.922ZM7.345,1.844A.94.94,0,0,0,8.3.922.94.94,0,0,0,7.345,0ZM.958,4.917a.923.923,0,1,0,0,1.844ZM13.732,6.76a.923.923,0,1,0,0-1.844ZM7.345,9.833a.923.923,0,1,0,0,1.844Zm6.387,1.844a.923.923,0,1,0,0-1.844ZM.958,1.844H7.345V0H.958Zm0,4.917H13.732V4.917H.958Zm6.387,4.917h6.387V9.833H7.345Z"
                      fill="#020814"
                    />
                  </g>
                </g>
              </svg>
            </Box>
          </Box>
        </Box>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          sx={{
            display: {
              xs: 'block',
              sm: 'block',
              md: 'none',
              lg: 'none',
              xl: 'none',
            },
          }}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={handleDrawerClose}
          >
            <List>
              <ListItemButton onClick={() => handleItemClick('women')}>
                <Typography sx={topBarStyle.itemListSize}>للنساء</Typography>
              </ListItemButton>
              <ListItemButton onClick={() => handleItemClick('men')}>
                <Typography sx={topBarStyle.itemListSize}>للرجال</Typography>
              </ListItemButton>
              <ListItemButton onClick={() => handleItemClick('children')}>
                <Typography sx={topBarStyle.itemListSize}>للأطفال</Typography>
              </ListItemButton>
              <ListItemButton onClick={() => handleItemClick('discounts')}>
                <Typography sx={topBarStyle.itemListSize}>تخفيضات</Typography>
              </ListItemButton>
              {/* <ListItemButton>
                <Typography sx={topBarStyle.itemListSize}>بحث</Typography>
              </ListItemButton> */}
              <ListItemButton>
                <Typography
                  sx={topBarStyle.itemListSize}
                  onClick={() => handleRoutClick('/account')}
                >
                  الحساب
                </Typography>
              </ListItemButton>
              <ListItemButton onClick={() => handleRoutClick('/wishlist')}>
                <Typography sx={topBarStyle.itemListSize}>
                  قائمة الامنيات
                </Typography>
                <Typography>(0)</Typography>
              </ListItemButton>
              <ListItemButton onClick={() => handleRoutClick('/cart')}>
                <Typography sx={topBarStyle.itemListSize}>
                  حقيبة التسوق
                </Typography>
                <Typography>(0)</Typography>
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
        <Drawer
          anchor="top"
          open={searchDrawerOpen}
          // onClose={handleSearchDrawerClose}
          sx={{
            '& .MuiDrawer-paper': {
              padding: '16px',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingX: {
                md: 10,
                lg: 20,
                xl: 20,
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
                alignItems: 'center',
                marginBottom: 4,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                جـــســت يــــول
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                |{' '}
              </Typography>
              <Image src={logoBlack} alt="image" />
            </Box>
            <CloseIcon
              sx={{
                position: 'absolute',
                top: 10,
                bottom: 0,
                left: 10,
                // right: 0,
                cursor: 'pointer',
              }}
              onClick={handleSearchDrawerClose}
            />
            <Divider />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                marginBottom: '16px',
                border: '1px solid #f0f0f0',
                borderRadius: '5px',
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="أكتب كلمات البحث هنا"
                dir="rtl"
                InputProps={{
                  sx: {
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  },
                }}
              />
              <IconButton onClick={handleSearchDrawerClose}>
                <SearchIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'end',
                  flex: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: '16px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                  }}
                >
                  الكلمات الأكثر بحثاً
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    justifyContent: 'end',
                  }}
                >
                  {Array(15)
                    .fill('كلمة بحثية')
                    .map((keyword, index) => (
                      <Box
                        key={index}
                        sx={{
                          padding: '8px 16px',
                          border: '1px solid #f0f0f0',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          '&:hover': {
                            border: '1px solid #FF6666',
                            color: '#FF6666',
                          },
                        }}
                      >
                        {keyword}
                      </Box>
                    ))}
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'end',
                  flex: 1,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: '16px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                  }}
                >
                  جديد الأقسام
                </Typography>
                <Box sx={{ display: 'flex', gap: '16px' }}>
                  {[
                    'قسم الاكسسوارات',
                    'قسم الأطفال',
                    'قسم الرجال',
                    'قسم النساء',
                  ].map((category, index) => (
                    <Box key={index} sx={{ textAlign: 'center' }}>
                      <Box
                        sx={{
                          width: '100px',
                          height: '150px',
                          backgroundColor: '#000',
                          marginBottom: '8px',
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: '12px',
                          fontWeight: 'bold',
                        }}
                      >
                        {category}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </AppBar>
  );
};

export default TopBar;
