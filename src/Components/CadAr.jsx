import { useState, Suspense, useEffect } from 'react';

import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import indexedDB from "localforage";

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

const Model = ({ gltfLink, props }) => {
    const gltf = useLoader(
        GLTFLoader,
        // "https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
        gltfLink
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
    const [links, setLinks] = useState();
    const [patts, setPatts] = useState();
    const [pattUrls, setPattUrls] = useState();

    useEffect(() => {
        indexedDB.getItem("links", (_err, val) => {
            setLinks(val);
            console.log(val);
        });
        indexedDB.getItem("patts", (_err, val) => {
            setPatts(val);
            console.log(val);
        });
    }, []);

    useEffect(() => {
        if (patts) setPattUrls(patts.map(el => {
            if (el.length) {
                const array = new Uint8Array(el.length);
                for (let i = 0; i < el.length; i++) {
                    array[i] = el.charCodeAt(i);
                }
                URL.createObjectURL(new Blob([array], { type: "text/patt" }));
            }
        }));
    }, [patts]);

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
            {
                links && patts && links.map((link, index) =>
                (<ARMarker type={"pattern"}
                    patternUrl={URL.createObjectURL(patts[index])}
                    key={index}>
                    <Model gltfLink={link} position={[0, 0.1, 0.2]} />
                </ARMarker>)
                )
            }
        </ARCanvas>
    );
}

export default CadAr;