import BestProducts from '@/components/BestProducts';
import CarouselProductCard from '@/components/CarouselProductCard';
import Header from '@/components/Header';
import ProductDetails from '@/components/ProductDetails';
import RatingRow from '@/components/RatingRow';
import ReviewCard from '@/components/RevieCard';
import ReviewCarousel from '@/components/ReviewCarousel';
import ReviewForm from '@/components/ReviewForm';
import SaleBanner from '@/components/SaleBanner';
import { productsData } from '@/data/prodctsData';
import { productImages } from '@/data/productImages';
import { ratings } from '@/data/ratingData';
import { reviewData } from '@/data/reviewData';
import { saleData } from '@/data/saleData';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import { Box, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Slider from 'react-slick';
import ProductImage from '../../../../assets/productimage.png';
const Page = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    rtl: true,
  };
  return (
    <>
      <Header
        title="قميص نسائي منقوش بالرسومات"
        path="نساء"
        currentPath="قميص نسائي منقوش بالرسومات"
      />
      <ProductDetails productImages={productImages} />
      <Grid
        sx={{
          maxWidth: '1500px',
          marginInline: 'auto',
          padding: '1rem',
          paddingY: { xs: 2, sm: 2, md: 4, lg: 5, xl: 5 },
          display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block',
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: '24px',
            marginBottom: 5,
          }}
        >
          منتجات مشابهة
        </Typography>
        <Slider {...settings}>
          {productsData.map((product, index) => (
            <Box key={index} sx={{ padding: '0 10px' }}>
              <CarouselProductCard product={product} />
            </Box>
          ))}
        </Slider>
      </Grid>
      <Grid
        container
        direction="column"
        gap={6}
        sx={{
          maxWidth: '1500px',
          marginInline: 'auto',
          padding: '1rem',
          paddingY: { xs: 4, sm: 4, md: 5, lg: 5, xl: 5 },
        }}
      >
        <Divider />
        <Grid container direction="row">
          <Grid xs={12} md={4}>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: {
                  xs: '20px',
                  sm: '20px',
                  md: '20px',
                  lg: '24px',
                  xl: '24px',
                },
              }}
            >
              المواصفات
            </Typography>
          </Grid>
          <Grid xs={12} sm={8} md={8} lg={8} xl={8}>
            <Typography
              sx={{
                color: '#62646C',
                fontSize: {
                  xs: '14px',
                  sm: '14px',
                  md: '14px',
                  lg: '16px',
                  xl: '16px',
                },
              }}
            >
              .يتم إنتاج ملابس السباحة المحجبة المزخرفة الخاصة بنا في قطعتين و 8
              ألوان يمكنك بسهولة استخدام الجزء العلوي من ملابس السباحة المحجبة
              المنقوشة والجوارب الطويلة المصنوعة من قماش الغطس طوال .مع بلوزة
              السباحة المحجبة المنقوشة والجوارب الضيقة ، ستندهش من سرعة تجفيفك
              في وقت قصير بعد خروجك من الماء .سوف تكون العيون عليك بأناقتك على
              الشاطئ{' '}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
      </Grid>
      <Grid
        container
        direction="column"
        gap={6}
        sx={{
          maxWidth: '1500px',
          marginInline: 'auto',
          padding: '1rem',
          paddingY: { xs: 4, sm: 4, md: 8, lg: 5, xl: 5 },
        }}
      >
        <Grid container direction="row">
          <Grid xs={12} md={4}>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: {
                  xs: '20px',
                  sm: '20px',
                  md: '20px',
                  lg: '24px',
                  xl: '24px',
                },
              }}
            >
              معلومات إضافية
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sm={8}
            container
            direction="column"
            gap={2}
            sx={{
              color: '#666666',
            }}
          >
            <Grid
              container
              alignItems="center"
              sx={{
                fontSize: {
                  xs: '14px',
                  sm: '14px',
                  md: '14px',
                  lg: '16px',
                  xl: '16px',
                },
              }}
            >
              <Grid xs={4}>الوزن</Grid>
              <Grid xs={4}>‏1.5 كيلو جرام</Grid>
            </Grid>
            <Divider />
            <Grid container alignItems="center">
              <Grid xs={4}>المقاسات</Grid>
              <Grid xs={4}>XS - S 1 حجم - M - L 2 مقاس - XL - XXL 3 حجم</Grid>
            </Grid>
            <Divider />
            <Grid container alignItems="center">
              <Grid xs={4}>الخامات</Grid>
              <Grid xs={4}>حرير , ستان</Grid>
            </Grid>
            <Divider />
            <Grid container alignItems="center">
              <Grid xs={4}>اللون</Grid>
              <Grid xs={4}>ابيض ’ مشجر</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          direction="row"
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
              md: 'block',
              lg: 'flex',
              xl: 'flex',
            },
          }}
        >
          <Grid xs={12} sm={2} md={3} lg={3} xl={3}>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: {
                  xs: '20px',
                  sm: '20px',
                  md: '20px',
                  lg: '24px',
                  xl: '24px',
                },
              }}
            >
              التقييم (3)
            </Typography>
          </Grid>
          <Grid
            xs={8}
            sm={10}
            md={12}
            lg={8}
            xl={8}
            container
            direction="column"
            gap={2}
          >
            <Grid container gap={4}>
              <Grid xs={4}>
                <Image
                  src={ProductImage}
                  alt="image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Grid>
              <Grid xs={6} container direction="column" gap={1}>
                <Grid container alignItems="center" gap={1}>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '36px',
                    }}
                  >
                    4.5
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {[...Array(5)].map((_, index) => (
                      <Grid item key={index}>
                        <StarIcon
                          sx={{
                            color: index < 3 ? '#FEB53E' : '#EFEFEF',
                            fontSize: 25,
                          }}
                        />
                      </Grid>
                    ))}
                  </Box>
                </Grid>
                {ratings.map((rating: any, index: any) => (
                  <RatingRow
                    key={index}
                    label={rating.label}
                    value={rating.value}
                  />
                ))}
              </Grid>
            </Grid>
            <Grid container direction="column" gap={2}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '16px',
                }}
              >
                صور المشترين{' '}
              </Typography>
              <ReviewCarousel />
              <Grid container direction="column" gap={3}>
                {reviewData.map((review: any, index) => (
                  <>
                    <Divider />
                    <ReviewCard review={review} />
                  </>
                ))}
                <Divider />
              </Grid>
              <ReviewForm />
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid xs={12} sm={2} md={3} lg={3} xl={3}>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: {
                  xs: '20px',
                  sm: '20px',
                  md: '20px',
                  lg: '24px',
                  xl: '24px',
                },
              }}
            >
              معلومات مخصصة{' '}
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sm={10}
            md={10}
            lg={4}
            xl={4}
            container
            direction="column"
            gap={3}
          >
            <Grid container direction="column" gap={2}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: {
                    xs: '12px',
                    sm: '12px',
                    md: '12px',
                    lg: '16px',
                    xl: '16px',
                  },
                }}
              >
                ضع هنا محتوى مخصص حسب المنتج{' '}
              </Typography>
              <Typography
                sx={{
                  color: '#62646C',
                  // fontWeight: 'bold',
                  fontSize: {
                    xs: '10px',
                    sm: '10px',
                    md: '12px',
                    lg: '14px',
                    xl: '14px',
                  },
                }}
              >
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                .الفقرات في الصفحة التي يقرأها{' '}
              </Typography>
            </Grid>
            <Grid container direction="column" gap={2}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: {
                    xs: '12px',
                    sm: '12px',
                    md: '12px',
                    lg: '16px',
                    xl: '16px',
                  },
                }}
              >
                يمكنك إضافة محتوى نصي او فيديو{' '}
              </Typography>
              <Typography
                sx={{
                  color: '#62646C',
                  // fontWeight: 'bold',
                  fontSize: {
                    xs: '10px',
                    sm: '10px',
                    md: '12px',
                    lg: '14px',
                    xl: '14px',
                  },
                }}
              >
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                .الفقرات في الصفحة التي يقرأها{' '}
              </Typography>
            </Grid>
            <Grid container alignItems="center">
              <Typography color="primary">عرض المزيد</Typography>
              <ArrowBackIcon color="primary" />
            </Grid>
          </Grid>
          <Grid xs={12} sm={4} container direction="column" gap={2}>
            <Box>
              <video
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'contain',
                }}
                autoPlay
                loop
                muted
                poster="https://assets.codepen.io/6093409/river.jpg"
              >
                <source
                  src="https://assets.codepen.io/6093409/river.mp4"
                  type="video/mp4"
                />
              </video>
            </Box>
          </Grid>
        </Grid>
        <BestProducts />
        <SaleBanner saleData={saleData.slice(2, 4)} />
      </Grid>
    </>
  );
};

export default Page;
