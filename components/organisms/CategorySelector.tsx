'use client';
import { useState } from 'react';
import CategoryButton from '@/components/atoms/CategoryButton';

export default function CategorySelector() {
  const [selectedCategory, setCategory] = useState('1');
  const categories = [
    {
      id: 1,
      name: 'Alle',
    },
    {
      id: 2,
      name: 'Verhuurd',
    },
    {
      id: 3,
      name: 'Te Huur',
    },
    {
      id: 4,
      name: 'Te Koop',
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap">
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            category={category}
            setCategory={setCategory}
            selectedCategory={selectedCategory}
          />
        ))}
      </div>
    </div>
  );
}
