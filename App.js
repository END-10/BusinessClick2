import React, { useState } from 'react';
import Header from './components/Header';
import PixelGrid from './components/PixelGrid';

function App() {
  const [filter, setFilter] = useState({ country: '', city: '' });
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFilter = (type, value) => {
    setFilter(prev => ({ ...prev, [type]: value }));
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleRegister = () => {
    console.log('Registro');
  };

  const handleLogin = () => {
    console.log('Iniciar Sesión');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        onFilter={handleFilter}
        onRegister={handleRegister}
        onLogin={handleLogin}
        onCategoryFilter={handleCategoryFilter}
      />
      <PixelGrid selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;

// DONE
