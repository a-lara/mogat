import Image from 'next/image';
import Particles from '@/components/Particles';
import CVContent from './CVContent';

export const metadata = {
  title: "CV | Juan José Mogat",
  description: "Currículum vitae de Juan José Mogat - Formación académica, publicaciones y conferencias",
};

export default function CV() {
  return <CVContent />;
}
