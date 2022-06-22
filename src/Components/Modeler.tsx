// import { Canvas, useFrame } from "react-three-fiber";
// import { Stats, OrbitControls } from "@react-three/drei";
// // import * as three from "three";
import React, { Suspense, useState } from "react";
import { DefaultXRControllers, ARCanvas, Interactive } from "@react-three/xr";
// import { Text } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Box({ color, size, scale, children, ...rest }: any) {
  return (
    <mesh scale={scale} {...rest}>
      <boxBufferGeometry attach="geometry" args={size} />
      <meshPhongMaterial attach="material" color={color} />
      {children}
    </mesh>
  );
}

function Button(props: any) {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState<any>("blue");

  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0);
  };

  const gltf = useLoader(GLTFLoader, "../TryModel/show_04_4k.gltf");

  return (
    <Interactive
      onHover={() => setHover(true)}
      onBlur={() => setHover(false)}
      onSelect={onSelect}
    >
      <Box
        color={color}
        scale={hover ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]}
        size={[0.4, 0.1, 0.1]}
        {...props}
      >
        <Suspense fallback={null}>
          <primitive object={gltf.scene} />
          {/* <Text
            position={[0, 0, 0.06]}
            fontSize={0.05}
            color="#000"
            anchorX="center"
            anchorY="middle"
          >
            Hello react-xr!
          </Text> */}
        </Suspense>
      </Box>
    </Interactive>
  );
}

export default function Modeler() {
  return (
    <ARCanvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Button position={[0, 0.1, -0.2]} />
      <DefaultXRControllers />
    </ARCanvas>
  );
}
