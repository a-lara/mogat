'use client';

import { Image as ImageImpl } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import * as THREE from 'three';

// allows for hover effects on an image
const HomeImage = React.memo(function HomeImage({ 
  c = new THREE.Color(), 
  scale,
  ...props 
}: { 
  c?: THREE.Color;
  url: string;
  position?: [number, number, number];
  scale?: number | [number, number] | [number, number, number];
  [key: string]: any;
}) {
  // Convert 3D scale to 2D for ImageImpl (drei's Image component only accepts 2D scale)
  const imageScale = React.useMemo(() => {
    if (typeof scale === 'number') return scale;
    if (Array.isArray(scale) && scale.length === 3) {
      // Use first two values for 2D scale
      return [scale[0], scale[1]] as [number, number];
    }
    return scale;
  }, [scale]);
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, hover] = useState(false);
  const [prevHovered, setPrevHovered] = useState(false);
  
  // Memoize target color to avoid recreation
  const targetColor = React.useMemo(() => new THREE.Color(), []);
  
  useFrame(() => {
    if (!ref.current?.material) {
      return;
    }
    
    // Only update if hover state changed or we're still transitioning
    const material = ref.current.material as THREE.MeshStandardMaterial;
    const currentColor = material.color;
    const target = targetColor.set(hovered ? 'white' : '#ccc');
    const lerpSpeed = hovered ? 0.4 : 0.08;
    
    // Only lerp if we haven't reached the target or hover state changed
    if (hovered !== prevHovered || !currentColor.equals(target)) {
      currentColor.lerp(target, lerpSpeed);
      if (hovered !== prevHovered) {
        setPrevHovered(hovered);
      }
    }
  });
  return (
    <ImageImpl
      ref={ref}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      scale={imageScale}
      {...props}
    />
  );
});

export default HomeImage;
