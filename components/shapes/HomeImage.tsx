'use client';

import { useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState, useMemo, useEffect } from 'react';
import * as THREE from 'three';

// Custom material that supports zoom property compatible with existing animation logic
class CroppedZoomMaterial extends THREE.MeshBasicMaterial {
  _zoom: number = 1;
  _cropOffset: [number, number] = [0, 0];
  _cropSize: [number, number] = [1, 1];
  
  constructor(parameters?: THREE.MeshBasicMaterialParameters) {
    super(parameters);
  }

  get zoom() {
    return this._zoom;
  }

  set zoom(value: number) {
    this._zoom = value;
    this.updateTextureTransform();
  }

  setCrop(offset: [number, number], size: [number, number]) {
    this._cropOffset = offset;
    this._cropSize = size;
    this.updateTextureTransform();
  }

  updateTextureTransform() {
    if (!this.map) return;

    // Base crop values
    // In Three.js: offset (0,0) = bottom-left, (1,1) = top-right
    // Input cropOffset: (0,0) = top-left
    const baseW = this._cropSize[0];
    const baseH = this._cropSize[1];
    const baseX = this._cropOffset[0];
    const baseY = 1 - this._cropOffset[1] - baseH;

    // Apply zoom (centered within the cropped area)
    // Zoom 1 = show full cropped area
    // Zoom > 1 = show smaller area (zoom in)
    const zoom = Math.max(0.0001, this._zoom);
    
    const visibleW = baseW / zoom;
    const visibleH = baseH / zoom;
    
    // Center of the cropped area
    const centerX = baseX + baseW / 2;
    const centerY = baseY + baseH / 2;
    
    // New offset to keep center
    const newOffsetX = centerX - visibleW / 2;
    const newOffsetY = centerY - visibleH / 2;

    this.map.offset.set(newOffsetX, newOffsetY);
    this.map.repeat.set(visibleW, visibleH);
    // this.map.needsUpdate = true; // Not strictly needed for transform updates usually
  }
}

const HomeImage = React.memo(function HomeImage({ 
  c = new THREE.Color(), 
  scale,
  cropOffset = [0, 0], 
  cropSize = [1, 1],
  url,
  ...props 
}: { 
  c?: THREE.Color;
  url: string;
  position?: [number, number, number];
  scale?: number | [number, number] | [number, number, number];
  cropOffset?: [number, number];
  cropSize?: [number, number];
  [key: string]: any;
}) {
  const { viewport } = useThree();
  const texture = useTexture(url);
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, hover] = useState(false);
  const [prevHovered, setPrevHovered] = useState(false);

  // Ensure texture uses correct color space for vibrant colors
  useEffect(() => {
    if (texture) {
      // Modern Three.js uses SRGBColorSpace instead of sRGBEncoding
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.needsUpdate = true;
    }
  }, [texture]);

  // Calculate correct aspect ratio using CONTAIN logic
  const planeArgs = useMemo(() => {
    let targetW = 1;
    let targetH = 1;
    
    if (typeof scale === 'number') {
      targetW = scale;
      targetH = scale;
    } else if (Array.isArray(scale)) {
      targetW = scale[0];
      targetH = scale[1];
    }
    
    let aspectRatio = 1;
    if (texture && texture.image) {
      const imgW = texture.image.width;
      const imgH = texture.image.height;
      if (imgH > 0) {
        aspectRatio = imgW / imgH;
      }
    }
    
    const cropW = cropSize[0];
    const cropH = cropSize[1];
    const finalAspectRatio = aspectRatio * (cropW / cropH);
    
    const targetAspectRatio = targetW / targetH;
    
    let w, h;
    
    if (finalAspectRatio > targetAspectRatio) {
      w = targetW;
      h = w / finalAspectRatio;
    } else {
      h = targetH;
      w = h * finalAspectRatio;
    }
    
    return [w, h] as [number, number];
  }, [scale, texture, cropSize]);

  // Create custom material
  const material = useMemo(() => {
    const mat = new CroppedZoomMaterial({
      map: texture,
      transparent: false,
      toneMapped: false, // Keep disabled to preserve original colors without scene tone mapping
      fog: false,        
      envMap: null,
    });
    mat.envMap = null;
    return mat;
  }, [texture]);

  // Update crop params when props change
  useEffect(() => {
    material.setCrop(cropOffset, cropSize);
  }, [material, cropOffset, cropSize]);

  // Handle color animation
  const targetColor = useMemo(() => new THREE.Color(), []);

  useFrame(() => {
    if (!ref.current) return;
    
    const currentColor = material.color;
    // Lowered max brightness to 0.95 to avoid triggering HDR Bloom excessive glow
    const target = targetColor.set(hovered ? new THREE.Color(0.95, 0.95, 0.95) : '#ccc'); 
    const lerpSpeed = hovered ? 0.4 : 0.08;
    
    if (hovered !== prevHovered || !currentColor.equals(target)) {
      currentColor.lerp(target, lerpSpeed);
      if (hovered !== prevHovered) {
        setPrevHovered(hovered);
      }
    }
  });

  return (
    <mesh
      ref={ref}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
      material={material}
    >
      <planeGeometry args={planeArgs} />
    </mesh>
  );
});

export default HomeImage;
