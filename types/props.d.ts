interface CategoryItemProps {
  selected: boolean;
}

interface ProductItem {
  image: string | import('next/image').StaticImageData;
  title: string;
  originalPrice: string;
  discountedPrice: string;
  rating: number;
}

interface ProductItemProps {
  product: ProductItem;
}

interface ImageBannerProps {
  saleData: {
    saleImg: import('next/image').StaticImageData;
  }[];
}
