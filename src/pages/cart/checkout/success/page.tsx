import Header from '@/components/Header';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import ProductImage from '../../../../assets/productImg2.png';
const Page = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [phone, setPhone] = useState('');
  const [view, setView] = useState('form'); // state to manage view

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const handlePhoneChange = (value: any) => {
    setPhone(value);
  };

  const handleAddAddressClick = () => {
    setView('list');
  };

  return (
    <>
      <Header title="حقيبة التسوق" path="نساء" currentPath="حقيبة التسوق" />
      <Grid
        container
        gap={2}
        sx={{
          maxWidth: '1500px',
          marginInline: 'auto',
          padding: '1rem',
          // paddingY: {
          //   xs: 4,
          //   sm: 4,
          //   md: 8,
          //   lg: 15,
          //   xl: 15,
          // },
        }}
      >
        <Grid
          container
          direction="column"
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          gap={5}
        >
          <Grid>
            <Grid container alignItems="center" justifyContent="center">
              <CheckCircleIcon
                sx={{
                  color: '#62AD50',
                  fontSize: '40px',
                }}
              />
              <Typography
                sx={{
                  color: '#62AD50',
                  fontSize: '40px',
                  fontWeight: 'bold',
                }}
              >
                شكراً جزيلاً
              </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="center">
              <Typography
                sx={{
                  color: '#8A8C98',
                  fontSize: '15px',
                }}
              >
                تم تقديم الطلب بنجاح
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid
            container
            direction="column"
            sx={{
              paddingX: 5,
            }}
          >
            <Grid container alignItems="center" justifyContent="space-between">
              <Typography
                sx={{
                  fontWeight: 'bold',
                }}
              >
                رقم الأمر
              </Typography>
              <Typography
                sx={{
                  fontWeight: 'bold',
                }}
              >
                المجموع{' '}
              </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="space-between">
              <Typography
                sx={{
                  color: '#8A8C98',
                }}
              >
                #2074
              </Typography>
              <Typography
                sx={{
                  color: '#8A8C98',
                }}
              >
                MAD 860.00
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            sx={{
              paddingX: 5,
            }}
          >
            <Grid container alignItems="center" justifyContent="space-between">
              <Typography
                sx={{
                  fontWeight: 'bold',
                }}
              >
                تاريخ تقديم الطلب{' '}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 'bold',
                }}
              >
                طريقة الدفع او السداد{' '}
              </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="space-between">
              <Typography
                sx={{
                  color: '#8A8C98',
                }}
              >
                2023، 18 يونيو{' '}
              </Typography>
              <Typography
                sx={{
                  color: '#8A8C98',
                }}
              >
                عن طريق بطاقة الائتمان{' '}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Typography
            sx={{
              fontWeight: 'bold',
              color: '#252634',
            }}
          >
            لقد قمت بالدفع مباشرة إلى حسابنا المصرفي. الرجاء استخدام معرف الطلب
            الخاص بك كما إشارة دفع. لن يتم شحن طلبك حتى تم التأكد من وصول
            الأموال إلى حسابنا.
          </Typography>
          <Divider />
          <Grid
            container
            direction={{
              xs: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row',
              xl: 'row',
            }}
            gap={{
              xs: 2,
              sm: 2,
              md: 0,
              lg: 0,
              xl: 0,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              variant="contained"
              sx={{
                padding: 2,
                width: {
                  xs: '100%',
                  sm: '100%',
                  md: '40%',
                  lg: '40%',
                  xl: '40%',
                },
                backgroundColor: '#000000',
              }}
            >
              <Typography
                sx={{
                  color: '#ffffff',
                }}
              >
                متابعة عملية التسوق
              </Typography>
              <ArrowBackIcon
                sx={{
                  color: '#ffffff',
                  fontSize: 20,
                }}
              />
            </Button>
            <Button
              variant="contained"
              sx={{
                padding: 2,
                width: {
                  xs: '100%',
                  sm: '100%',
                  md: '40%',
                  lg: '40%',
                  xl: '40%',
                },
                backgroundColor: '#ECBA17',
              }}
            >
              <Typography
                sx={{
                  color: '#ffffff',
                }}
              >
                تتبع الطلب
              </Typography>
              <ArrowBackIcon
                sx={{
                  color: '#ffffff',
                  fontSize: 20,
                }}
              />
            </Button>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            direction={{
              xs: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row',
              xl: 'row',
            }}
            gap={{
              xs: 2,
              sm: 2,
              md: 0,
              lg: 0,
              xl: 0,
            }}
          >
            <Button
              variant="contained"
              sx={{
                padding: 2,
                width: {
                  xs: '100%',
                  sm: '100%',
                  md: '40%',
                  lg: '40%',
                  xl: '40%',
                },
                backgroundColor: '#AAACB0',
              }}
            >
              <Typography
                sx={{
                  color: '#ffffff',
                }}
              >
                تواصل مع المبيعات
              </Typography>
              <ArrowBackIcon
                sx={{
                  color: '#ffffff',
                  fontSize: 20,
                }}
              />
            </Button>
            <Button
              variant="contained"
              sx={{
                padding: 2,
                width: {
                  xs: '100%',
                  sm: '100%',
                  md: '40%',
                  lg: '40%',
                  xl: '40%',
                },
                backgroundColor: '#FF6666',
              }}
            >
              <Typography
                sx={{
                  color: '#ffffff',
                }}
              >
                الغاء الطلب
              </Typography>
              <ArrowBackIcon
                sx={{
                  color: '#ffffff',
                  fontSize: 20,
                }}
              />
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          direction="column"
          gap={4}
        >
          <Grid
            container
            direction="column"
            gap={3}
            sx={{
              width: '100%',
              backgroundColor: '#F6F8FA',
              paddingY: 4,
              paddingX: 2,
              borderRadius: '5px',
              border: '1px groove #EEEEEE',
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: {
                  xs: '16px',
                  sm: '16px',
                  md: '18px',
                  lg: '22px',
                  xl: '22px',
                },
              }}
            >
              ملخص الطلب وتفاصيل الدفع
            </Typography>
            <Grid>
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <Grid
                    key={index}
                    sx={{
                      backgroundColor: '#ffffff',
                      paddingY: 2,
                      paddingX: 2,
                      borderRadius: '5px',
                      border: '1px groove #EEEEEE',
                      marginBottom: 2, // Add margin between items
                    }}
                  >
                    <Grid
                      container
                      direction="row"
                      gap={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <Image
                          src={ProductImage}
                          alt="image"
                          style={{
                            width: '20%',
                            height: '20%',
                            objectFit: 'contain',
                          }}
                        />
                        <Grid>
                          <Typography
                            color="primary"
                            sx={{
                              fontSize: '12px',
                              fontWeight: 'bold',
                              marginBottom: 1,
                            }}
                          >
                            ملابس نسائية
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '14px',
                              fontWeight: 'bold',
                              marginBottom: 1,
                            }}
                          >
                            قميص نسائي منقوش بالرسومات
                          </Typography>
                          <Grid
                            container
                            direction="row"
                            gap={2}
                            sx={{
                              marginBottom: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: '14px',
                                fontWeight: 'bold',
                              }}
                            >
                              MAD 860.00
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                        }}
                      >
                        <Typography>x2</Typography>
                        <Typography>MAD 860.00</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                ))}
            </Grid>

            <Grid container alignItems="center" justifyContent="space-between">
              <Typography
                sx={{
                  fontWeight: 'bold',
                }}
              >
                المبلغ الفارغ
              </Typography>
              <Typography
                sx={{
                  fontWeight: 'bold',
                }}
              >
                MAD 860.00
              </Typography>
            </Grid>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{
                padding: 2,
                backgroundColor: '#3A9E0012',
                border: '1px groove #3A9E0024',
                borderRadius: '5px',
              }}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                }}
              >
                المبلغ الفارغ
              </Typography>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '12px',
                  color: '#3A9E00',
                }}
              >
                - MAD 50
              </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="space-between">
              <Typography
                sx={{
                  fontWeight: 'bold',
                }}
              >
                المبلغ الفارغ
              </Typography>
              <Typography
                sx={{
                  fontWeight: 'bold',
                }}
              >
                MAD 860.00
              </Typography>
            </Grid>
            <Divider />
            <Grid container alignItems="center" justifyContent="space-between">
              <Typography
                sx={{
                  fontWeight: 'bold',
                }}
              >
                المبلغ الفارغ
              </Typography>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '20px',
                }}
              >
                MAD 860.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Page;
