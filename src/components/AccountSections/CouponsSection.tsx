import { discountData } from '@/data/accountOtions';
import DiscountIcon from '@mui/icons-material/Discount';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Pagination,
  PaginationItem,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const CouponsSection = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 3; // Show 3 items per page
  const pageCount = Math.ceil(discountData.length / rowsPerPage);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  return (
    <Box
      sx={{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <Box>
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
          كوبوناتي{' '}
        </Typography>
        <Divider
          sx={{
            color: '#F6F8FA',
          }}
        />
      </Box>
      {discountData
        .slice((page - 1) * rowsPerPage, page * rowsPerPage)
        .map((data, index) => (
          <Box
            key={index}
            sx={{
              border: index === 0 ? '3px solid #000' : '3px solid #e0e0e0',
              borderRadius: '8px',
              display: 'flex',
              padding: '1rem',
              justifyContent: 'space-between',
              // marginBottom: '1rem',
            }}
          >
            <Card
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  sm: 'column',
                  md: 'row',
                  lg: 'row',
                  xl: 'row',
                },
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: 'none',
                flex: 1,
              }}
            >
              <Box
                sx={{
                  backgroundColor: data.color,
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: '#ffffff',
                    fontSize: {
                      xs: '14px',
                      sm: '14px',
                      md: '18px',
                      lg: '18px',
                      xl: '18px',
                    },
                  }}
                >
                  {data.percentage}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#ffffff',
                    fontSize: {
                      xs: '14px',
                      sm: '14px',
                      md: '18px',
                      lg: '18px',
                      xl: '18px',
                    },
                  }}
                >
                  تخفيض
                </Typography>
              </Box>
              <CardContent sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
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
                  {data.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#999', marginTop: '0.5rem' }}
                >
                  {data.validity}
                </Typography>
              </CardContent>
            </Card>
            <DiscountIcon
              sx={{
                color: index === 0 ? '#000' : '#e0e0e0',
              }}
            />
          </Box>
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

export default CouponsSection;
