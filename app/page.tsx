import HomeScene3D from '@/components/HomeScene3D';

export default function Home() {
  return (
    <div 
      className="relative w-full h-screen bg-black" 
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100vh',
        overflow: 'hidden',
        touchAction: 'pan-y'
      }}
    >
      <HomeScene3D />
    </div>
  );
}
