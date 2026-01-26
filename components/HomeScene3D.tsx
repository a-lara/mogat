'use client';

import { Environment, Html, OrbitControls, Scroll, ScrollControls } from '@react-three/drei';
import { Canvas, useLoader, useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
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
import OverlayText from './OverlayText';
import BioSection from './BioSection';

function AutoRotateCamera() {
  useFrame((state) => {
    // Simple auto-rotation to replace OrbitControls on mobile
    const angle = 0.001; // Rotation speed
    const x = state.camera.position.x;
    const z = state.camera.position.z;
    state.camera.position.x = x * Math.cos(angle) - z * Math.sin(angle);
    state.camera.position.z = x * Math.sin(angle) + z * Math.cos(angle);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function SceneContent() {
  const { height } = useThree((state) => state.viewport);
  // Load nebula texture
  const texture = useLoader(TextureLoader, '/nebula-texture.jpg');
  const controlsRef = useRef<any>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileSize = window.innerWidth < 1024;
      setIsMobile(isTouch || isMobileSize);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <Environment files="/hdr/misty2.hdr" />

      {!isMobile ? (
        <OrbitControls
          ref={controlsRef}
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      ) : (
        <AutoRotateCamera />
      )}
      <ScrollControls damping={1.2} pages={15}>
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

          {/* Scrolling Arrow - Page 1 */}
          <Html position={[0, -height * 0.45, 0]} center zIndexRange={[100, 0]}>
            <div style={{ 
              color: 'white', 
              fontSize: '42px',
              animation: 'bounce 2s infinite',
              pointerEvents: 'none'
            }}>
              ↓
            </div>
          </Html>

          {/* Bio Section - Page 3 */}
          <Html position={[0, -height * 2.9, 0]} center zIndexRange={[100, 0]} style={{ width: '100vw', maxWidth: '100vw', pointerEvents: 'none' }}>
            <div className="w-full pointer-events-auto" style={{ width: '100vw', maxWidth: '100vw' }}>
              <BioSection />
            </div>
          </Html>

          {/* Belkitsch Section - Page 4 */}
          <Html position={[0, -height * 4, 0]} center zIndexRange={[100, 0]} style={{ width: '100vw', pointerEvents: 'none' }}>
            <div className="w-full flex justify-center pointer-events-auto">
              <OverlayText
                title="BELKITSCH"
                subtitle="{CON} TENIDO {ES} TÉTICO"
                text={[
                  "[…] el belkitsch, seguiremos diciendo que es lo cotidiano de un gusto común, digerible, asimilable, llevado al museo.",
                  "Es el ejercicio de un embellecimiento –kitsch– controlado: el mellizo guapo del kitsch, el que es culto pero llama la atención por ser bello.",
                  "A diferencia del kitsch que intentaba ser culto y era atractivo –para algunos–; pero al no tener ese acervo cultural no cuajaba en todos, no se le tomaba en serio. El belkitsch, sí (es)."
                ]}
                footer="(Mora G., 2017)"
                align="right"
              />
            </div>
          </Html>

          {/* Gallery at bottom - Shifted down */}
          <group position={[0, -height * 1, 0]}>
            <HomeImages />
          </group>
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
    <div 
      style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: 0,
        touchAction: 'pan-y',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      <Canvas
        className="canvas"
        gl={{ alpha: true, sortObjects: true }}
        style={{ 
          touchAction: 'pan-y',
          width: '100%',
          height: '100%'
        }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
