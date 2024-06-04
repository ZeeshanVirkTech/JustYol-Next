import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Avatar,
  Box,
  Button,
  Divider,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { useState } from 'react';

const PersonalInfoSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const handlePhoneChange = (value: any) => {
    setPhone(value);
  };
  const handleChangePasswordClick = () => {
    setIsChangingPassword(!isChangingPassword);
  };

  return (
    <Box
      sx={{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {isChangingPassword ? (
        <>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: {
                  xs: '14px',
                  sm: '14px',
                  md: '18px',
                  lg: '18px',
                  xl: '18px',
                },
                marginBottom: '1rem',
              }}
            >
              تغيير كلمة المرور{' '}
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              margin: '0 auto',
              width: '100%',
            }}
          >
            <TextField
              label="كلمة المرور الحالية"
              variant="outlined"
              fullWidth
              type="password"
            />
            <TextField
              label="كلمة المرور الجديدة"
              variant="outlined"
              fullWidth
              type="password"
            />
            <TextField
              label="تأكيد كلمة المرور الجديدة"
              variant="outlined"
              fullWidth
              type="password"
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#000',
                maxWidth: {
                  xs: '70%',
                  sm: '70%',
                  md: '50%',
                  lg: '20%',
                  xl: '20%',
                },
                paddingY: 1,
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#333',
                },
              }}
              onClick={handleEditClick}
            >
              تغيير كلمة المرور
            </Button>
          </Box>
        </>
      ) : (
        <>
          {isEditing ? (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: {
                      xs: '14px',
                      sm: '14px',
                      md: '18px',
                      lg: '18px',
                      xl: '18px',
                    },
                    // marginBottom: '1rem',
                  }}
                >
                  معلومات شخصية{' '}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    cursor: 'pointer',
                  }}
                  onClick={handleEditClick}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '10px',
                        sm: '10px',
                        md: '16px',
                        lg: '16px',
                        xl: '16px',
                      },
                    }}
                  >
                    تعديل الملف الشخصي{' '}
                  </Typography>
                  <ArrowBackIcon
                    sx={{
                      fontSize: '18px',
                    }}
                  />
                </Box>
              </Box>
              <Divider />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '2rem',
                  gap: '1rem',
                }}
              >
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    backgroundColor: '#e0e0e0',
                    marginBottom: '1rem',
                    alignSelf: 'center',
                  }}
                >
                  <AccountCircleIcon sx={{ width: '100%', height: '100%' }} />
                </Avatar>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <TextField
                  label="الاسم الأول"
                  variant="outlined"
                  fullWidth
                  defaultValue="احمد"
                />
                <TextField
                  label="الاسم الاخير"
                  variant="outlined"
                  fullWidth
                  defaultValue="علي"
                />
              </Box>

              <Box sx={{ display: 'flex', gap: '1rem' }}>
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
              </Box>

              <TextField
                label="البريد الالكتروني"
                variant="outlined"
                fullWidth
                defaultValue="sitename@justyol.com"
              />

              <Select
                label="الدولة"
                variant="outlined"
                fullWidth
                defaultValue="مصر"
              >
                <MenuItem value="مصر">مصر</MenuItem>
                <MenuItem value="السعودية">السعودية</MenuItem>
                <MenuItem value="الإمارات">الإمارات</MenuItem>
              </Select>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#000',
                  maxWidth: {
                    xs: '70%',
                    sm: '70%',
                    md: '50%',
                    lg: '20%',
                    xl: '20%',
                  },
                  paddingY: 1,
                  color: '#fff',
                  marginTop: '1rem',
                  '&:hover': {
                    backgroundColor: '#333',
                  },
                }}
              >
                حفظ البيانات
              </Button>
            </Box>
          ) : (
            <>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: {
                      xs: '14px',
                      sm: '14px',
                      md: '18px',
                      lg: '18px',
                      xl: '18px',
                    },
                    // marginBottom: '1rem',
                  }}
                >
                  معلومات شخصية{' '}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    cursor: 'pointer',
                  }}
                  onClick={handleEditClick}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '10px',
                        sm: '10px',
                        md: '16px',
                        lg: '16px',
                        xl: '16px',
                      },
                    }}
                  >
                    تعديل الملف الشخصي{' '}
                  </Typography>
                  <ArrowBackIcon
                    sx={{
                      fontSize: '18px',
                    }}
                  />
                </Box>
              </Box>
              <Divider />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '2rem',
                  gap: '1rem',
                }}
              >
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    backgroundColor: '#e0e0e0',
                  }}
                >
                  <AccountCircleIcon sx={{ width: '100%', height: '100%' }} />
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  احمد علي
                </Typography>
              </Box>
              <Box>
                <Box>
                  <Typography variant="body1">
                    <b> البريد الالكتروني : </b>Sitename@justyol.com
                  </Typography>
                  <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>
                    <b>رقم الهاتف :</b> 02154254154125
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '1rem',
                    marginTop: '2rem',
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#ff6666',
                      paddingX: {
                        xs: 1,
                        sm: 2,
                        md: 6,
                        lg: 8,
                        xl: 8,
                      },
                      fontSize: {
                        xs: '14px',
                        sm: '14px',
                        md: '18px',
                        lg: '18px',
                        xl: '18px',
                      },
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#ff4c4c',
                      },
                    }}
                  >
                    حذف الحساب
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#000',
                      paddingX: {
                        xs: 3,
                        sm: 3,
                        md: 8,
                        lg: 8,
                        xl: 8,
                      },
                      fontSize: {
                        xs: '14px',
                        sm: '14px',
                        md: '18px',
                        lg: '18px',
                        xl: '18px',
                      },
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#333',
                      },
                    }}
                    onClick={handleChangePasswordClick}
                  >
                    تغيير كلمة المرور
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default PersonalInfoSection;
