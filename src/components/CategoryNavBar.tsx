import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const categories = [
  'الكل',
  'ملابس رياضية',
  'شورت نسائي',
  'جيز نسائي',
  'تيشيرت',
  'فستان',
  'سويت شيرت',
  'جاكيت / معطف',
];

const CategoryItem = styled(Typography)<CategoryItemProps>(({ selected }) => ({
  fontSize: '14px',
  fontWeight: selected ? 'bold' : 'normal',
  padding: '8px 16px',
  cursor: 'pointer',
  color: selected ? '#FF6666' : '#000',
  borderRadius: '4px',
  '&:hover': {
    color: selected ? '#FF6666' : '#000',
  },
}));

const CategoryNavBar = () => {
  const [selectedCategory, setSelectedCategory] = useState('ملابس رياضية');

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      {categories.map((category) => (
        <Box
          key={category}
          sx={{
            position: 'relative',
            '&::after': {
              content: '""',
              display: selectedCategory === category ? 'block' : 'none',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: '2px',
              backgroundColor: '#FF6666',
            },
          }}
        >
          <CategoryItem
            selected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </CategoryItem>
        </Box>
      ))}
    </Box>
  );
};

export default CategoryNavBar;
