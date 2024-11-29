import { useState } from 'react'

export type Category = 'Full Stack' | 'Frontend' | 'Backend' | 'Utilities'

export function useActiveCategory(initialCategory: Category = 'Full Stack') {
  const [activeCategory, setActiveCategory] = useState<Category>(initialCategory)

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category)
  }

  return { activeCategory, handleCategoryClick }
}

