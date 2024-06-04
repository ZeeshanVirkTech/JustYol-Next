import StarIcon from '@mui/icons-material/Star';
import { Grid, LinearProgress, Typography } from '@mui/material';

interface RatingRowProps {
  label: string;
  value: number;
}

const RatingRow = ({ label, value }: RatingRowProps) => (
  <Grid
    container
    alignItems="center"
    spacing={1}
    sx={{ marginBottom: 1 }}
    gap={2}
  >
    <Grid item xs={1} container alignItems="center">
      <StarIcon sx={{ color: '#FEB53E', fontSize: 18 }} />
      <Typography
        sx={{
          fontWeight: 'bold',
          color: '#666666',
        }}
      >
        {label}
      </Typography>
    </Grid>
    <Grid item xs={7}>
      <LinearProgress
        variant="buffer"
        value={value}
        sx={{ height: 8, borderRadius: 5 }}
        color="secondary"
      />
    </Grid>
    <Grid item xs={2}>
      <Typography
        sx={{
          fontSize: '14px',
          color: '#666666',
        }}
      >{`تقييم ${value}`}</Typography>
    </Grid>
  </Grid>
);

export default RatingRow;
