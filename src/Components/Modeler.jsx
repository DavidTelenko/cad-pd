// import { Canvas, useFrame } from "react-three-fiber";
// import { Stats, OrbitControls } from "@react-three/drei";
// // import * as three from "three";
import React, { Suspense, useState, useRef } from "react";
import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";
import { DefaultXRControllers, Interactive } from "@react-three/xr";
import { Text, useGLTF } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { extend } from "react-three-fiber";
import Model from "./Model";

// type ModelProps = {
//   link: string,
// };

function Box({ size, scale, children, ...rest }) {
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
      <meshPhongMaterial attach="material" />
      {children}
    </mesh>
  );
}

// function Box() {
//   return (
//     <mesh>
//       <boxBufferGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={"hotpink"} />
//     </mesh>
//   );
// }

function Target(props) {
  const gltf = useLoader(
    GLTFLoader,
    "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
  );

  return (
    <Box
      // scale={hover ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]}
      scale={0.007} //{[0.08, 0.08, 0.08]}
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
  );
}

export default function Modeler({ link }) {
  return (
    // <ARCanvas>
    //   <ambientLight />
    //   <pointLight position={[10, 10, 10]} />
    //   <Button position={[0, 0.5, -0.2]} />
    //   <Button position={[0, -0.5, 0.2]} />
    //   <DefaultXRControllers />
    // </ARCanvas>
    // <a-scene embedded arjs>
    //   <a-marker id="asset" preset="hiro">
    //     <a-box
    //       position="0 0 0"
    //       scale={1.0}
    //       gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
    //     ></a-box>
    //   </a-marker>
    //   <a-entity camera></a-entity>
    // </a-scene>
    <ARCanvas
      gl={{
        antialias: false,
        powerPreference: "default",
        physicallyCorrectLights: true,
      }}
      onCameraStreamReady={() => console.log("Camera stream ready")}
      onCameraStreamError={() => console.error("Camera stream error")}
      onCreated={({ gl }) => {
        gl.setSize(window.innerWidth, window.innerHeight);
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 0]} intensity={10.0} />
      <ARMarker
        params={{ smooth: true }}
        type={"pattern"}
        patternUrl={"../public/patt.hiro"}
        onMarkerFound={() => {
          console.log("Marker Found");
        }}
      >
        {/* <Box /> */}
        <Target position={[0, -0.5, 0.2]} />
      </ARMarker>
    </ARCanvas>
  );
}
