import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import SectionLabel from '../ui/SectionLabel';
import { Eye, RotateCw, Layers, Compass, ZoomIn } from 'lucide-react';

// Procedural Luxury Architectural Model
function ArchitecturalTower({ wireframe = false, viewMode = 'all' }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Subtle ambient rotational drift when user isn't actively orbiting
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -2.5, 0]}>
      {/* ── Podium Base ── */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[4.2, 0.8, 3.8]} />
        <meshStandardMaterial
          color="#1e1c1a"
          roughness={0.8}
          metalness={0.2}
          wireframe={wireframe}
        />
      </mesh>

      {/* Podium Architectural Columns */}
      {[-1.8, -0.6, 0.6, 1.8].map((x, i) => (
        <mesh key={`col-${i}`} position={[x, 1.3, 1.7]}>
          <cylinderGeometry args={[0.08, 0.08, 1.2, 16]} />
          <meshStandardMaterial color="#b8935a" roughness={0.3} metalness={0.8} />
        </mesh>
      ))}

      {/* ── Main Tower Body (Tier 1) ── */}
      <mesh position={[0, 3.2, 0]}>
        <boxGeometry args={[3.2, 4.4, 2.8]} />
        <meshPhysicalMaterial
          color="#121820"
          roughness={0.15}
          metalness={0.85}
          transmission={0.4}
          thickness={0.8}
          ior={1.5}
          wireframe={wireframe}
        />
      </mesh>

      {/* Floor Plate Lines (Horizontal architectural bands) */}
      {[1.2, 1.8, 2.4, 3.0, 3.6, 4.2, 4.8].map((y, i) => (
        <mesh key={`floor-${i}`} position={[0, y, 0]}>
          <boxGeometry args={[3.26, 0.04, 2.86]} />
          <meshStandardMaterial color="#b8935a" roughness={0.4} metalness={0.7} />
        </mesh>
      ))}

      {/* Vertical Bronze Fins */}
      {[-1.2, -0.4, 0.4, 1.2].map((x, i) => (
        <mesh key={`fin-${i}`} position={[x, 3.2, 1.42]}>
          <boxGeometry args={[0.03, 4.4, 0.08]} />
          <meshStandardMaterial color="#c5a059" roughness={0.3} metalness={0.9} />
        </mesh>
      ))}

      {/* ── Tier 2 (Setback - Sky Suites) ── */}
      <mesh position={[0, 6.2, 0]}>
        <boxGeometry args={[2.5, 2.4, 2.2]} />
        <meshPhysicalMaterial
          color="#0f151c"
          roughness={0.1}
          metalness={0.9}
          transmission={0.5}
          thickness={0.9}
          wireframe={wireframe}
        />
      </mesh>

      {[5.4, 6.0, 6.6, 7.2].map((y, i) => (
        <mesh key={`floor2-${i}`} position={[0, y, 0]}>
          <boxGeometry args={[2.56, 0.04, 2.26]} />
          <meshStandardMaterial color="#b8935a" roughness={0.3} metalness={0.8} />
        </mesh>
      ))}

      {/* ── Tier 3 (The Crown & Penthouse Solarium) ── */}
      <mesh position={[0, 8.0, 0]}>
        <boxGeometry args={[1.8, 1.2, 1.6]} />
        <meshPhysicalMaterial
          color="#16202a"
          roughness={0.05}
          metalness={0.95}
          transmission={0.65}
          thickness={1.2}
          wireframe={wireframe}
        />
      </mesh>

      {/* Floating Crown Blade / Architectural Mast */}
      <mesh position={[0.7, 9.1, 0.6]}>
        <cylinderGeometry args={[0.02, 0.04, 2.2, 12]} />
        <meshStandardMaterial color="#e5c378" roughness={0.2} metalness={0.95} />
      </mesh>

      {/* Reflection Ground Water Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[18, 18]} />
        <meshStandardMaterial color="#080808" roughness={0.15} metalness={0.85} />
      </mesh>
    </group>
  );
}

export default function SpatialScene3D() {
  const [wireframe, setWireframe] = useState(false);
  const [cameraPreset, setCameraPreset] = useState('full');
  const controlsRef = useRef();

  const handlePreset = (preset) => {
    setCameraPreset(preset);
    if (!controlsRef.current) return;
    if (preset === 'podium') {
      controlsRef.current.target.set(0, -1.5, 0);
    } else if (preset === 'penthouse') {
      controlsRef.current.target.set(0, 4.5, 0);
    } else {
      controlsRef.current.target.set(0, 1.5, 0);
    }
  };

  return (
    <section
      id="spatial-3d"
      className="relative w-full py-28 md:py-36 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-[rgba(200,190,180,0.08)]"
      style={{ background: 'radial-gradient(ellipse at 50% 30%, #171717 0%, #0a0a0a 100%)' }}
      aria-label="Interactive 3D Spatial Architectural Experience"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div>
            <SectionLabel number="03" text="Spatial Dimension" className="mb-4" />
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[var(--color-ivory)] font-light leading-tight">
              Interactive 3D <br />
              <em className="italic text-[var(--color-accent)] font-serif">Spatial</em> Visualization
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-xs md:text-sm text-[var(--color-stone)] leading-relaxed">
              Explore the structural silhouette and curtain-wall geometry in real-time WebGL.
              Drag to orbit, pinch to zoom, or select elevation angles.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase font-display text-[var(--color-accent)]">
              <Compass size={14} className="animate-spin" style={{ animationDuration: '8s' }} />
              <span>Real-Time WebGL Spatial Engine</span>
            </div>
          </div>
        </div>

        {/* 3D Canvas Box */}
        <div className="relative w-full h-[620px] md:h-[720px] rounded-sm overflow-hidden border border-[rgba(200,190,180,0.12)] bg-[#0d0d0d] shadow-2xl">
          <Canvas gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}>
            <color attach="background" args={['#0d0d0d']} />
            <PerspectiveCamera makeDefault position={[7, 4.5, 9]} fov={38} />
            <OrbitControls
              ref={controlsRef}
              enableDamping
              dampingFactor={0.06}
              minDistance={4}
              maxDistance={18}
              maxPolarAngle={Math.PI / 2 - 0.05} // Prevent going below water plane
              target={[0, 1.5, 0]}
            />

            {/* Cinematic Lighting System */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 15, 8]} intensity={1.5} color="#fff6e8" />
            <directionalLight position={[-10, 8, -6]} intensity={0.6} color="#7aa0d6" />
            <pointLight position={[0, 6, 2]} intensity={0.8} color="#e5c378" distance={10} />

            <Suspense fallback={null}>
              <ArchitecturalTower wireframe={wireframe} />
            </Suspense>
          </Canvas>

          {/* Interactive HUD / Viewport Controls */}
          <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
            {/* View presets */}
            <div className="flex items-center gap-2 bg-[rgba(13,13,13,0.75)] backdrop-blur-md p-1.5 rounded-sm border border-[rgba(200,190,180,0.15)] pointer-events-auto">
              <span className="font-display text-[0.55rem] tracking-[0.2em] text-[var(--color-concrete)] uppercase px-2 hidden sm:inline">
                Perspective:
              </span>
              {[
                { id: 'full', label: 'Full Elevation' },
                { id: 'podium', label: 'Podium Level' },
                { id: 'penthouse', label: 'Apex Crown' },
              ].map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handlePreset(preset.id)}
                  className={`px-3 py-1.5 font-display text-[0.58rem] tracking-[0.18em] uppercase transition-all rounded-xs cursor-pointer border ${
                    cameraPreset === preset.id
                      ? 'bg-[var(--color-accent)] text-[var(--color-dark)] border-[var(--color-accent)] font-semibold'
                      : 'bg-transparent text-[var(--color-stone)] border-transparent hover:text-[var(--color-ivory)]'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            {/* Shading / Wireframe toggle */}
            <div className="flex items-center gap-2 bg-[rgba(13,13,13,0.75)] backdrop-blur-md p-1.5 rounded-sm border border-[rgba(200,190,180,0.15)] pointer-events-auto">
              <button
                onClick={() => setWireframe(!wireframe)}
                className={`flex items-center gap-2 px-3 py-1.5 font-display text-[0.58rem] tracking-[0.18em] uppercase transition-all rounded-xs cursor-pointer border ${
                  wireframe
                    ? 'bg-[var(--color-accent)] text-[var(--color-dark)] border-[var(--color-accent)]'
                    : 'bg-transparent text-[var(--color-stone)] border-transparent hover:text-[var(--color-ivory)]'
                }`}
              >
                <Layers size={13} />
                <span>{wireframe ? 'Wireframe Schematic' : 'Architectural Surface'}</span>
              </button>
            </div>
          </div>

          {/* Bottom HUD info */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 pointer-events-none text-[0.6rem] tracking-[0.2em] uppercase font-display text-[var(--color-concrete)]">
            <div className="flex items-center gap-4 bg-[rgba(13,13,13,0.7)] backdrop-blur-md px-4 py-2 border border-[rgba(200,190,180,0.1)] rounded-sm">
              <span>Touch & Drag: Orbit Camera</span>
              <span>·</span>
              <span>Scroll: Zoom Optics</span>
            </div>
            <div className="bg-[rgba(13,13,13,0.7)] backdrop-blur-md px-4 py-2 border border-[rgba(200,190,180,0.1)] rounded-sm text-[var(--color-accent)]">
              Model Compatibility: GLB / GLTF 2.0 Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
