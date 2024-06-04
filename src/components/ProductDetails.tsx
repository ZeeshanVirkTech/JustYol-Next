import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import StarIcon from '@mui/icons-material/Star';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';
import ProductImageStyles from '../assets/productImg1.png';
import Verified from '../assets/verified.svg';

interface ProductDetailsProps {
  productImages: StaticImageData[];
}

const ProductDetails = ({ productImages }: ProductDetailsProps) => {
  const [mainImage, setMainImage] = useState(productImages[0]);
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <Grid
      container
      // spacing={4}
      gap={4}
      sx={{
        maxWidth: '1500px',
        marginInline: 'auto',
        padding: '1rem',
        paddingY: { xs: 4, sm: 4, md: 8, lg: 10, xl: 10 },
      }}
    >
      <Grid container direction="column" xs={12} sm={6} md={4} lg={4} xl={4}>
        <Grid
          sx={{
            width: '100%',
          }}
        >
          <Image
            src={mainImage}
            alt="image"
            style={{
              //   border: '1px solid #000000',
              width: '100%',
              height: '100%',
              objectFit: 'fill',
              borderRadius: '10px',
            }}
          />
        </Grid>
        <Grid
          sx={{
            width: '100%',
            marginTop: '20px',
          }}
        >
          <Slider {...settings}>
            {productImages.map((image: any, index: any) => (
              <div key={index} onClick={() => setMainImage(image)}>
                <Image
                  src={image}
                  alt={`product image ${index + 1}`}
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'contain',
                    cursor: 'pointer',
                    borderRadius: '10px',
                  }}
                />
              </div>
            ))}
          </Slider>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        sm={5}
        md={4}
        lg={4}
        xl={4}
        direction="column"
        gap={2}
      >
        <Typography
          sx={{
            color: '#FF6666',
            fontSize: {
              xs: '12px',
              sm: '12px',
              md: '16px',
              lg: '16px',
              xl: '16px',
            },
          }}
        >
          القسم: نساء, ملابس
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: 10,
              sm: 10,
              md: 15,
              lg: 20,
              xl: 20,
            },
            fontWeight: 'bold',
          }}
        >
          قميص نسائي منقوش بالرسومات وبألوان تجريبي قابل للتعديل
        </Typography>
        <Grid container direction="row" alignItems="center" gap={2}>
          <Grid item>
            <Grid container direction="row">
              {[...Array(5)].map((_, index) => (
                <Grid item key={index}>
                  {index < 3 ? (
                    <StarIcon
                      sx={{
                        color: '#ffeb3b',
                        fontSize: {
                          xs: 10,
                          sm: 10,
                          md: 15,
                          lg: 18,
                          xl: 18,
                        },
                      }}
                    />
                  ) : (
                    <StarIcon
                      sx={{
                        color: '#EFEFEF',
                        fontSize: {
                          xs: 10,
                          sm: 10,
                          md: 15,
                          lg: 18,
                          xl: 18,
                        },
                      }}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Typography
            sx={{
              fontSize: {
                xs: '10px',
                sm: '10px',
                md: '10px',
                lg: '12px',
                xl: '12px',
              },
              fontWeight: 'bold',
            }}
          >
            ‏3 تقيمات وأراء{' '}
          </Typography>
        </Grid>
        <Grid container alignItems="center" gap={4}>
          <Typography
            sx={{
              fontSize: '22px',
              fontWeight: 'bold',
            }}
          >
            MAD 870.00
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <CheckCircleIcon
              sx={{
                color: '#31C426',
              }}
            />
            <Typography
              sx={{
                color: '#31C426',
                fontWeight: 'bold',
              }}
            >
              متوفر حالياً
            </Typography>
          </Box>
        </Grid>
        <Typography
          sx={{
            color: '#B5B7C4',
            fontSize: {
              xs: '12px',
              sm: '12px',
              md: '16px',
              lg: '16px',
              xl: '16px',
            },
          }}
        >
          *غير شامل الضريبة و رسوم الشحن و الجمارك
        </Typography>
        <Grid container direction="column" gap={1}>
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: {
                xs: '12px',
                sm: '12px',
                md: '16px',
                lg: '16px',
                xl: '16px',
              },
            }}
          >
            المقاس :
          </Typography>
          <Grid container direction="row" gap={1}>
            <Box
              sx={{
                border: '2px solid #FF6666',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                borderRadius: '5px',
                cursor: 'pointer',
                width: 40,
                height: 40,
              }}
            >
              <Typography
                sx={{
                  color: '#999999',
                  fontSize: {
                    xs: '10px',
                    sm: '10px',
                    md: '12px',
                    lg: '16px',
                    xl: '16px',
                  },
                }}
              >
                XXL
              </Typography>
            </Box>
            <Box
              sx={{
                border: '2px solid #EEEEEE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                borderRadius: '5px',
                cursor: 'pointer',
                width: 40,
                height: 40,
              }}
            >
              <Typography
                sx={{
                  color: '#999999',
                  fontSize: {
                    xs: '10px',
                    sm: '10px',
                    md: '12px',
                    lg: '16px',
                    xl: '16px',
                  },
                }}
              >
                XL
              </Typography>
            </Box>
            <Box
              sx={{
                border: '2px solid #EEEEEE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                borderRadius: '5px',
                cursor: 'pointer',
                width: 40,
                height: 40,
              }}
            >
              <Typography
                sx={{
                  color: '#999999',
                  fontSize: {
                    xs: '10px',
                    sm: '10px',
                    md: '12px',
                    lg: '16px',
                    xl: '16px',
                  },
                }}
              >
                S
              </Typography>
            </Box>
            <Box
              sx={{
                border: '2px solid #EEEEEE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                borderRadius: '5px',
                cursor: 'pointer',
                width: 40,
                height: 40,
              }}
            >
              <Typography
                sx={{
                  color: '#999999',
                  fontSize: {
                    xs: '10px',
                    sm: '10px',
                    md: '12px',
                    lg: '16px',
                    xl: '16px',
                  },
                }}
              >
                L
              </Typography>
            </Box>
            <Box
              sx={{
                border: '2px solid #EEEEEE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                borderRadius: '5px',
                cursor: 'pointer',
                width: 40,
                height: 40,
              }}
            >
              <Typography
                sx={{
                  color: '#999999',
                  fontSize: {
                    xs: '10px',
                    sm: '10px',
                    md: '12px',
                    lg: '16px',
                    xl: '16px',
                  },
                }}
              >
                M
              </Typography>
            </Box>
            <Box
              sx={{
                border: '2px solid #EEEEEE',
                display: 'flex',
                alignItems: 'center',
                // justifyContent: 'center',
                padding: '4px',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '30%',
              }}
            >
              <Typography
                sx={{
                  color: '#999999',
                  fontSize: {
                    xs: '10px',
                    sm: '10px',
                    md: '12px',
                    lg: '16px',
                    xl: '16px',
                  },
                }}
              >
                جدول المقاسات
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid>
          <Typography
            sx={{
              fontWeight: 'bold',
              marginBottom: 1,
              fontSize: {
                xs: '12px',
                sm: '12px',
                md: '16px',
                lg: '16px',
                xl: '16px',
              },
            }}
          >
            اللون :
          </Typography>
          <Grid container direction="row" gap={2}>
            <Box
              sx={{
                width: '15%',
                height: '40%',
                border: '2px solid #EEEEEE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              <Image
                src={ProductImageStyles}
                alt="image"
                style={{
                  width: '40%',
                  objectFit: 'contain',
                  height: '40%',
                }}
              />
            </Box>
            <Box
              sx={{
                width: '15%',
                height: '40%',
                border: '2px solid #FF6666',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              <Image
                src={ProductImageStyles}
                alt="image"
                style={{
                  width: '40%',
                  objectFit: 'contain',
                  height: '40%',
                }}
              />
            </Box>
            <Box
              sx={{
                width: '15%',
                height: '40%',
                border: '2px solid #EEEEEE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              <Image
                src={ProductImageStyles}
                alt="image"
                style={{
                  width: '40%',
                  objectFit: 'contain',
                  height: '40%',
                }}
              />
            </Box>
            <Box
              sx={{
                width: '15%',
                height: '40%',
                border: '2px solid #EEEEEE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              <Image
                src={ProductImageStyles}
                alt="image"
                style={{
                  width: '40%',
                  objectFit: 'contain',
                  height: '40%',
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" gap={2}>
          <Grid
            container
            direction="row"
            gap={1}
            sx={{
              backgroundColor: '#F6F8FA',
              border: '1px solid #EEEEEE',
              width: 'auto',
              paddingX: 2,
              paddingY: 1,
            }}
          >
            <AddIcon />
            <Typography>1</Typography>
            <RemoveIcon />
          </Grid>
          <Typography
            color="#252634"
            sx={{
              fontSize: {
                xs: '12px',
                sm: '12px',
                md: '16px',
                lg: '16px',
                xl: '16px',
              },
            }}
          >
            الكمية
          </Typography>
        </Grid>
        <Button
          sx={{
            backgroundColor: '#FF6666',
            paddingX: 2,
            paddingY: '10px',
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            '&:hover': {
              backgroundColor: '#FF6666',
            },
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: {
                xs: '10px',
                sm: '10px',
                md: '12px',
                lg: '16px',
                xl: '16px',
              },
            }}
          >
            اضافة إلى السلة
          </Typography>
          <ArrowBackIcon
            sx={{
              color: '#fff',
              fontSize: '18px',
            }}
          />
        </Button>
        {/* One Section Remians */}
        {/* <Grid>
          <Typography>

          </Typography>
        </Grid> */}
      </Grid>
      <Grid
        xs={12}
        sm={6}
        md={3}
        lg={3}
        xl={3}
        container
        direction="column"
        gap={3}
      >
        <Grid
          container
          direction="column"
          gap={3}
          sx={{
            border: '1px solid #EEEEEE',
            borderRadius: '5px',
            padding: '22px',
          }}
        >
          <Grid container direction="row" alignItems="center" gap={1}>
            <Image src={Verified} alt="verified" />
            <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
              جست يول{' '}
            </Typography>
            <Box
              sx={{
                backgroundColor: '#08B449',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '5px',
                paddingX: '8px',
                paddingY: '1px',
              }}
            >
              <Typography
                sx={{
                  color: '#ffffff',
                  fontSize: '12px',
                }}
              >
                9.8
              </Typography>
            </Box>
          </Grid>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: '#ffffff',
              borderColor: '#FF6666',
              paddingX: 2,
              paddingY: '10px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              '&:hover': {
                backgroundColor: '#ffffff',
              },
            }}
          >
            <CheckCircleIcon
              sx={{
                color: '#FF6666',
                fontSize: '15px',
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  xs: '10px',
                  sm: '10px',
                  md: '12px',
                  lg: '16px',
                  xl: '16px',
                },
              }}
            >
              متابعة
            </Typography>
          </Button>
          <Divider />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                عرض منتجاتي
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  color: '#BBBBBB',
                }}
              >
                ‏1.8 الف متابع
              </Typography>
            </Grid>
            <ArrowBackIcon
              sx={{
                color: '#FF6666',
                fontSize: '18px',
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          gap={3}
          sx={{
            border: '1px solid #EEEEEE',
            borderRadius: '5px',
            padding: '22px',
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            معلومات الشحن
          </Typography>
          <Grid container direction="column" gap={1}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                الشحن من
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                تركيا
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                التوصيل إلى
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                المغرب
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={1}
            sx={{
              backgroundColor: '#ECBA1726',
              paddingY: 2,
              border: '1px solid #ECBA176B',
              borderRadius: '4px',
            }}
          >
            <Typography
              sx={{
                fontSize: '11px',
              }}
            >
              سيتم الاستلام في ١٢
            </Typography>
            <Typography
              sx={{
                fontSize: '11px',
                color: '#D9AB14',
              }}
            >
              يونيو - ٢٠
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              تكلفة الشحن{' '}
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              MAD 60.00
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            gap={1}
            sx={{
              backgroundColor: '#3A9E0012',
              paddingY: 2,
              border: '1px solid #3A9E0024',
              borderRadius: '4px',
              paddingX: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: '11px',
                fontWeight: 'bold',
              }}
            >
              لو اشتريت بـ MAD 500 تحصل على خصم 15%
            </Typography>
            <Typography
              sx={{
                fontSize: '11px',
                color: '#3A9E00',
                fontWeight: 'bold',
              }}
            >
              مجاناًأو شحن{' '}
            </Typography>
          </Grid>
          <Divider />
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              الإجمالي{' '}
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              MAD 870.00
            </Typography>
          </Grid>
          <Button
            sx={{
              backgroundColor: '#FF6666',
              paddingX: 2,
              paddingY: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              '&:hover': {
                backgroundColor: '#FF6666',
              },
            }}
          >
            <Typography
              sx={{
                color: '#fff',
                fontSize: {
                  xs: '10px',
                  sm: '10px',
                  md: '12px',
                  lg: '16px',
                  xl: '16px',
                },
              }}
            >
              تأكيد عملية الشراء{' '}
            </Typography>
          </Button>
          <Button
            sx={{
              backgroundColor: '#000000',
              paddingX: 2,
              paddingY: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              '&:hover': {
                backgroundColor: '#000000',
              },
            }}
          >
            <Typography
              sx={{
                color: '#fff',
                fontSize: {
                  xs: '10px',
                  sm: '10px',
                  md: '12px',
                  lg: '16px',
                  xl: '16px',
                },
              }}
            >
              تواصل معنا{' '}
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
