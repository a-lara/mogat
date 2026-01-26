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

  // All portfolio images from the public folder with optional crop settings
  // cropOffset: [x, y] where 0,0 is top-left, 1,1 is bottom-right
  //   - x: 0 = left edge, 1 = right edge
  //   - y: 0 = top edge, 1 = bottom edge
  // cropSize: [width, height] where 1,1 shows full image, smaller values crop
  //   - width: 1 = full width, 0.5 = half width
  //   - height: 1 = full height, 0.5 = half height
  // Examples:
  //   - cropOffset={[0, 0]} cropSize={[1, 0.5]} = top half of image
  //   - cropOffset={[0.25, 0.25]} cropSize={[0.5, 0.5]} = center portion
  //   - cropOffset={[0.5, 0]} cropSize={[0.5, 1]} = right half of image
  type ImageConfig = {
    url: string;
    cropOffset: [number, number];
    cropSize: [number, number];
  };
  
  const imageConfigs: ImageConfig[] = [
    // You can customize cropping here for each image
    { url: '/portfolio/2025_proud_and_unprejudiced_web-980x1645.jpg', cropOffset: [0.1, 0.1] as [number, number], cropSize: [0.9, 0.9] as [number, number] },
    { url: '/portfolio/2025_new_colabo_web-980x788.jpg', cropOffset: [0, 0] as [number, number], cropSize: [1, 1] as [number, number] },
    { url: '/portfolio/2_Historical-Souvenir-980x1244.jpg', cropOffset: [0, 0] as [number, number], cropSize: [1, 1] as [number, number] },
    { url: '/portfolio/dendritajpg-1-980x942.jpg', cropOffset: [0, 0] as [number, number], cropSize: [1, 1] as [number, number] },
    { url: '/portfolio/IMG20240315110820-EDIT_2-980x1809.jpg', cropOffset: [0.6, 0] as [number, number], cropSize: [0.6, 0.6] as [number, number] },
    { url: '/portfolio/I-Neon_Ucrania_LGTBIQ_web-980x735.jpg', cropOffset: [0, 0] as [number, number], cropSize: [1, 1] as [number, number] },
    { url: '/portfolio/web_self-portrait_Exposoma_Nebulae-980x1325.jpg', cropOffset: [0.1, 0] as [number, number], cropSize: [0.7, 0.7] as [number, number] },
    { url: '/portfolio/Ambioma-de-Rorschach.-Erato-Calíope-Euterpe-2015.jpg', cropOffset: [0, 0] as [number, number], cropSize: [1, 1] as [number, number] },
    { url: '/portfolio/supernormal_jewel.jpg', cropOffset: [0, 0] as [number, number], cropSize: [1, 1] as [number, number] },
    { url: '/portfolio/libro-fondo-gris-1-scaled-980x610.jpg', cropOffset: [0, 0] as [number, number], cropSize: [1, 1] as [number, number] },
    { url: '/portfolio/3258477010.jpg', cropOffset: [0, 0] as [number, number], cropSize: [1, 1] as [number, number] },
    { url: '/portfolio/IMG20220427162158-scaled-980x980.jpg', cropOffset: [0, 0] as [number, number], cropSize: [1, 1] as [number, number] },
    { url: '/portfolio/IMG_20190915_123002-scaled-scaled.jpg', cropOffset: [0, 0] as [number, number], cropSize: [1, 1] as [number, number] },
    { url: '/portfolio/IMG_20190915_122329-e1608332627224.jpg', cropOffset: [0, 0] as [number, number], cropSize: [1, 1] as [number, number] },
    { url: '/portfolio/IMG_20190915_122049-scaled-e1608289329948.jpg', cropOffset: [0, 0] as [number, number], cropSize: [1, 1] as [number, number] },
    { url: '/portfolio/Pag-15.jpg', cropOffset: [0, 0] as [number, number], cropSize: [1, 1] as [number, number] },
    { url: '/portfolio/Pag-17-e1600798968283.jpg', cropOffset: [0, 0] as [number, number], cropSize: [1, 1] as [number, number] },
    { url: '/portfolio/crss3.jpg', cropOffset: [0, 0] as [number, number], cropSize: [1, 1] as [number, number] },
    { url: '/portfolio/Pag-19.jpg', cropOffset: [0, 0] as [number, number], cropSize: [1, 1] as [number, number] },
    { url: '/portfolio/Pag-233-1.jpg', cropOffset: [0, 0] as [number, number], cropSize: [1, 1] as [number, number] },
  ];

  return (
    <group ref={group}>
      {/* First section - Opening images with varied positions */}
      <HomeImage
        position={[-width * 0.3, -height - 8, 0]}
        scale={[width * 0.4, height * 0.6, 1]}
        url={imageConfigs[0].url}
        cropOffset={imageConfigs[0].cropOffset}
        cropSize={imageConfigs[0].cropSize}
      />
      <HomeImage
        position={[width * 0.25, -height - 8, 1]}
        scale={[width * 0.35, height * 0.5, 1]}
        url={imageConfigs[1].url}
        cropOffset={imageConfigs[1].cropOffset}
        cropSize={imageConfigs[1].cropSize}
      />
      <HomeImage
        position={[0, -height - 18, 0.5]}
        scale={[width * 0.45, height * 0.55, 1]}
        url={imageConfigs[2].url}
        cropOffset={imageConfigs[2].cropOffset}
        cropSize={imageConfigs[2].cropSize}
      />
      <HomeImage
        position={[-width * 0.35, -height - 28, 1.5]}
        scale={[width * 0.3, height * 0.4, 1]}
        url={imageConfigs[3].url}
        cropOffset={imageConfigs[3].cropOffset}
        cropSize={imageConfigs[3].cropSize}
      />
      <HomeImage
        position={[width * 0.3, -height - 28, 2]}
        scale={[width * 0.35, height * 0.45, 1]}
        url={imageConfigs[4].url}
        cropOffset={imageConfigs[4].cropOffset}
        cropSize={imageConfigs[4].cropSize}
      />
      <HomeImage
        position={[-width * 0.15, -height - 38, 0.5]}
        scale={[width * 0.5, height * 0.5, 1]}
        url={imageConfigs[5].url}
        cropOffset={imageConfigs[5].cropOffset}
        cropSize={imageConfigs[5].cropSize}
      />
      <HomeImage
        position={[width * 0.2, -height - 48, 1.2]}
        scale={[width * 0.35, height * 0.4, 1]}
        url={imageConfigs[9].url}
        cropOffset={imageConfigs[9].cropOffset}
        cropSize={imageConfigs[9].cropSize}
      />
      <HomeImage
        position={[-width * 0.25, -height - 48, 1.8]}
        scale={[width * 0.3, height * 0.35, 1]}
        url={imageConfigs[10].url}
        cropOffset={imageConfigs[10].cropOffset}
        cropSize={imageConfigs[10].cropSize}
      />
      <HomeImage
        position={[0, -height - 58, 0.8]}
        scale={[width * 0.4, height * 0.4, 1]}
        url={imageConfigs[11].url}
        cropOffset={imageConfigs[11].cropOffset}
        cropSize={imageConfigs[11].cropSize}
      />
      
      {/* Second section - Middle gallery with better spacing */}
      <HomeImage
        position={[-width * 0.3, -height * 1.8 - 8, 0]}
        scale={[width * 0.5, height * 0.6, 1]}
        url={imageConfigs[6].url}
        cropOffset={imageConfigs[6].cropOffset}
        cropSize={imageConfigs[6].cropSize}
      />
      <HomeImage
        position={[width * 0.25, -height * 1.8 - 8, 1]}
        scale={[width * 0.4, height * 0.5, 1]}
        url={imageConfigs[7].url}
        cropOffset={imageConfigs[7].cropOffset}
        cropSize={imageConfigs[7].cropSize}
      />
      <HomeImage
        position={[0, -height * 1.8 - 20, 0.5]}
        scale={[width * 0.45, height * 0.45, 1]}
        url={imageConfigs[8].url}
        cropOffset={imageConfigs[8].cropOffset}
        cropSize={imageConfigs[8].cropSize}
      />
      <HomeImage
        position={[-width * 0.35, -height * 1.8 - 32, 1.5]}
        scale={[width * 0.35, height * 0.4, 1]}
        url={imageConfigs[12].url}
        cropOffset={imageConfigs[12].cropOffset}
        cropSize={imageConfigs[12].cropSize}
      />
      <HomeImage
        position={[width * 0.3, -height * 1.8 - 32, 2]}
        scale={[width * 0.35, height * 0.4, 1]}
        url={imageConfigs[13].url}
        cropOffset={imageConfigs[13].cropOffset}
        cropSize={imageConfigs[13].cropSize}
      />
      <HomeImage
        position={[0, -height * 1.8 - 44, 0.8]}
        scale={[width * 0.4, height * 0.4, 1]}
        url={imageConfigs[14].url}
        cropOffset={imageConfigs[14].cropOffset}
        cropSize={imageConfigs[14].cropSize}
      />
      
      {/* Third section - Final images with varied layout */}
      <HomeImage
        position={[-width * 0.25, -height * 2.6 - 10, 0]}
        scale={[width * 0.45, height * 0.5, 1]}
        url={imageConfigs[15].url}
        cropOffset={imageConfigs[15].cropOffset}
        cropSize={imageConfigs[15].cropSize}
      />
      <HomeImage
        position={[width * 0.25, -height * 2.6 - 10, 1]}
        scale={[width * 0.4, height * 0.45, 1]}
        url={imageConfigs[16].url}
        cropOffset={imageConfigs[16].cropOffset}
        cropSize={imageConfigs[16].cropSize}
      />
      <HomeImage
        position={[0, -height * 2.6 - 22, 0.5]}
        scale={[width * 0.5, height * 0.4, 1]}
        url={imageConfigs[17].url}
        cropOffset={imageConfigs[17].cropOffset}
        cropSize={imageConfigs[17].cropSize}
      />
      <HomeImage
        position={[-width * 0.3, -height * 2.6 - 34, 1.2]}
        scale={[width * 0.35, height * 0.35, 1]}
        url={imageConfigs[18].url}
        cropOffset={imageConfigs[18].cropOffset}
        cropSize={imageConfigs[18].cropSize}
      />
      <HomeImage
        position={[width * 0.3, -height * 2.6 - 34, 1.8]}
        scale={[width * 0.35, height * 0.35, 1]}
        url={imageConfigs[19].url}
        cropOffset={imageConfigs[19].cropOffset}
        cropSize={imageConfigs[19].cropSize}
      />
    </group>
  );
}

export default HomeImages;
