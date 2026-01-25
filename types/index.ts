// Tipos para el contenido del sitio

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'pintura' | 'escultura' | 'instalacion' | 'fotografia' | 'ilustracion' | 'nuevas-tecnologias';
  description: string;
  imageUrl: string;
  year?: number;
  dimensions?: string;
  technique?: string;
}

export interface BioSection {
  title: string;
  content: string;
}

export interface CVItem {
  type: 'education' | 'exhibition' | 'publication' | 'award';
  title: string;
  institution?: string;
  year?: string;
  description?: string;
}
