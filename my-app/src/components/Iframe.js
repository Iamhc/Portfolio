import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Html,
  useProgress,
  OrbitControls,
  Center,
} from "@react-three/drei";
import { Suspense } from "react";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)} % loaded</Html>;
}

function HandModel() {
  const { scene } = useGLTF(process.env.PUBLIC_URL + "/hand_compressed.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  // Rotate X by 40 degrees
  scene.rotation.x = 0.898; // 40 degrees in radians
  scene.rotation.y = 0.898;
  return (
    <Center>
      <primitive object={scene} scale={0.56} />
    </Center>
  );
}

export default function Iframe() {
  return (
    <div
      style={{
        position: "fixed",
        right: "5%",
        top: "15%",
        width: "65%",
        height: "65%",
        zIndex: 999,
      }}
    >
      <Canvas shadows camera={{ position: [0, -1, -5], fov: -60 }}>
        <ambientLight intensity={1} />
        <hemisphereLight
          intensity={1}
          skyColor={0xffffff}
          groundColor={0x444444}
        />
        <directionalLight position={[-5, 5, 5]} intensity={0.8} color="red" />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="purple" />
        <ambientLight intensity={0.3} />

        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={<Loader />}>
          <HandModel />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
