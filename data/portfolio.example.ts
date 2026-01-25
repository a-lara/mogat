// Archivo de ejemplo para datos del portfolio
// Copia este archivo a portfolio.ts y reemplaza con datos reales

import { PortfolioItem } from '@/types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Título de la Obra',
    category: 'pintura',
    description: 'Descripción detallada de la obra artística',
    imageUrl: '/portfolio/imagen-1.jpg',
    year: 2024,
    dimensions: '100 x 100 cm',
    technique: 'Óleo sobre lienzo',
  },
  {
    id: '2',
    title: 'Otra Obra',
    category: 'escultura',
    description: 'Descripción de la escultura',
    imageUrl: '/portfolio/imagen-2.jpg',
    year: 2023,
    dimensions: '50 x 50 x 50 cm',
    technique: 'Bronce',
  },
  // Agrega más obras aquí...
];
