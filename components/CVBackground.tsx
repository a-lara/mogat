'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { UpperStarField, LowerStarField } from './shapes/StarField3D';

function RotatingStars() {
  const ref = useRef<any>(null);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.05; // Gentle rotation
    }
  });

  return (
    <group ref={ref}>
      <UpperStarField />
      <LowerStarField position={[0, -10, 0]} size={0.008} />
      <LowerStarField position={[0, 10, 0]} size={0.008} />
    </group>
  );
}

export default function CVBackground() {
  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: 0,
        pointerEvents: 'none',
        background: 'black' // Fallback and base color
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <RotatingStars />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
}
