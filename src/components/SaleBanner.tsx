import Grid from '@mui/material/Grid';
import Image from 'next/image';

const ImageBanner = ({ saleData }: ImageBannerProps) => {
  return (
    <Grid container>
      {saleData.map((sale, index) => (
        <Grid item xs={12} sm={12} md={6} key={index}>
          <Image
            src={sale.saleImg}
            alt={`Sale Banner ${index + 1}`}
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageBanner;
