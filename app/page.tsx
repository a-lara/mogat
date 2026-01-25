import HomeScene3D from '@/components/HomeScene3D';

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden" style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <HomeScene3D />
    </div>
  );
}
