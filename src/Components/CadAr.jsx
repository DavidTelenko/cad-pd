import { useState, Suspense, useEffect } from 'react';

import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import indexedDB from "localforage";

import "../Styles/CadAr.css";

const Model = ({ gltfLink, scale, size, color, ...rest }) => {
    const gltf = useLoader(
        GLTFLoader,
        gltfLink
        // "https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
    );

    return (
        <mesh scale={scale} {...rest}>
            <Suspense fallback={null}>
                <primitive object={gltf.scene} />
            </Suspense>
        </mesh>
    );
}

const CadAr = () => {
    const [modelLinks, setModelLinks] = useState();
    const [pattUrls, setPattUrls] = useState();
    const [scales, setScales] = useState();

    useEffect(() => {
        (() => {
            indexedDB.getItem("links", (err, val) => {
                if (!err && val) setModelLinks(val);
            });
            indexedDB.getItem("markers", (err, val) => {
                if (!err && val) setPattUrls(val.map(e => e.url));
            });
            indexedDB.getItem("scales", (err, val) => {
                if (!err && val) setScales(val);
            });
        })();
    }, [modelLinks]);

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
                modelLinks && pattUrls && modelLinks.map((link, index) =>
                (<ARMarker type={"pattern"}
                    patternUrl={pattUrls[index]}
                    key={index}>
                    <Model gltfLink={link}
                        scale={scales[index]}
                        position={[0, 0, 0]}
                    />
                    {/* <mesh>
                        <boxBufferGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={"green"} transparent />
                    </mesh> */}
                </ARMarker>))
            }
        </ARCanvas>
    );
}

export default CadAr;