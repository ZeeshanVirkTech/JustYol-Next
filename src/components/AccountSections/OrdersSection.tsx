import { orderData } from '@/data/accountOtions';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Box,
  Button,
  Grid,
  Pagination,
  PaginationItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import MoraccoFlag from '../../assets/morocco.png';
import ProductImage from '../../assets/productImg2.png';
import TurkeyFlag from '../../assets/turkey.png';

const OrdersSection = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const pageCount = Math.ceil(orderData.length / rowsPerPage);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };
  const handleRowClick = (order: any) => {
    setSelectedOrder(order);
  };
  return (
    <Box
      sx={{
        padding: '1rem',
      }}
    >
      {selectedOrder ? (
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
              الطلبات#2074
            </Typography>
            <ArrowBackIcon
              sx={{
                fontSize: '18px',
                cursor: 'pointer',
              }}
              onClick={() => {
                setSelectedOrder(null);
              }}
            />
          </Box>
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: 'none',
            }}
          >
            <Table>
              <TableHead sx={{ backgroundColor: '#F6F8FA', border: 'none' }}>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    رقم الأمر
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    تاريخ تقديم الطلب
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    المجموع
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    حالة الطلب
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ borderBottom: 'none' }}>
                <TableRow
                  sx={{ backgroundColor: 'transparent', borderBottom: 'none' }}
                >
                  <TableCell component="th" scope="row">
                    #2074
                  </TableCell>
                  <TableCell align="left">2023، 18 يونيو</TableCell>
                  <TableCell align="left">MAD 860.00</TableCell>
                  <TableCell
                    align="right"
                    // sx={{
                    //   color:
                    //     data.status === 'accepted'
                    //       ? '#62AD50'
                    //       : data.status === 'pending'
                    //         ? '#17A3EC'
                    //         : data.status === 'cancelled'
                    //           ? '#FF6666'
                    //           : '',
                    // }}
                    sx={{
                      color: '#17A3EC',
                    }}
                  >
                    {/* {data.status === 'accepted'
                      ? 'أرسلت سلمت'
                      : data.status === 'pending'
                        ? 'الشحن'
                        : data.status === 'cancelled'
                          ? 'ألغيت'
                          : ''} */}
                    أرسلت سلمت
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <Box
                  sx={{
                    marginTop: 2,
                    backgroundColor: 'transparent',
                    padding: '30px',
                    display: 'flex',
                    flexDirection: {
                      xs: 'column',
                      sm: 'column',
                      md: 'row',
                      lg: 'row',
                      xl: 'row',
                    },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid #EEEEEE',
                    borderRadius: '5px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Image
                      src={ProductImage}
                      alt="image"
                      style={{
                        width: '15%',
                        height: 'auto',
                        objectFit: 'contain',
                      }}
                    />
                    <Box>
                      <Typography
                        color="primary"
                        sx={{
                          fontSize: { xs: '10px', sm: '12px' },
                          fontWeight: 'bold',
                          marginBottom: 1,
                        }}
                      >
                        ملابس نسائية{' '}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: '12px', sm: '14px' },
                          fontWeight: 'bold',
                          marginBottom: 1,
                        }}
                      >
                        قميص نسائي منقوش بالرسومات
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    align="center"
                    sx={
                      {
                        // fontWeight: 'bold',
                      }
                    }
                  >
                    x2
                  </Typography>
                  <Typography
                    align="center"
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    MAD 380.00
                  </Typography>
                </Box>
              ))}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'start',
                flexDirection: {
                  xs: 'column',
                  sm: 'column',
                  md: 'row-reverse',
                  lg: 'row-reverse',
                  xl: 'row-reverse',
                },
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  width: {
                    xs: '100%',
                    sm: '100%',
                    md: '50%',
                    lg: '50%',
                    xl: '50%',
                  },
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontSize: {
                        xs: '14px',
                        sm: '14px',
                        md: '16px',
                        lg: '18px',
                        xl: '18px',
                      },
                    }}
                  >
                    المبلغ الفارغ
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontSize: {
                        xs: '14px',
                        sm: '14px',
                        md: '16px',
                        lg: '18px',
                        xl: '18px',
                      },
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
                    backgroundColor: '#E9F2E8',
                    border: '1px groove #D0E6C7',
                    padding: 2,
                    borderRadius: '5px',
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontSize: {
                        xs: '14px',
                        sm: '14px',
                        md: '16px',
                        lg: '18px',
                        xl: '18px',
                      },
                    }}
                  >
                    تطبيق رمز الخصم
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      color: '#3A9E00',
                      fontSize: {
                        xs: '14px',
                        sm: '14px',
                        md: '16px',
                        lg: '18px',
                        xl: '18px',
                      },
                    }}
                  >
                    - MAD 50
                  </Typography>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontSize: {
                        xs: '14px',
                        sm: '14px',
                        md: '16px',
                        lg: '18px',
                        xl: '18px',
                      },
                    }}
                  >
                    رسوم الشحن
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontSize: {
                        xs: '14px',
                        sm: '14px',
                        md: '16px',
                        lg: '18px',
                        xl: '18px',
                      },
                    }}
                  >
                    MAD 60.00
                  </Typography>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontSize: {
                        xs: '14px',
                        sm: '14px',
                        md: '16px',
                        lg: '18px',
                        xl: '18px',
                      },
                    }}
                  >
                    المجموع
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontSize: {
                        xs: '18px',
                        sm: '18px',
                        md: '18px',
                        lg: '22px',
                        xl: '22px',
                      },
                    }}
                  >
                    MAD 870.00
                  </Typography>
                </Grid>
                <Button
                  variant="contained"
                  sx={{
                    paddingY: 2,
                    fontWeight: 'bold',
                    color: '#ffffff',
                    boxShadow: 'none',
                    borderRadius: '10px',
                  }}
                >
                  تتبع الطلب{' '}
                </Button>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: {
                      xs: '14px',
                      sm: '14px',
                      md: '16px',
                      lg: '18px',
                      xl: '18px',
                    },
                  }}
                >
                  معلومات الشحن
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    الشحن من
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Image
                      style={{
                        width: 20,
                        height: 'auto',
                      }}
                      src={TurkeyFlag}
                      alt="image"
                    />
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                      }}
                    >
                      تركيا
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    الشحن من
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Image
                      style={{
                        width: 20,
                        height: 'auto',
                      }}
                      src={MoraccoFlag}
                      alt="image"
                    />
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                      }}
                    >
                      المغرب
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <>
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
            الطلبات
          </Typography>
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: 'none',
            }}
          >
            <Table stickyHeader>
              <TableHead sx={{ backgroundColor: '#F6F8FA', border: 'none' }}>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    رقم الأمر
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    تاريخ تقديم الطلب
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    المجموع
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    حالة الطلب
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderData
                  .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                  .map((data) => (
                    <TableRow
                      key={data.id}
                      sx={{ backgroundColor: 'transparent', cursor: 'pointer' }}
                      onClick={() => handleRowClick(data)}
                    >
                      <TableCell component="th" scope="row">
                        {data.id}
                      </TableCell>
                      <TableCell align="left">{data.date}</TableCell>
                      <TableCell align="left">{data.total}</TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          color:
                            data.status === 'accepted'
                              ? '#62AD50'
                              : data.status === 'pending'
                                ? '#17A3EC'
                                : data.status === 'cancelled'
                                  ? '#FF6666'
                                  : '',
                        }}
                      >
                        {data.status === 'accepted'
                          ? 'أرسلت سلمت'
                          : data.status === 'pending'
                            ? 'الشحن'
                            : data.status === 'cancelled'
                              ? 'ألغيت'
                              : ''}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <Box
              sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}
              dir="ltr"
            >
              <Pagination
                dir="ltr"
                count={pageCount}
                page={page}
                hidePrevButton
                hideNextButton
                onChange={handleChangePage}
                renderItem={(item) => (
                  <PaginationItem
                    {...item}
                    sx={{
                      '&.Mui-selected': {
                        backgroundColor: '#000000',
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
          </TableContainer>
        </>
      )}
    </Box>
  );
};

export default OrdersSection;
