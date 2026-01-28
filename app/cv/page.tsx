import React from 'react';
import CVJuanJoseModern from './CVJuanJoseModern';
import CVBackground from '@/components/CVBackground';

export const metadata = {
  title: "CV | Juan José Mogat",
  description: "Currículum vitae de Juan José Mogat - Formación académica, publicaciones y conferencias",
};

export default function CV() {
  return (
    <div className="min-h-screen bg-black relative">
      <CVBackground />
      <div
        className="relative z-10 w-full flex flex-col items-center"
        style={{
          paddingTop: '8rem',
          paddingBottom: '6rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
      >
        <div className="w-full" style={{ maxWidth: '64rem' }}>
          <CVJuanJoseModern />
        </div>
      </div>
    </div>
  );
}
