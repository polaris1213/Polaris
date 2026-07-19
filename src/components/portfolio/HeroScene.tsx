import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/*  Core — a translucent gold sphere held inside nested rotating       */
/*  wireframe cages. Evokes a resilient system under structure.        */
/* ------------------------------------------------------------------ */
function Core() {
  const ico = useRef<THREE.Mesh>(null);
  const cube = useRef<THREE.Mesh>(null);
  const octa = useRef<THREE.Mesh>(null);
  const sphere = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (ico.current) {
      ico.current.rotation.y += delta * 0.18;
      ico.current.rotation.x += delta * 0.06;
    }
    if (cube.current) {
      cube.current.rotation.y -= delta * 0.12;
      cube.current.rotation.z += delta * 0.05;
    }
    if (octa.current) {
      octa.current.rotation.x -= delta * 0.22;
      octa.current.rotation.y += delta * 0.1;
    }
    if (sphere.current) {
      const s = 1 + Math.sin(t * 0.9) * 0.03;
      sphere.current.scale.setScalar(s);
    }
  });

  return (
    <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.6}>
      {/* translucent gold sphere */}
      <mesh ref={sphere}>
        <sphereGeometry args={[0.92, 64, 64]} />
        <meshStandardMaterial
          color="#c9a24a"
          roughness={0.4}
          metalness={0.3}
          transparent
          opacity={0.34}
          emissive="#4a3210"
          emissiveIntensity={0.3}
        />
      </mesh>


      {/* nested wireframe cages */}
      <mesh ref={ico}>
        <icosahedronGeometry args={[1.85, 0]} />
        <meshBasicMaterial color="#e6e2d6" wireframe transparent opacity={0.22} />
      </mesh>
      <mesh ref={cube}>
        <boxGeometry args={[2.6, 2.6, 2.6]} />
        <meshBasicMaterial color="#d9cfb8" wireframe transparent opacity={0.12} />
      </mesh>
      <mesh ref={octa}>
        <octahedronGeometry args={[2.05, 0]} />
        <meshBasicMaterial color="#f0d089" wireframe transparent opacity={0.16} />
      </mesh>
    </Float>
  );
}

/* ------------------------------------------------------------------ */
/*  Orbital ring with a travelling node.                               */
/* ------------------------------------------------------------------ */
function OrbitRing() {
  const ring = useRef<THREE.Group>(null);
  const node = useRef<THREE.Mesh>(null);
  const R = 3.15;

  useFrame((state, delta) => {
    if (ring.current) ring.current.rotation.z += delta * 0.05;
    if (node.current) {
      const a = state.clock.elapsedTime * 0.6;
      node.current.position.set(Math.cos(a) * R, Math.sin(a) * R, 0);
    }
  });

  return (
    <group rotation={[Math.PI / 2.4, 0.35, 0]}>
      <group ref={ring}>
        <mesh>
          <torusGeometry args={[R, 0.006, 12, 160]} />
          <meshBasicMaterial color="#d9a94a" transparent opacity={0.35} />
        </mesh>
        <mesh ref={node}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial
            color="#f0d089"
            emissive="#d9a94a"
            emissiveIntensity={1.6}
          />
        </mesh>
      </group>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Constellation — drifting nodes linked by lines when close.         */
/* ------------------------------------------------------------------ */
type NodeDef = {
  radius: number;
  speed: number;
  phase: number;
  tilt: number;
  y: number;
  size: number;
};

function Constellation() {
  const NODE_COUNT = 20;
  const group = useRef<THREE.Group>(null);
  const meshes = useRef<THREE.Mesh[]>([]);
  const lineRef = useRef<THREE.LineSegments>(null);

  const nodes = useMemo<NodeDef[]>(() => {
    const arr: NodeDef[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      arr.push({
        radius: 2.6 + Math.random() * 2.6,
        speed: (0.08 + Math.random() * 0.2) * (Math.random() > 0.5 ? 1 : -1),
        phase: Math.random() * Math.PI * 2,
        tilt: (Math.random() - 0.5) * 1.6,
        y: (Math.random() - 0.5) * 3.4,
        size: 0.025 + Math.random() * 0.04,
      });
    }
    return arr;
  }, []);

  const maxSegments = (NODE_COUNT * (NODE_COUNT - 1)) / 2;
  const linePositions = useMemo(
    () => new Float32Array(maxSegments * 2 * 3),
    [maxSegments],
  );
  const lineGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    return g;
  }, [linePositions]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const positions: THREE.Vector3[] = [];

    nodes.forEach((n, i) => {
      const a = n.phase + t * n.speed;
      const x = Math.cos(a) * n.radius;
      const z = Math.sin(a) * n.radius;
      const y = n.y + Math.sin(a) * Math.sin(n.tilt) * n.radius;
      const zt = z * Math.cos(n.tilt);
      const m = meshes.current[i];
      if (m) {
        m.position.set(x, y, zt);
        const pulse = 1 + Math.sin(t * 1.6 + i) * 0.3;
        m.scale.setScalar(pulse);
      }
      positions.push(new THREE.Vector3(x, y, zt));
    });

    let ptr = 0;
    const maxDist = 2.1;
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].distanceTo(positions[j]) < maxDist) {
          linePositions[ptr++] = positions[i].x;
          linePositions[ptr++] = positions[i].y;
          linePositions[ptr++] = positions[i].z;
          linePositions[ptr++] = positions[j].x;
          linePositions[ptr++] = positions[j].y;
          linePositions[ptr++] = positions[j].z;
        }
      }
    }
    for (let k = ptr; k < linePositions.length; k++) linePositions[k] = 0;
    lineGeo.setDrawRange(0, ptr / 3);
    (lineGeo.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;

    if (group.current) group.current.rotation.y = t * 0.025;
  });

  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) meshes.current[i] = el;
          }}
        >
          <sphereGeometry args={[n.size, 12, 12]} />
          <meshStandardMaterial
            color="#f4efe2"
            emissive="#cfc6b0"
            emissiveIntensity={1}
            roughness={0.5}
          />
        </mesh>
      ))}
      <lineSegments ref={lineRef} geometry={lineGeo}>
        <lineBasicMaterial color="#8f9099" transparent opacity={0.22} />
      </lineSegments>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Ambient dust.                                                      */
/* ------------------------------------------------------------------ */
function Dust() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 600;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.012;
      ref.current.rotation.x += delta * 0.004;
    }
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial
        color="#cfc6b0"
        size={0.025}
        sizeAttenuation
        transparent
        depthWrite={false}
        opacity={0.5}
      />
    </points>
  );
}

/* ------------------------------------------------------------------ */
/*  Pointer parallax + subtle camera drift.                            */
/* ------------------------------------------------------------------ */
function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        state.pointer.x * 0.35,
        0.045,
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        -state.pointer.y * 0.24,
        0.045,
      );
    }
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      state.pointer.x * 0.5,
      0.03,
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      state.pointer.y * 0.35,
      0.03,
    );
    camera.lookAt(0, 0, 0);
  });

  return <group ref={group}>{children}</group>;
}

export function HeroScene() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Canvas
      camera={{ position: [1.2, 0, 7.4], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.7} color="#ffe9be" />
      <pointLight position={[-5, -3, 2]} intensity={1.4} color="#c98b3a" />
      <pointLight position={[0, 2, 3]} intensity={1} color="#f0d089" />
      {/* shift the whole system to the right of the viewport */}
      <group position={[1.5, 0, 0]} scale={0.82}>
        <ParallaxRig>
          <Core />
          <OrbitRing />
          <Constellation />
          <Dust />
        </ParallaxRig>
      </group>
    </Canvas>

  );
}
