import { PhotoCamera } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';

import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';

const ReviewForm = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          fontSize: {
            xs: '20px',
            sm: '20px',
            md: '20px',
            lg: '24px',
            xl: '24px',
          },
        }}
      >
        اضف تقييمك
      </Typography>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="اكتب اسمك"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              placeholder="أحمد علي"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="بريدك الالكتروني"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="رأيك وتقيمك"
            variant="outlined"
            multiline
            rows={4}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <IconButton color="primary" component="label">
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
              <Typography variant="body2" sx={{ ml: 1 }}>
                إرفاق صورة
              </Typography>
            </IconButton>
            {/* <Button
              variant="contained"
              sx={{
                backgroundColor: '#FF6666',
                color: '#fff',
                paddingX: 4,
                paddingY: 1,
                ':hover': {
                  backgroundColor: '#FF6666',
                },
              }}
            >
              اضافة تقييم
            </Button> */}
          </Grid>
          <Grid item xs={12} sm={6} container alignItems="center" spacing={1}>
            <Grid item>
              <Typography variant="body2">حدد تقييمك</Typography>
            </Grid>
            <Grid item>
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  sx={{
                    color: index < 3 ? '#ffeb3b' : '#e0e0e0',
                    fontSize: 24,
                  }}
                />
              ))}
            </Grid>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FF6666',
                color: '#fff',
                paddingX: 4,
                paddingY: 1,
                width: 'auto',
                ':hover': {
                  backgroundColor: '#FF6666',
                },
              }}
            >
              اضافة تقييم
            </Button>
            {/* <IconButton color="primary" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  إرفاق صورة
                </Typography>
              </IconButton> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewForm;
