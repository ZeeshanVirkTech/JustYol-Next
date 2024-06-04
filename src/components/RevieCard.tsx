import StarIcon from '@mui/icons-material/Star';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

interface ReviewOptions {
  avatar: string;
  name: string;
  rating: number;
  date: string;
  reviewText: string;
}

interface ReviewCardProps {
  review: ReviewOptions;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Grid container alignItems="start">
      <Grid container xs={1}>
        <Avatar>
          <Image src={review.avatar} alt={review.name} width={48} height={48} />
        </Avatar>
      </Grid>
      <Grid container direction="column" xs={10}>
        <Grid item>
          <Box display="flex" alignItems="center">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                sx={{
                  color:
                    index < Math.floor(review.rating) ? '#FEB53E' : '#e0e0e0',
                  fontSize: {
                    xs: '12px',
                    sm: '12px',
                    md: '12px',
                    lg: '16px',
                    xl: '16px',
                  },
                }}
              />
            ))}
          </Box>
        </Grid>
        <Grid container alignItems="center" gap={1}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 'bold',
              ontSize: {
                xs: '10px',
                sm: '10px',
                md: '10px',
                lg: '12px',
                xl: '12px',
              },
            }}
          >
            {review.name}
          </Typography>
          <Typography variant="body2" color="#BBBBBB">
            {review.date}
          </Typography>
        </Grid>
        <Typography variant="body2" color="#666666">
          {review.reviewText}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ReviewCard;
