import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';

import { productsData } from '@/data/prodctsData';
import ProductCard from './ProductCrd';

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{
        ...style,
        display: 'block',
        color: '#203967',
        right: '-10px',
        top: '50%',
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosIcon
      className={className}
      style={{
        ...style,
        display: 'block',
        color: '#203967',
        left: '-10px',
        top: '50%',
      }}
      onClick={onClick}
    />
  );
};

const HomeProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {productsData.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </Slider>
  );
};

export default HomeProductCarousel;
