'use client';

import { Html } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';

const Logo3D = React.memo(() => {
  const { width, camera } = useThree((state) => ({
    width: state.viewport.width,
    camera: state.camera,
  }));
  const groupRef = useRef<THREE.Group>(null);
  
  // Memoize scale calculation to avoid recalculation on every render
  const scale = useMemo(() => {
    return width > 4.8 ? 0.3 : 0.2;
  }, [width]);

  // Memoize SVG size based on viewport
  const svgSize = useMemo(() => {
    return width > 4.8 ? 400 : 300;
  }, [width]);

  // Make the group always face the camera (billboard effect)
  // This counteracts the scene rotation
  useFrame(() => {
    if (groupRef.current && camera) {
      // Get the world position of the group
      const worldPosition = groupRef.current.getWorldPosition(new THREE.Vector3());
      // Make it look at the camera
      groupRef.current.lookAt(camera.position);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={scale}>
      <Html
        center
        transform
        zIndexRange={[100, 0]}
        style={{
          pointerEvents: 'none',
        }}
      >
        <img
          src="/logo.svg"
          alt="Logo"
          style={{
            width: `${svgSize}px`,
            height: 'auto',
            display: 'block',
            opacity: 1,
          }}
        />
      </Html>
    </group>
  );
});

export default Logo3D;
