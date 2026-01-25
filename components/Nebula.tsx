'use client';

import { useEffect, useRef } from 'react';

export default function Nebula() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Nebula parameters
    interface NebulaParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      hue: number;
      saturation: number;
      lightness: number;
      opacity: number;
      life: number;
      maxLife: number;
      baseX: number;
      baseY: number;
      angle: number;
      distance: number;
      expansionSpeed: number;
    }

    const particles: NebulaParticle[] = [];
    const particleCount = 200;

    // Helper function to create HSLA color string
    const hsla = (h: number, s: number, l: number, a: number) => {
      return `hsla(${h}, ${s}%, ${l}%, ${a})`;
    };

    // Create initial nebula particles
    const createNebula = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
        const initialDistance = Math.random() * Math.min(canvas.width, canvas.height) * 0.2;
        const expansionSpeed = 0.15 + Math.random() * 0.25;
        
        particles.push({
          x: centerX + Math.cos(angle) * initialDistance,
          y: centerY + Math.sin(angle) * initialDistance,
          baseX: centerX,
          baseY: centerY,
          angle: angle,
          distance: initialDistance,
          expansionSpeed: expansionSpeed,
          vx: Math.cos(angle) * expansionSpeed,
          vy: Math.sin(angle) * expansionSpeed,
          radius: 1.5 + Math.random() * 3.5,
          hue: 270 + Math.random() * 40,
          saturation: 60 + Math.random() * 20,
          lightness: 40 + Math.random() * 40,
          opacity: 0.2 + Math.random() * 0.5,
          life: Math.random() * 50,
          maxLife: 150 + Math.random() * 300,
        });
      }
    };

    createNebula();

    let animationFrame: number;
    let time = 0;

    // Animation loop
    const animate = () => {
      time += 0.016; // ~60fps

      // Clear with very subtle fade for trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw base nebula gradient
      const baseGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.min(canvas.width, canvas.height) * 0.8
      );
      baseGradient.addColorStop(0, 'rgba(138, 43, 226, 0.15)');
      baseGradient.addColorStop(0.3, 'rgba(75, 0, 130, 0.1)');
      baseGradient.addColorStop(0.6, 'rgba(25, 25, 112, 0.05)');
      baseGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        // Continuous expansion from center
        particle.distance += particle.expansionSpeed;
        
        // Add subtle orbital motion
        const orbitalAngle = particle.angle + time * 0.001;
        const spiralFactor = 1 + time * 0.0001;
        
        particle.x = particle.baseX + Math.cos(orbitalAngle) * particle.distance * spiralFactor;
        particle.y = particle.baseY + Math.sin(orbitalAngle) * particle.distance * spiralFactor;
        
        particle.life += 0.3;

        // Reset particle when it goes too far
        const maxDistance = Math.max(canvas.width, canvas.height) * 1.5;
        if (
          particle.distance > maxDistance ||
          particle.life > particle.maxLife
        ) {
          particle.baseX = canvas.width / 2 + (Math.random() - 0.5) * 100;
          particle.baseY = canvas.height / 2 + (Math.random() - 0.5) * 100;
          particle.angle = Math.random() * Math.PI * 2;
          particle.distance = Math.random() * 50;
          particle.life = 0;
          particle.maxLife = 150 + Math.random() * 300;
          particle.opacity = 0.2 + Math.random() * 0.5;
        }

        // Pulsing opacity based on distance
        const distanceFactor = Math.min(particle.distance / (maxDistance * 0.5), 1);
        const pulse = Math.sin(time * 0.5 + particle.angle) * 0.2 + 0.8;
        const currentOpacity = particle.opacity * (1 - distanceFactor * 0.5) * pulse;

        // Draw particle with multi-layer glow effect
        const glowRadius = particle.radius * 4;
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          glowRadius
        );
        gradient.addColorStop(0, hsla(particle.hue, particle.saturation, particle.lightness, currentOpacity));
        gradient.addColorStop(0.3, hsla(particle.hue, particle.saturation, particle.lightness, currentOpacity * 0.6));
        gradient.addColorStop(0.6, hsla(particle.hue, particle.saturation, particle.lightness, currentOpacity * 0.3));
        gradient.addColorStop(1, hsla(particle.hue, particle.saturation, particle.lightness, 0));

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw bright core
        ctx.fillStyle = hsla(particle.hue, particle.saturation, particle.lightness, Math.min(currentOpacity * 1.5, 1));
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ 
        background: 'radial-gradient(ellipse at center, rgba(138, 43, 226, 0.15) 0%, rgba(75, 0, 130, 0.1) 30%, rgba(25, 25, 112, 0.05) 60%, #000 100%)' 
      }}
    />
  );
}
