import PortfolioGallery from './PortfolioGallery';
import CVBackground from '@/components/CVBackground';

export const metadata = {
  title: "Portfolio | Juan José Mogat",
  description: "Portfolio de obras artísticas de Juan José Mogat - Pintura, Escultura, Instalación, Fotografía, Literatura",
};

export default function Portfolio() {
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
          <PortfolioGallery />
        </div>
      </div>
    </div>
  );
}
