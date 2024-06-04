import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DiscountIcon from '@mui/icons-material/Discount';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import PinDropIcon from '@mui/icons-material/PinDrop';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import ProductImage from '../assets/productImg2.png';
export const options = [
  { icon: AddShoppingCartIcon, text: 'طلباتي' },
  { icon: FavoriteBorderIcon, text: 'قائمة الرغبات' },
  { icon: DiscountIcon, text: 'كوبوناتي' },
  { icon: PinDropIcon, text: 'عنوان' },
  { icon: AccountCircleIcon, text: 'معلومات شخصية' },
  { icon: PrivacyTipIcon, text: 'مساعدة و دعم' },
  { icon: LogoutIcon, text: 'تسجيل خروج' },
];

export const orderData = [
  {
    id: '#2074',
    date: '2023، 18 يونيو',
    total: 'MAD 860.00',
    status: 'accepted',
  },
  {
    id: '#2075',
    date: '2023، 18 يونيو',
    total: 'MAD 860.00',
    status: 'accepted',
  },
  {
    id: '#2076',
    date: '2023، 18 يونيو',
    total: 'MAD 860.00',
    status: 'pending',
  },
  {
    id: '#2077',
    date: '2023، 18 يونيو',
    total: 'MAD 860.00',
    status: 'accepted',
  },
  {
    id: '#2078',
    date: '2023، 18 يونيو',
    total: 'MAD 860.00',
    status: 'cancelled',
  },
  {
    id: '#2079',
    date: '2023، 18 يونيو',
    total: 'MAD 860.00',
    status: 'pending',
  },
];
export const wishlistData = [
  {
    id: '#2079',
    image: ProductImage,
    category: 'ملابس نسائية',
    product: 'قميص نسائي منقوش بالرسومات',
    total: 'MAD 860.00',
  },
  {
    id: '#2079',
    image: ProductImage,
    category: 'ملابس نسائية',
    product: 'قميص نسائي منقوش بالرسومات',
    total: 'MAD 860.00',
  },
  {
    id: '#2079',
    image: ProductImage,
    category: 'ملابس نسائية',
    product: 'قميص نسائي منقوش بالرسومات',
    total: 'MAD 860.00',
  },
  {
    id: '#2079',
    image: ProductImage,
    category: 'ملابس نسائية',
    product: 'قميص نسائي منقوش بالرسومات',
    total: 'MAD 860.00',
  },
  {
    id: '#2079',
    image: ProductImage,
    category: 'ملابس نسائية',
    product: 'قميص نسائي منقوش بالرسومات',
    total: 'MAD 860.00',
  },
  {
    id: '#2079',
    image: ProductImage,
    category: 'ملابس نسائية',
    product: 'قميص نسائي منقوش بالرسومات',
    total: 'MAD 860.00',
  },
  {
    id: '#2079',
    image: ProductImage,
    category: 'ملابس نسائية',
    product: 'قميص نسائي منقوش بالرسومات',
    total: 'MAD 860.00',
  },
];

export const discountData = [
  {
    percentage: '10%',
    description:
      'خصم نهائي لجميع العملاء لتوفير 5% Off من طلبك التالي الى 10500.00',
    validity: 'صالح حتى فبراير 2024',
    color: '#020814',
  },
  {
    percentage: '15%',
    description:
      'خصم نهائي لجميع العملاء لتوفير 15% Off من طلبك التالي الى 12000.00',
    validity: 'صالح حتى مارس 2024',
    color: '#FF6666',
  },
  {
    percentage: '20%',
    description:
      'خصم نهائي لجميع العملاء لتوفير 20% Off من طلبك التالي الى 15000.00',
    validity: 'صالح حتى أبريل 2024',
    color: '#FF6666',
  },
];

export const addressData = [
  {
    name: 'احمد علي محمد',
    address: 'ش المدينة المنورة امام - اخر شارع نمرة 9 - عزبة محسن - العوايد',
    city: 'Qism El-Montaza Alexandria Al Montaza',
    country: 'مصر',
    phone: '201063562557+',
  },
  // Add more address objects here as needed
  {
    name: 'محمد عبد الله',
    address: 'شارع الجمهورية - ميدان التحرير',
    city: 'Cairo',
    country: 'مصر',
    phone: '201063562558+',
  },
  {
    name: 'سعيد احمد',
    address: 'شارع القصر العيني - بجوار المستشفى',
    city: 'Cairo',
    country: 'مصر',
    phone: '201063562559+',
  },
  // Add more address objects as needed
];
