import React, { useState } from 'react';

const colombianCities = [
  "Apartadó", "Barrancabermeja", "Barranquilla", "Bello", "Bogotá", 
  "Bucaramanga", "Buenaventura", "Cali", "Cartagena", "Cúcuta", 
  "Dosquebradas", "Envigado", "Florencia", "Floridablanca", "Girón", 
  "Ibagué", "Itagüí", "Maicao", "Manizales", "Medellín", "Montería", 
  "Neiva", "Palmira", "Pasto", "Pereira", "Popayán", "Riohacha", 
  "Santa Marta", "Sincelejo", "Soledad", "Tunja", "Tuluá", "Turbo", 
  "Valledupar", "Villavicencio", "Yopal"
];

const countries = [
  "Colombia", "Argentina", "Chile", "Perú", "México", 
  "Brasil", "Estados Unidos", "España", "Francia", "Canadá"
];

const businessCategories = [
  'Restaurantes', 'Cafeterías', 'Moda', 'Tecnología', 'Salud', 
  'Belleza', 'Deportes', 'Educación', 'Entretenimiento', 
  'Servicios Profesionales', 'Artesanías', 'Agricultura', 
  'Construcción', 'Automotriz', 'Hogar', 'Turismo'
];

const Header = ({ onRegister, onLogin, onFilter, onCategoryFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryFilter(category);
  };

  return (
    <header className="w-full bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-bold">PixelMap</div>
        <nav className="flex space-x-4 items-center">
          <select 
            onChange={(e) => onFilter('country', e.target.value)}
            className="bg-gray-700 text-white p-2 rounded"
          >
            <option value="">Seleccionar País</option>
            {countries.map((country, index) => (
              <option key={index} value={country.toLowerCase()}>
                {country}
              </option>
            ))}
          </select>
          <select 
            onChange={(e) => onFilter('city', e.target.value)}
            className="bg-gray-700 text-white p-2 rounded"
          >
            <option value="">Seleccionar Ciudad</option>
            {colombianCities.map((city, index) => (
              <option key={index} value={city.toLowerCase().replace(/\s+/g, '-')}>
                {city}
              </option>
            ))}
          </select>
          <button 
            onClick={onRegister}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Registrarse
          </button>
          <button 
            onClick={onLogin}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
          >
            Iniciar Sesión
          </button>
        </nav>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {businessCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(category)}
            className={`px-3 py-1 rounded ${
              selectedCategory === category 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
