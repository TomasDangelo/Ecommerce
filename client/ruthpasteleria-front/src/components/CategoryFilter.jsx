import React, { useState } from 'react';
import { Box, Button, Stack } from '@mui/material';

const CategoryFilter = React.memo(({ allCategories, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <Box sx={{ mt: 2, mb: 2, display: 'flex', justifyContent: 'center' }}>
      <Stack direction="row" spacing={1}>
        <Button variant={selectedCategory === '' ? 'contained' : 'outlined'} color="third" onClick={() => handleCategoryClick('')}>
          Todo
        </Button>
        {allCategories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'contained' : 'outlined'}
            onClick={() => handleCategoryClick(category)}
            color="third"
          >
            {category}
          </Button>
        ))}
      </Stack>
    </Box>
  );
});

export default CategoryFilter;