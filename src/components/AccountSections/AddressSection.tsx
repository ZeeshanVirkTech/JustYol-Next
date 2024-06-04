import { addressData } from '@/data/accountOtions';
import {
  Box,
  Button,
  Card,
  CardContent,
  Pagination,
  PaginationItem,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const AddressSection = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 3; // Show 3 items per page
  const pageCount = Math.ceil(addressData.length / rowsPerPage);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
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
            marginBottom: '1rem',
            fontSize: {
              xs: '14px',
              sm: '14px',
              md: '18px',
              lg: '18px',
              xl: '18px',
            },
          }}
        >
          عنوان{' '}
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: '#ffffff',
            borderColor: '#999',
            backgroundColor: '#000000',
            '&:hover': {
              borderColor: '#999',
              backgroundColor: '#000000',
            },
          }}
        >
          إضافة عنوان جديد{' '}
        </Button>
      </Box>
      {addressData
        .slice((page - 1) * rowsPerPage, page * rowsPerPage)
        .map((data, index) => (
          <Card
            key={index}
            sx={{
              border: index === 0 ? '3px solid #000' : '3px solid #e0e0e0',
              borderRadius: '8px',
              boxShadow: 'none',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    fontSize: {
                      xs: '14px',
                      sm: '14px',
                      md: '18px',
                      lg: '18px',
                      xl: '18px',
                    },
                  }}
                >
                  {data.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: {
                      xs: '14px',
                      sm: '14px',
                      md: '18px',
                      lg: '18px',
                      xl: '18px',
                    },
                  }}
                >
                  {data.address}
                  <br />
                  {data.city}
                  <br />
                  {data.country}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: {
                      xs: '14px',
                      sm: '14px',
                      md: '18px',
                      lg: '18px',
                      xl: '18px',
                    },
                  }}
                >
                  رقم الهاتف {data.phone}
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  color: '#ffffff',
                  borderColor: '#999',
                  backgroundColor: '#000000',
                  fontWeight: 400,
                  fontSize: {
                    xs: '10px',
                    sm: '10px',
                    md: '18px',
                    lg: '18px',
                    xl: '18px',
                  },
                  '&:hover': {
                    borderColor: '#999',
                    backgroundColor: '#000000',
                  },
                }}
              >
                العنوان الرئيسي{' '}
              </Button>
            </CardContent>
          </Card>
        ))}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChangePage}
          hidePrevButton
          hideNextButton
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: '#000',
                  color: '#fff',
                },
                '&.MuiPaginationItem-root': {
                  borderRadius: '8px',
                  margin: '0 5px',
                  backgroundColor: '#f0f0f0',
                  color: '#999',
                },
              }}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default AddressSection;
