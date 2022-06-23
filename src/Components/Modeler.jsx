// import { Canvas, useFrame } from "react-three-fiber";
// import { Stats, OrbitControls } from "@react-three/drei";
// // import * as three from "three";
import React, { Suspense, useState, useRef } from "react";
import { DefaultXRControllers, ARCanvas, Interactive } from "@react-three/xr";
import { Text, useGLTF } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { extend } from "react-three-fiber";
import Model from "./Model";

// type ModelProps = {
//   link: string,
// };

function Box({ color, size, scale, children, ...rest }) {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh
      scale={scale}
      ref={boxRef}
      rotation-x={Math.PI * 0.25}
      rotation-y={Math.PI * 0.25}
      {...rest}
    >
      {/* <textGeometry args={["test", { font, size: 5, height: 1 }]} /> */}
      <boxBufferGeometry attach="geometry" args={size} />
      <meshPhongMaterial attach="material" color={color} />
      {children}
    </mesh>
  );
}

function Button(props) {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState("blue");

  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0);
  };

  const gltf = useLoader(
    GLTFLoader,
    "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
  );

  return (
    <Interactive
      onHover={() => setHover(true)}
      onBlur={() => setHover(false)}
      onSelect={onSelect}
    >
      <Box
        color={color}
        // scale={hover ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]}
        scale={0.07} //{[0.08, 0.08, 0.08]}
        size={[0.03, 0.03, 0.03]}
        {...props}
      >
        <Suspense fallback={null}>
          <primitive object={gltf.scene} />

          {/* <Model /> */}
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

export default function Modeler({ link }) {
  return (
    <ARCanvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Button position={[0, 0.5, -0.2]} />
      <Button position={[0, -0.5, 0.2]} />
      <DefaultXRControllers />
    </ARCanvas>
  );
}
