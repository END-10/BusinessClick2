import React, { useState } from 'react';

const businessCategories = [
  'Restaurantes', 'Cafeterías', 'Moda', 'Tecnología', 'Salud', 
  'Belleza', 'Deportes', 'Educación', 'Entretenimiento', 
  'Servicios Profesionales', 'Artesanías', 'Agricultura', 
  'Construcción', 'Automotriz', 'Hogar', 'Turismo'
];

const PixelGrid = ({ selectedCategory }) => {
  const [selectedPixel, setSelectedPixel] = useState(null);
  const [pixels, setPixels] = useState(Array(400).fill(null));

  const handlePixelClick = (index) => {
    setSelectedPixel(index);
  };

  const filteredPixels = selectedCategory
    ? pixels.filter(pixel => pixel && pixel.category === selectedCategory)
    : pixels;

  return (
    <div className="relative">
      <div className="flex flex-wrap justify-center">
        {pixels.map((pixel, index) => (
          <div 
            key={index} 
            onClick={() => handlePixelClick(index)}
            className={`w-10 h-10 border relative ${
              pixel ? 'bg-blue-200' : 'bg-white hover:bg-gray-100'
            } cursor-pointer flex items-center justify-center ${
              selectedCategory && 
              (!pixel || pixel.category !== selectedCategory) 
                ? 'opacity-30' 
                : ''
            }`}
          >
            {!pixel && (
              <span className="text-gray-400 text-xs text-center">
                Disponible
              </span>
            )}
            {pixel && pixel.images && pixel.images[0] && (
              <img 
                src={URL.createObjectURL(pixel.images[0])} 
                alt="Negocio" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </div>
        ))}
        {selectedPixel !== null && (
          <BusinessModal 
            onClose={() => setSelectedPixel(null)}
            pixelIndex={selectedPixel}
            onSave={(businessData) => {
              const newPixels = [...pixels];
              newPixels[selectedPixel] = businessData;
              setPixels(newPixels);
            }}
          />
        )}
      </div>
    </div>
  );
};

const BusinessModal = ({ onClose, pixelIndex, onSave }) => {
  const [formData, setFormData] = useState({
    country: '',
    city: '',
    businessName: '',
    address: '',
    website: '',
    socialMedia: '',
    category: '',
    images: []
  });
// DONE
