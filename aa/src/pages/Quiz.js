import React, { useState } from 'react';
import QuizList from './QuizList';

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['phishing', 'Category 2', 'Category 3'];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <h2>Categories</h2>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      {selectedCategory && <QuizList category={selectedCategory} />}
    </div>
  );
};

export default CategoryList;
