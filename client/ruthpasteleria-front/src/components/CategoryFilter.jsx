import React, { useState } from 'react';
import { Box, Button, Stack } from '@mui/material';

const CategoryFilter = ({ allCategories, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <Box sx={{ mt: 2, mb: 2, display: 'flex', justifyContent: 'center' }}>
      <Stack direction="row" spacing={1}>
        <Button variant={selectedCategory === '' ? 'contained' : 'outlined'} color="seventh" onClick={() => handleCategoryClick('')}>
          Todo
        </Button>
        {allCategories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'contained' : 'outlined'}
            onClick={() => handleCategoryClick(category)}
            color="seventh"
          >
            {category}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoryFilter;