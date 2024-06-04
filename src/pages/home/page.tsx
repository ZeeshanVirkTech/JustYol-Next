import Brands from '@/components/Brands';
import CategoryCarousel from '@/components/CategoryCarousel';
import CategoryNavBar from '@/components/CategoryNavBar';
import HeroSection from '@/components/HeroSection';
import HeroSection2 from '@/components/HeroSection2';
import ProductCard2 from '@/components/ProductCard2';
import ProductCard from '@/components/ProductCrd';
import SaleBanner from '@/components/SaleBanner';
import { productsData } from '@/data/prodctsData';
import { saleData } from '@/data/saleData';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Banner from '../../assets/bannerProducts.png';
import Girl from '../../assets/girl.png';
import Shoes from '../../assets/shoes.png';
import SummerSale1 from '../../assets/summersale1.png';
import SummerSale2 from '../../assets/summersale2.png';
import WBags2 from '../../assets/wbag2.png';
import WBags from '../../assets/wbags.png';
import WShoes from '../../assets/wshoes.png';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: {
          xs: 4,
          sm: 4,
          md: 7,
          lg: 7,
          xl: 7,
        },
        maxWidth: '1500px',
        marginInline: 'auto',
        padding: '1rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: {
            xs: 4,
            sm: 4,
            md: 7,
            lg: 7,
            xl: 7,
          },
        }}
      >
        <HeroSection />
        <CategoryCarousel />
        <SaleBanner saleData={saleData.slice(0, 2)} />
        <Box display="flex" flexDirection="column" gap={4}>
          <Box
            sx={{
              diplay: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: {
                  xs: '25px',
                  sm: '25px',
                  md: '30px',
                  lg: '36px',
                  xl: '36px',
                },
              }}
            >
              منتجات حديثة
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '12px',
                  sm: '12px',
                  md: '15px',
                  lg: '15px',
                  xl: '15px',
                },
                fontWeight: 'bold',
              }}
            >
              ستايلات لكل الأوقات مع جست يول اظهري جمالك
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))',
                gridAutoRows: '1fr',
                gridAutoFlow: 'dense',
                gridGap: '10px',
                transition: '500ms ease-in-out',
              }}
            >
              {productsData.map((product, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: 'translate3d(0, 0, 0)',
                    transition: '500ms ease-in-out',
                  }}
                >
                  <ProductCard product={product} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box>
          <Image
            src={Banner}
            alt="image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </Box>
        {/* <Box
        sx={{
          display: "flex",
        }}
      >
        <Box>
          <Box
            sx={{
              borderRadius: 2,
              border: "1px solid #e0e0e0",
              padding: 2,
              maxWidth: 250,
              textAlign: "center",
              backgroundColor: "white",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 8,
                left: 8,
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              -50%
            </Box>
            <Box
              sx={{
                position: "relative",
                "& img": {
                  width: "100%",
                  borderRadius: "8px 8px 0 0",
                  borderColor: "#F6F6F6",
                },
              }}
            >
              <Image
                src={productImg1}
                alt="Product"
                width={200}
                height={300}
                objectFit="contain"
                style={{
                  backgroundColor: "#F6F6F6",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  padding: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={FlagIcon}
                  alt="Flag"
                  width={20}
                  height={20}
                  objectFit="contain"
                />
              </Box>
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ marginTop: 2, fontSize: "14px", fontWeight: "bold" }}
            >
              قميص نسائي منقوش بالرسومات
            </Typography>
            <Box
              sx={{
                marginTop: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "16px", color: "#AAACB0" }}
              >
                306 MAD
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textDecoration: "line-through",
                  color: "#AAACB0",
                  fontSize: "12px",
                }}
              >
                 235 MAD
              </Typography>
            </Box>
            <Box sx={{ marginTop: 2, textAlign: "center" }}>
              <Typography variant="body2" sx={{ color: "#888888" }}>
                مبيعات: 16 قطعة
              </Typography>
              <ProgressBar
                variant="determinate"
                value={50}
                sx={{ backgroundColor: "#f0f0f0", marginTop: 1, height: 10 }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#888888", marginTop: 1 }}
              >
                مخزون: 24 قطعة
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: 2,
                padding: 2,
                backgroundColor: "#f8f8f8",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h6" sx={{ color: "#ff5722" }}>
                تخفيضات حصرية
              </Typography>
              <Typography variant="body2" sx={{ color: "#888888" }}>
                اغتنم الفرصة قبل انتهاء العرض
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 1,
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6" sx={{ color: "#ff5722" }}>
                    40
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#888888" }}>
                    ثانية
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6" sx={{ color: "#ff5722" }}>
                    18
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#888888" }}>
                    دقيقة
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6" sx={{ color: "#ff5722" }}>
                    11
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#888888" }}>
                    ساعة
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>2</Box>
      </Box> */}
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(6, 1fr)',
            sm: 'repeat(6, 1fr)',
            md: 'repeat(12, 1fr)',
            lg: 'repeat(12, 1fr)',
            xl: 'repeat(12, 1fr)',
          }}
          gap={2}
        >
          <Box
            gridColumn="span 6"
            sx={{
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderTopRightRadius: '12px',
                borderTopLeftRadius: '12px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  alignItems: 'center',
                  padding: 2,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: {
                      xs: '25px',
                      sm: '25px',
                      md: '30px',
                      lg: '30px',
                      xl: '30px',
                    },
                  }}
                >
                  عطور وتجميل
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap',
                    fontSize: {
                      xs: '10px',
                      sm: '10px',
                      md: '15px',
                      lg: '15px',
                      xl: '15px',
                    },
                  }}
                >
                  ستايلات لكل الأوقات مع جست يول اظهري جمالك
                </Typography>
              </Box>
            </Box>
            <Image
              src={Girl}
              alt="image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>
          <Box
            gridColumn="span 6"
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gap={2}
          >
            <Box
              gridColumn="span 1"
              sx={{
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopRightRadius: '12px',
                  borderTopLeftRadius: '12px',
                  paddingY: 2,
                  paddingX: {
                    xs: 2,
                    sm: 2,
                    md: 4,
                    lg: 6,
                    xl: 6,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: {
                      xs: '10px',
                      sm: '15px',
                      md: '20px',
                      lg: '20px',
                      xl: '20px',
                    },
                  }}
                >
                  حقائب
                </Typography>
              </Box>
              <Image
                src={WBags}
                alt="image"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
            <Box
              gridColumn="span 1"
              sx={{
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopRightRadius: '12px',
                  borderTopLeftRadius: '12px',
                  paddingY: 2,
                  paddingX: {
                    xs: 2,
                    sm: 2,
                    md: 4,
                    lg: 6,
                    xl: 6,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: {
                      xs: '10px',
                      sm: '15px',
                      md: '20px',
                      lg: '20px',
                      xl: '20px',
                    },
                  }}
                >
                  مستلزمات
                </Typography>
              </Box>
              <Image
                src={WBags2}
                alt="image"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
            <Box
              gridColumn="span 1"
              sx={{
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopRightRadius: '12px',
                  borderTopLeftRadius: '12px',
                  paddingY: 2,
                  paddingX: {
                    xs: 2,
                    sm: 2,
                    md: 4,
                    lg: 15,
                    xl: 15,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: {
                      xs: '10px',
                      sm: '15px',
                      md: '20px',
                      lg: '20px',
                      xl: '20px',
                    },
                    whiteSpace: 'nowrap',
                  }}
                >
                  احذية صيفية
                </Typography>
              </Box>
              <Image
                src={Shoes}
                alt="image"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
            <Box
              gridColumn="span 1"
              sx={{
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopRightRadius: '12px',
                  borderTopLeftRadius: '12px',
                  paddingY: 2,
                  paddingX: {
                    xs: 2,
                    sm: 2,
                    md: 4,
                    lg: 6,
                    xl: 6,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: {
                      xs: '10px',
                      sm: '15px',
                      md: '20px',
                      lg: '20px',
                      xl: '20px',
                    },
                    whiteSpace: 'nowrap',
                  }}
                >
                  احذية سهرة
                </Typography>
              </Box>
              <Image
                src={WShoes}
                alt="image"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <HeroSection2 />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 7,
        }}
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
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 4">
              <Typography
                sx={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                }}
              >
                ملابس نسائية
              </Typography>
            </Box>
            <Box
              gridColumn="span 8"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <CategoryNavBar />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'start',
              paddingY: 5,
              gap: 5,
            }}
          >
            <Image
              src={SummerSale2}
              alt="image"
              style={{
                width: '25%',
                height: '25%',
                objectFit: 'contain',
                // alignSelf: "flex-start",
              }}
            />
            <Box
              sx={
                {
                  //   flex: 2,
                }
              }
            >
              <Grid container spacing={3}>
                {productsData.slice(0, 6).map((product, index) => (
                  <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                    <ProductCard2 product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
        <SaleBanner saleData={saleData.slice(2, 4)} />
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
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 4">
              <Typography
                sx={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                }}
              >
                ملابس نسائية
              </Typography>
            </Box>
            <Box
              gridColumn="span 8"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <CategoryNavBar />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              paddingY: 5,
              gap: 5,
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                {productsData.slice(0, 3).map((product, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Image
              src={SummerSale1}
              priority={true}
              alt="image"
              style={{
                width: '20%',
                height: '25%',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>
        <Brands />
      </Box>
    </Box>
  );
};

export default Home;
