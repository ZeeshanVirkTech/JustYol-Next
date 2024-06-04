import {
  filterBySizes,
  filterByTitles,
  filterDataCategories,
} from '@/data/filterData';
import ClearIcon from '@mui/icons-material/Clear';
import {
  Box,
  Button,
  Checkbox,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ProductFilterMenu = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const showMobileView = isSmallScreen || isExtraSmallScreen || isMediumScreen;

  return (
    <Box>
      {showMobileView ? (
        // Mobile View
        <>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Button
                variant="outlined"
                sx={{
                  border: '1px solid #000000',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                }}
                fullWidth
              >
                تفريغ
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  border: '1px solid #000000',
                  color: '#000000',
                }}
              >
                السعر
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  border: '1px solid #000000',
                  color: '#000000',
                }}
              >
                المقاس
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  border: '1px solid #000000',
                  color: '#000000',
                }}
              >
                البراند
              </Button>
            </Grid>
          </Grid>
          <Box mt={2}>
            <Grid container spacing={1}>
              <Grid item>
                <Button
                  variant="outlined"
                  endIcon={<ClearIcon />}
                  sx={{
                    border: '1px solid #000000',
                    color: '#000000',
                  }}
                >
                  1000: 2000
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  endIcon={<ClearIcon />}
                  sx={{
                    border: '1px solid #000000',
                    color: '#000000',
                  }}
                >
                  XXL
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  endIcon={<ClearIcon />}
                  sx={{
                    border: '1px solid #000000',
                    color: '#000000',
                  }}
                >
                  أرماني
                </Button>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        // Desktop View
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                border: '2px solid #EEEEEE',
                borderRadius: 4,
                padding: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                البحث عن طريق الفئات
              </Typography>
              <Box sx={{ height: '2px', backgroundColor: '#EEEEEE' }} />
              <Box
                sx={{
                  overflow: 'auto',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                {filterDataCategories.map((category, index) => (
                  <Typography key={index} sx={{ color: '#666666' }}>
                    {category.title}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                border: '2px solid #EEEEEE',
                borderRadius: 4,
                padding: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                البحث عن طريق العناوين
              </Typography>
              <Box sx={{ height: '2px', backgroundColor: '#EEEEEE' }} />
              <Box
                sx={{
                  overflow: 'auto',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                {filterByTitles.map((title, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography sx={{ color: '#666666' }}>
                      {title.title}
                    </Typography>
                    <Checkbox size="small" />
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                border: '2px solid #EEEEEE',
                borderRadius: 4,
                padding: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                البحث عن طريق المقاس
              </Typography>
              <Box sx={{ height: '2px', backgroundColor: '#EEEEEE' }} />
              <Box
                sx={{
                  overflow: 'auto',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                {filterBySizes.map((size, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography sx={{ color: '#666666' }}>
                      {size.title}
                    </Typography>
                    <Checkbox size="small" />
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ProductFilterMenu;
