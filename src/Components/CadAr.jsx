import { useState, Suspense } from 'react';

import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import "../Styles/CadAr.css";

function Box({ color, size, scale, children, ...rest }) {
    return (
        <mesh scale={scale} {...rest}>
            <boxBufferGeometry attach="geometry" args={size} />
            <meshPhongMaterial attach="material" color={color} />
            {children}
        </mesh>
    );
}

const Model = (props) => {
    const gltf = useLoader(
        GLTFLoader,
        "https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
    );

    return (
        <Box
            scale={[0.08, 0.08, 0.08]}
            size={[0.03, 0.03, 0.03]}
            {...props}
        >
            <Suspense fallback={null}>
                <primitive object={gltf.scene} />
            </Suspense>
        </Box>
    );
}

const CadAr = (props) => {
    return (
        <ARCanvas
            className="canvas"
            camera={{ position: [0, 0, 0] }}
            dpr={window.devicePixelRatio}
            onCreated={({ gl }) => {
                gl.setSize(window.innerWidth, window.innerHeight);
            }}
        >
            <ambientLight />
            <pointLight position={[10, 10, 0]} />

            {/*<HARD-CODE>*/}
            <ARMarker type={"pattern"} patternUrl={"data/hiro.patt"}>
                <mesh>
                    <boxBufferGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={"green"} />
                </mesh>
            </ARMarker>

            <ARMarker type={"pattern"} patternUrl={"data/pattern-6.patt"}>
                <Model position={[0, 0.1, 0.2]} />
            </ARMarker>
            {/*</HARD-CODE>*/}

        </ARCanvas>
    );
}

export default CadAr;