import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Html,
  useProgress,
  OrbitControls,
  Center,
} from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)} % loaded</Html>;
}

function HandModel() {
  const { scene } = useGLTF("/cmodel.glb");
  const cloudMeshRef = useRef(null);
  const cloudInitialYRef = useRef(0);
  const yellowDirLightRef = useRef(null); // ✅ Directional light ref

  // 🖼️ Load All Textures (from /public folder - files are at root level)
  const textureProps = useTexture({
    blackBaseColor: "/BaseColor.png",
    house: "/house.png",
    texture2: "/4.jpg",
    texture3: "/3.jpg",
    texture4: "/2.jpg",
    wellBase: "/well_base.png",
    wellMetal: "/well_metal.png",
  });

  // Set color space for all textures
  Object.values(textureProps).forEach((texture) => {
    if (texture) {
      texture.colorSpace = THREE.SRGBColorSpace;
      if (
        texture.name === "texture2" ||
        texture.name === "texture3" ||
        texture.name === "texture4"
      ) {
        texture.flipY = false;
      }
    }
  });

  textureProps.wellBase.flipY = false;
  textureProps.wellMetal.flipY = false;

  // ✅ Create Directional Light (from vanilla code)
  useEffect(() => {
    if (!scene) return;
    if (!yellowDirLightRef.current) {
      const yellowDirLight = new THREE.DirectionalLight(0xffe082, 0.5);
      scene.add(yellowDirLight);
      yellowDirLightRef.current = yellowDirLight;
    }
  }, [scene]);

  // 🎨 Material Configuration
  useEffect(() => {
    if (!scene) return; // Guard clause - wait for scene to load
    
    scene.traverse((child) => {
      const name = child.name.toLowerCase();
      const parentName = child.parent ? child.parent.name.toLowerCase() : "";

      // 💡 White PointLight attachment
      if (name.includes("point") && !name.includes("yellow-light")) {
        const pointLight = new THREE.PointLight(0xfaf761, 1500, 200);
        const worldPosition = new THREE.Vector3();
        child.getWorldPosition(worldPosition);

        pointLight.position.set(worldPosition.x, worldPosition.y + 0.5, worldPosition.z);
        scene.add(pointLight);
        child.visible = false;
      }

      // 💡 Yellow PointLight for "yellow-light"
      if (name.includes("yellow-light") || name.includes("yellow_light")) {
        const worldPosition = new THREE.Vector3();
        child.getWorldPosition(worldPosition);

        const yellowPointLight = new THREE.PointLight(0xffe082, 2000, 200);
        yellowPointLight.position.copy(worldPosition);
        scene.add(yellowPointLight);

        // ✅ Update Directional Light position to match yellow-light
        if (yellowDirLightRef.current) {
          yellowDirLightRef.current.position.copy(worldPosition);
          yellowDirLightRef.current.target.position.set(0, 0, 0);
          scene.add(yellowDirLightRef.current.target);
        }
      }

      // 🎨 Material & Color Application
      if (child.isMesh && child.material) {
        child.material = child.material.clone();

       
        // ✨ BLACK MESH (Shiny)
        if (
          name.includes("cylinder_7") ||
          name.includes("black") ||
          name.includes("blk")
        ) {
          if ("roughness" in child.material) child.material.roughness = 0.3;
          if ("metalness" in child.material) child.material.metalness = 0.1;
          child.material.map = textureProps.blackBaseColor;
          child.material.needsUpdate = true;
        }
        // 🌾 ALL OTHER MESHES (Matte)
        else {
          if ("roughness" in child.material) child.material.roughness = 0.95;
          if ("metalness" in child.material) child.material.metalness = 0.0;

          // ☁️ Cloud Animation Reference
          if (
            name.includes("merged geometry 867442") ||
            name.includes("merged_geometry_867442")
          ) {
            child.material.color.set(0xb0b0b0);
            cloudMeshRef.current = child;
            cloudInitialYRef.current = child.position.y;
          }
          // 🍃 Leaf
          else if (name.includes("leaf") || name.includes("leaves")) {
            child.material.color.set(0x5b8c6b);
          }
          // 🌱 Bud
          else if (name.includes("bud")) {
            if (name.includes("three") || name.includes("3")) {
              child.material.color.set(0xc88c8c);
            } else {
              child.material.color.set(0xb588f7);
            }
          }
          // 🌸 Flower
          else if (name.includes("flower")) {
            if (name.includes("3") || name.includes("_3") || name.includes(".003")) {
              child.material.color.set(0xa13b66);
            } else if (name.includes("2") || name.includes("_2") || name.includes(".002")) {
              child.material.color.set(0xd6d678);
            } else {
              child.material.color.set(0xff6b8b);
            }
          }
          // 🟡 Petal
          else if (name.includes("petal")) {
            child.material.color.set(0xff6b8b);
          }
          // ⬛ Stone/Objects
          else if (
            name.includes("icosahedron") ||
            name.includes("stone") ||
            name.includes("867442")
          ) {
            child.material.color.set(0x000000);
          }
          // 🏠 House
          else if (name.includes("house")) {
            child.material.map = textureProps.house;
            child.material.needsUpdate = true;
          }
          // 🟡 Yellow Light
          else if (name.includes("yellow-light") || name.includes("yellow_light")) {
            child.material.color.set(0xffe082);
          }
          // 🤎 Ground (Dark Brown)
          else if (name.includes("ground") || name.includes("867441")) {
            child.material.color.set(0x2a2410); 
          }
          // 🌿 Grass (Green)
          else if (
            name.includes("grass") ||
            name.includes("default3") ||
            name.includes("default2")
          ) {
            child.material.color.set(0x3a7d44);
          }
          // ⚪ Pure White (Unlit)
          else if (name.includes("f2e381")) {
            child.material.color.set(0xffffff);
            if ("emissive" in child.material) {
              child.material.emissive.set(0xffffff);
              child.material.emissiveIntensity = 1.0;
            }
          }
          // Light Green
          else if (name.includes("lg") || name.includes("light_green")) {
            child.material.color.set(0x57a56a);
          }
          // Light Brown (to Black)
          else if (name.includes("lb") || name.includes("light_brown")) {
            child.material.color.set(0x000000);
          }
          // Dark Green
          else if (
            name.includes("dark-green") ||
            name.includes("dark_green") ||
            name.includes("dg")
          ) {
            child.material.color.set(0x1e561b);
          }
          // Tan Color
          else if (name.includes("a48c5d")) {
            child.material.color.set(0xa48c5d);
          }
          // Dark Brown
          else if (name.includes("db") || name.includes("dark_brown")) {
            child.material.color.set(0x4a2e12);
          }
          // 🪣 Water Well
          else if (
            name.includes("waterwell") ||
            parentName.includes("waterwell") ||
            name.includes("old_water_well")
          ) {
            child.material.map = textureProps.wellBase;
            if ("metalnessMap" in child.material) {
              child.material.metalnessMap = textureProps.wellMetal;
            }
            if ("roughnessMap" in child.material) {
              child.material.roughnessMap = textureProps.wellMetal;
            }
            child.material.needsUpdate = true;
          }
          // 💧 Water
          else if (name.includes("water")) {
            child.material.color.set(0x4da6ff);
            if ("emissive" in child.material) {
              child.material.emissive.set(0x224466);
              child.material.emissiveIntensity = 0.4;
            }
            child.material.roughness = 0.2;
            child.material.metalness = 0.1;
            child.material.needsUpdate = true;
          }
        }
      }
    });
  }, [scene, textureProps]);

  // Cast shadows
  useEffect(() => {
    if (!scene) return;
    
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  // 🎯 Rotation - Zero angle (straight view)
  scene.rotation.x = 0;
  scene.rotation.y = 0;
  scene.rotation.z = 0;

  return (
    <Center>
      <primitive object={scene} scale={0.85} />
    </Center>
  );
}

export default function Iframe() {
  return (
    <div id="iframe" style={{ width: "100%", height: "100vh" }}>
      <Canvas shadows camera={{ position: [10, 30, -60], fov: 75 }}>
        {/* 🌌 Scene Background */}
        <color attach="background" args={[0x0e0d00]} />

        {/* 💡 Ambient Light */}
        <ambientLight intensity={2} color={0xffffff} />

        {/* ☀️ Directional Light */}
        <directionalLight position={[0, 0, 0]} intensity={0.5} color={0x87ceeb} />

        {/* Hemisphere Light */}
        <hemisphereLight
          intensity={1}
          skyColor={0xffffff}
          groundColor={0x444444}
        />

        {/* Extra Lighting for Drama */}
        <directionalLight position={[-5, 5, 5]} intensity={0.8} color="red" />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="purple" />

        {/* Model Loading */}
        <Suspense fallback={<Loader />}>
          <HandModel />
        </Suspense>

        {/* Controls */}
        <OrbitControls enableZoom={true} enableDamping dampingFactor={0.05} />
      </Canvas>
    </div>
  );
}