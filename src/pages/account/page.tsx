import AddressSection from '@/components/AccountSections/AddressSection';
import CouponsSection from '@/components/AccountSections/CouponsSection';
import OrdersSection from '@/components/AccountSections/OrdersSection';
import PersonalInfoSection from '@/components/AccountSections/PersonalInfoSection';
import SupportSection from '@/components/AccountSections/SupportSection';
import WishlistSection from '@/components/AccountSections/WishlistSection';
import Header from '@/components/Header';
import { options } from '@/data/accountOtions';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
const Page = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const handleOptionClick = (index: any) => {
    setSelectedOption(index);
  };
  return (
    <>
      <Header title="الحساب" path="رئيسي" currentPath="الحساب" />
      <Box
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
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row',
          },
          gap: 4,
        }}
      >
        <Box
          sx={{
            flex: 1,
            border: '1px groove #EFEFEF',
            borderRadius: '5px',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#F6F8FA',
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
                padding: '1rem',
              }}
            >
              الملف الشخصى
            </Typography>
          </Box>
          <Box
            sx={{
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            {options.map((option: any, index: any) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: '#5B5F67',
                  backgroundColor:
                    selectedOption === index ? '#000000' : 'transparent',
                  cursor: 'pointer',
                  padding: '0.8rem',
                  borderRadius: '5px',
                  '&:hover': {
                    // backgroundColor: '#ECECEC',
                  },
                }}
                onClick={() => handleOptionClick(index)}
              >
                {React.createElement(option.icon, {
                  color: selectedOption === index ? 'white' : '#5B5F67',
                })}
                <Typography
                  sx={{
                    fontSize: {
                      xs: '12px',
                      sm: '12px',
                      md: '16px',
                      lg: '16px',
                      xl: '16px',
                    },
                    color: selectedOption === index ? '#ffffff' : '#5B5F67',
                  }}
                >
                  {option.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            flex: 3,
            border: '1px groove #EFEFEF',
            borderRadius: '5px',
          }}
        >
          {selectedOption === 0 && <OrdersSection />}
          {selectedOption === 1 && <WishlistSection />}
          {selectedOption === 2 && <CouponsSection />}
          {selectedOption === 3 && <AddressSection />}
          {selectedOption === 4 && <PersonalInfoSection />}
          {selectedOption === 5 && <SupportSection />}
          {/* {selectedOption === 6 && <LogoutSection />} */}
        </Box>
      </Box>
    </>
  );
};

export default Page;
