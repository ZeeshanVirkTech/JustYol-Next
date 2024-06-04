import { orderData, wishlistData } from '@/data/accountOtions';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Box,
  Button,
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
const WishlistSection = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const pageCount = Math.ceil(orderData.length / rowsPerPage);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  return (
    <Box
      sx={{
        padding: '1rem',
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '18px',
          marginBottom: '1rem',
        }}
      >
        قائمة الرغبات
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: 'none',
        }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: '#F6F8FA', border: 'none' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>المنتج</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                العدد
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                السعر
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                أضف إلى السلة
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wishlistData
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((data) => (
                <TableRow key={data.id} sx={{ backgroundColor: 'transparent' }}>
                  <TableCell component="th" scope="row">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Image
                        src={data.image}
                        alt="image"
                        style={{
                          width: '10%',
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
                          ملابس نسائية
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
                  </TableCell>
                  <TableCell align="center">
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        paddingY: 1,
                        borderRadius: '5px',
                        backgroundColor: '#F9FAFB',
                      }}
                    >
                      <AddIcon
                        sx={{ fontSize: { xs: 16, sm: 20 }, color: '#BBBBBB' }}
                      />
                      <Typography sx={{ fontWeight: 'bold' }}>1</Typography>
                      <RemoveIcon
                        sx={{ fontSize: { xs: 16, sm: 20 }, color: '#BBBBBB' }}
                      />
                    </Box>
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    {data.total}
                  </TableCell>
                  <TableCell align="left">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Button variant="contained" color="primary">
                        <Typography sx={{ color: '#ffffff' }}>
                          {' '}
                          أضف إلى السلة
                        </Typography>
                      </Button>
                      <CloseIcon color="primary" />
                    </Box>
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
    </Box>
  );
};

export default WishlistSection;
