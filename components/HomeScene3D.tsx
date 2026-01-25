'use client';

import { Environment, Html, OrbitControls, Scroll, ScrollControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
  Vignette
} from '@react-three/postprocessing';
import React from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import ShapeBlue from './shapes/ShapeBlue';
import ShapePink from './shapes/ShapePink';
import Torus from './shapes/Torus';
import { LowerStarField, UpperStarField } from './shapes/StarField3D';
import HomeImages from './shapes/HomeImages';
import Logo3D from './shapes/Logo3D';

function SceneContent() {
  // Load nebula texture
  const texture = useLoader(TextureLoader, '/nebula-texture.jpg');

  // Memoize arrow styles to prevent object recreation
  const arrow = React.useMemo(() => ({
    position: 'fixed' as const,
    color: 'white',
    left: '370px',
    top: '300px',
    fontSize: '42px',
  }), []);

  return (
    <>
      <Environment files="/hdr/misty2.hdr" />

      <OrbitControls
        autoRotate
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ScrollControls damping={1.2} pages={12}>
        <Scroll>
          {/* Star field */}
          <UpperStarField />

          {/* Spinning sphere with nebula image */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[6, 20, 20]} />
            <meshBasicMaterial map={texture} side={THREE.BackSide} />
          </mesh>

          {/* Torus rings */}
          <Torus type="white" />
          <Torus type="pink" />
          <Torus type="blue" />

          {/* Lower star fields */}
          <LowerStarField position={[0, -10, 10]} size={0.005} />
          <LowerStarField position={[0, -40, 10]} size={0.008} />

          {/* Logo 3D Model */}
          <Logo3D />

          {/* Inner pink glowing sphere */}
          <ShapePink color={[100, 100, 0]} position={[0, 0, 0]}>
            <sphereGeometry args={[0.6, 20, 15]} />
          </ShapePink>

          <ambientLight intensity={0.2} />

          {/* Outer blue glowing sphere */}
          <ShapeBlue color={[5, 0, 0]} position={[0, 0, 0]}>
            <sphereGeometry args={[2.1, 20, 25]} />
          </ShapeBlue>

          {/* Gallery at bottom */}
          <HomeImages />

          {/* Scrolling arrow */}
          <Html>
            <div style={arrow}>↓</div>
          </Html>
        </Scroll>
      </ScrollControls>

      {/* Postprocessing effects */}
      <EffectComposer>
        <Bloom mipmapBlur radius={0.75} luminanceThreshold={1} />
        <Vignette eskil={false} offset={0.1} darkness={0.7} />
        <BrightnessContrast brightness={-0.1} />
      </EffectComposer>
    </>
  );
}

export default function HomeScene3D() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
      <Canvas
        className="canvas"
        gl={{ alpha: true, sortObjects: true }}
        style={{ touchAction: 'auto' }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
