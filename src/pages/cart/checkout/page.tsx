import Header from '@/components/Header';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import ProductImage from '../../../assets/productImg2.png';

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

  const router = useRouter();
  const handleRoutClick = (path: any) => {
    router.push(path);
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
        {view === 'form' ? (
          <Grid
            container
            direction="column"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            gap={4}
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
              عنوان الشحن
            </Typography>
            <Box component="form" sx={{}}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="الاسم الأول"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="الاسم الأخير"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <MuiTelInput
                    value={phone}
                    onChange={handlePhoneChange}
                    defaultCountry="EG"
                    fullWidth
                    variant="outlined"
                    forceCallingCode
                    error={!matchIsValidTel(phone)}
                    helperText={
                      !matchIsValidTel(phone) ? 'Invalid phone number' : ''
                    }
                    required
                    InputProps={{
                      name: 'phone',
                      required: true,
                      autoFocus: true,
                    }}
                    inputProps={{
                      style: {
                        width: '100%',
                        height: '25px',
                        fontSize: '16px',
                        borderRadius: '4px',
                        borderColor: '#ccc',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="اسم العنوان"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="region">الفصل</InputLabel>
                    <Select
                      label="الفصل"
                      value={selectedValue}
                      onChange={handleSelectChange}
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Option1">Option1</MenuItem>
                      <MenuItem value="Option2">Option2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="city">المدينة</InputLabel>
                    <Select
                      label="المدينة"
                      value={selectedValue}
                      onChange={handleSelectChange}
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Option1">Option1</MenuItem>
                      <MenuItem value="Option2">Option2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="district">المقاطعة</InputLabel>
                    <Select
                      label="المقاطعة"
                      value={selectedValue}
                      onChange={handleSelectChange}
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Option1">Option1</MenuItem>
                      <MenuItem value="Option2">Option2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="الشارع"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="أقرب أو الشقة"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="ملاحظات خاصة"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#000000',
                      color: '#ffffff',
                      fontWeight: 'bold',
                      paddingY: '10px',
                    }}
                    onClick={handleAddAddressClick} // handle button click
                  >
                    إضافة عنوان
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        ) : (
          <Grid
            container
            direction="column"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            gap={2}
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
              قائمة العناوين
            </Typography>
            {[1, 2].map((address, index) => (
              <Box
                key={index}
                sx={{
                  border: '1px solid #ccc',
                  padding: 2,
                  borderRadius: '4px',
                  marginBottom: 2,
                  backgroundColor: index === 0 ? '#F0F0F0' : '#FFFFFF',
                }}
              >
                <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                  احمد علي محمد
                </Typography>
                <Typography>
                  ش المدينة المنورة امام - اخر شارع نمرة 9 - عزبة محسن - العوايد
                  <br />
                  Qism El-Montaza Alexandria Al Montaza
                  <br />
                  مصر
                  <br />
                  رقم الهاتف +201063562557
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handleRoutClick('/cart/checkout/success')}
                  sx={{
                    marginTop: 2,
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    fontWeight: 'bold',
                  }}
                >
                  {index === 0 ? 'العنوان الرئيسي' : 'تعيين كعنوان رئيسي'}
                </Button>
              </Box>
            ))}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#000000',
                color: '#ffffff',
                fontWeight: 'bold',
                width: {
                  xs: '50%',
                  sm: '50%',
                  md: '50%',
                  lg: '25%',
                  xl: '25%',
                },
                paddingY: '10px',
              }}
              onClick={() => setView('form')}
            >
              إضافة عنوان جديد
            </Button>
          </Grid>
        )}
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
            تطبيق رمز الخصم
          </Typography>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{
              gap: {
                xs: 2,
                sm: 2,
                md: 2,
                lg: 2,
                xl: 2,
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: {
                  xs: '100%',
                  sm: '100%',
                  md: '70%',
                  lg: '70%',
                  xl: '70%',
                },
                border: '1px groove #3A9E0012',
                padding: 2,
                backgroundColor: '#3A9E0024',
                borderRadius: '5px',
              }}
            >
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                رمز الخصم المطبق 10 %
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: '#3A9E00',
                }}
              >
                - MAD 50
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                width: 'auto',
                padding: 1.5,
                display: 'flex',
                gap: 2,
                color: '#ffffff',
              }}
            >
              <Typography>قم بإزالة الرمز</Typography>
              <CloseIcon />
            </Button>
          </Grid>
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
                          gap: 8,
                        }}
                      >
                        <CloseIcon color="primary" />
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
          <Grid container alignItems="center">
            <Checkbox />
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              الدفع مباشر أو عن طريق الحساب البنكي
            </Typography>
          </Grid>
          <Box
            sx={{
              fontSize: '14px',
              fontWeight: 'bold',
              backgroundColor: '#F6F8FA',
              padding: 2,
              borderRadius: '5px',
              border: '1px groove #EEEEEE',
            }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#8A8A8B',
              }}
            >
              قم بالدفع مباشرة إلى حسابنا البنكي. يرجى استخدام معرف الطلب الخاص
              بك كمرجع للدفع. لن تهمة طلبك حتى تتم تصفية الأموال في حسابنا.
            </Typography>
          </Box>
          <Grid container alignItems="center">
            <Checkbox />
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              الدفع عن طريق بطاقة الائتمان{' '}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Page;
