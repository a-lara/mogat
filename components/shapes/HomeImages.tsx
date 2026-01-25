'use client';

import { useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';
import HomeImage from './HomeImage';

// Returns all images
function HomeImages() {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const group = useRef<THREE.Group>(null);

  // Match the X-axis rotation of the object with the camera's X-axis rotation
  useFrame(({ camera }) => {
    if (!group.current) return;
    
    group.current.rotation.z = camera.rotation.z;
    group.current.rotation.y = camera.rotation.y;
    group.current.rotation.x = camera.rotation.x;
    
    // Adds zooming effects when scrolling
    const child0 = group.current.children[0] as THREE.Mesh;
    if (child0?.material) {
      (child0.material as any).zoom =
        1 + data.range(1 / 3, 0.2 / 3) / 3;
    }

    const child1 = group.current.children[1] as THREE.Mesh;
    if (child1?.material) {
      (child1.material as any).zoom = 1 + data.range(0, 1 / 3) / 3;
    }

    const child2 = group.current.children[2] as THREE.Mesh;
    if (child2?.material) {
      (child2.material as any).zoom =
        1 + data.range(1.15 / 3, 1 / 3) / 3;
    }

    const child3 = group.current.children[3] as THREE.Mesh;
    if (child3?.material) {
      (child3.material as any).zoom =
        1 + data.range(1.15 / 3, 1 / 3) / 2;
    }
    
    const child4 = group.current.children[4] as THREE.Mesh;
    if (child4?.material) {
      (child4.material as any).zoom =
        1 + data.range(1.25 / 3, 1 / 3) / 1;
    }
    
    const child5 = group.current.children[5] as THREE.Mesh;
    if (child5?.material) {
      (child5.material as any).zoom =
        1 + data.range(1.8 / 3, 1 / 3) / 3;
    }
    
    const child6 = group.current.children[6] as THREE.Mesh;
    if (child6?.material) {
      (child6.material as any).zoom =
        1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
    }

    const child7 = group.current.children[7] as THREE.Mesh;
    if (child7?.material) {
      (child7.material as any).zoom =
        1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
    }

    const child8 = group.current.children[8] as THREE.Mesh;
    if (child8?.material) {
      (child8.material as any).zoom =
        1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
    }
    
    // Additional images animations
    for (let i = 9; i < group.current.children.length; i++) {
      const child = group.current.children[i] as THREE.Mesh;
      if (child?.material) {
        const scrollProgress = (i - 9) / (group.current.children.length - 9);
        const rangeStart = 2 / 3 + scrollProgress * (1 / 3);
        (child.material as any).zoom =
          1 + (1 - data.range(rangeStart, 0.1)) / 3;
      }
    }
  });

  // All portfolio images from the public folder
  const images = [
    '/portfolio/2025_proud_and_unprejudiced_web-980x1645.jpg',
    '/portfolio/2025_new_colabo_web-980x788.jpg',
    '/portfolio/2_Historical-Souvenir-980x1244.jpg',
    '/portfolio/dendritajpg-1-980x942.jpg',
    '/portfolio/IMG20240315110820-EDIT_2-980x1809.jpg',
    '/portfolio/I-Neon_Ucrania_LGTBIQ_web-980x735.jpg',
    '/portfolio/web_self-portrait_Exposoma_Nebulae-980x1325.jpg',
    '/portfolio/Ambioma-de-Rorschach.-Erato-Calíope-Euterpe-2015.jpg',
    '/portfolio/supernormal_jewel.jpg',
    '/portfolio/libro-fondo-gris-1-scaled-980x610.jpg',
    '/portfolio/3258477010.jpg',
    '/portfolio/IMG20220427162158-scaled-980x980.jpg',
    '/portfolio/IMG_20190915_123002-scaled-scaled.jpg',
    '/portfolio/IMG_20190915_122329-e1608332627224.jpg',
    '/portfolio/IMG_20190915_122049-scaled-e1608289329948.jpg',
    '/portfolio/Pag-15.jpg',
    '/portfolio/Pag-17-e1600798968283.jpg',
    '/portfolio/crss3.jpg',
    '/portfolio/Pag-19.jpg',
    '/portfolio/Pag-233-1.jpg',
  ];

  return (
    <group ref={group}>
      {/* First section - Opening images with varied positions */}
      <HomeImage
        position={[-width * 0.3, -height - 8, 0]}
        scale={[width * 0.4, height * 0.6, 1]}
        url={images[0]}
      />
      <HomeImage
        position={[width * 0.25, -height - 8, 1]}
        scale={[width * 0.35, height * 0.5, 1]}
        url={images[1]}
      />
      <HomeImage
        position={[0, -height - 18, 0.5]}
        scale={[width * 0.45, height * 0.55, 1]}
        url={images[2]}
      />
      <HomeImage
        position={[-width * 0.35, -height - 28, 1.5]}
        scale={[width * 0.3, height * 0.4, 1]}
        url={images[3]}
      />
      <HomeImage
        position={[width * 0.3, -height - 28, 2]}
        scale={[width * 0.35, height * 0.45, 1]}
        url={images[4]}
      />
      <HomeImage
        position={[-width * 0.15, -height - 38, 0.5]}
        scale={[width * 0.5, height * 0.5, 1]}
        url={images[5]}
      />
      <HomeImage
        position={[width * 0.2, -height - 48, 1.2]}
        scale={[width * 0.35, height * 0.4, 1]}
        url={images[9]}
      />
      <HomeImage
        position={[-width * 0.25, -height - 48, 1.8]}
        scale={[width * 0.3, height * 0.35, 1]}
        url={images[10]}
      />
      <HomeImage
        position={[0, -height - 58, 0.8]}
        scale={[width * 0.4, height * 0.4, 1]}
        url={images[11]}
      />
      
      {/* Second section - Middle gallery with better spacing */}
      <HomeImage
        position={[-width * 0.3, -height * 1.8 - 8, 0]}
        scale={[width * 0.5, height * 0.6, 1]}
        url={images[6]}
      />
      <HomeImage
        position={[width * 0.25, -height * 1.8 - 8, 1]}
        scale={[width * 0.4, height * 0.5, 1]}
        url={images[7]}
      />
      <HomeImage
        position={[0, -height * 1.8 - 20, 0.5]}
        scale={[width * 0.45, height * 0.45, 1]}
        url={images[8]}
      />
      <HomeImage
        position={[-width * 0.35, -height * 1.8 - 32, 1.5]}
        scale={[width * 0.35, height * 0.4, 1]}
        url={images[12]}
      />
      <HomeImage
        position={[width * 0.3, -height * 1.8 - 32, 2]}
        scale={[width * 0.35, height * 0.4, 1]}
        url={images[13]}
      />
      <HomeImage
        position={[0, -height * 1.8 - 44, 0.8]}
        scale={[width * 0.4, height * 0.4, 1]}
        url={images[14]}
      />
      
      {/* Third section - Final images with varied layout */}
      <HomeImage
        position={[-width * 0.25, -height * 2.6 - 10, 0]}
        scale={[width * 0.45, height * 0.5, 1]}
        url={images[15]}
      />
      <HomeImage
        position={[width * 0.25, -height * 2.6 - 10, 1]}
        scale={[width * 0.4, height * 0.45, 1]}
        url={images[16]}
      />
      <HomeImage
        position={[0, -height * 2.6 - 22, 0.5]}
        scale={[width * 0.5, height * 0.4, 1]}
        url={images[17]}
      />
      <HomeImage
        position={[-width * 0.3, -height * 2.6 - 34, 1.2]}
        scale={[width * 0.35, height * 0.35, 1]}
        url={images[18]}
      />
      <HomeImage
        position={[width * 0.3, -height * 2.6 - 34, 1.8]}
        scale={[width * 0.35, height * 0.35, 1]}
        url={images[19]}
      />
    </group>
  );
}

export default HomeImages;
