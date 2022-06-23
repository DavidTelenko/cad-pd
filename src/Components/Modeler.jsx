// import { Canvas, useFrame } from "react-three-fiber";
// import { Stats, OrbitControls } from "@react-three/drei";
// // import * as three from "three";
// import { DefaultXRControllers, Interactive } from "@react-three/xr";
// import { Text, useGLTF } from "@react-three/drei";
// import { extend } from "react-three-fiber";
// import Model from "./Model";
// import React, { Suspense, useState, useRef } from "react";
// import { useLoader, useFrame } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";

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

// type ModelProps = {
//   link: string,
// };

// function Box({ size, scale, children, ...rest }) {
//   const boxRef = useRef();

//   useFrame(() => {
//     boxRef.current.rotation.y += 0.01;
//   });

//   return (
//     <mesh
//       scale={scale}
//       ref={boxRef}
//       rotation-x={Math.PI * 0.25}
//       rotation-y={Math.PI * 0.25}
//       {...rest}
//     >
//       {/* <textGeometry args={["test", { font, size: 5, height: 1 }]} /> */}
//       <boxBufferGeometry attach="geometry" args={size} />
//       <meshPhongMaterial attach="material" />
//       {children}
//     </mesh>
//   );
// }

// function Box() {
//   return (
//     <mesh>
//       <boxBufferGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={"hotpink"} />
//     </mesh>
//   );
// }

// function Target(props) {
//   const gltf = useLoader(
//     GLTFLoader,
//     "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
//   );

//   return (
//     <Box
//       // scale={0.007} //{[0.08, 0.08, 0.08]}
//       // size={[0.03, 0.03, 0.03]}
//       {...props}
//     >
//       <Suspense fallback={null}>
//         <primitive object={gltf.scene} />
//       </Suspense>
//     </Box>
//   );
// }

export default function Modeler({ link }) {
  return (
    <ARCanvas
      camera={{ position: [0, 0, 0] }}
      dpr={window.devicePixelRatio}
      onCreated={({ gl }) => {
        gl.setSize(window.innerWidth, window.innerHeight);
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 0]} />
      <ARMarker type={"pattern"} patternUrl={"data/hiro.patt"}>
        <mesh>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
      </ARMarker>
    </ARCanvas>
  );
}
