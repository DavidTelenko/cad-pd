import { useState, Suspense, useEffect } from "react";

import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import indexedDB from "localforage";

import "../Styles/CadAr.css";

const Model = ({ model, scale, size, color, ...rest }) => {
    const gltf = useLoader(
        GLTFLoader,
        typeof model === "string" ? model : URL.createObjectURL(model)
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
    const [pattUrls, setPattUrls] = useState();
    const [scales, setScales] = useState();
    const [models, setModels] = useState();

    useEffect(() => {
        indexedDB.getItem("markers", (err, val) => {
            if (!err && val) setPattUrls(val.map(e => e.url));
        });
        indexedDB.getItem("scales", (err, val) => {
            if (!err && val) setScales(val);
        });
        indexedDB.getItem("models", (err, val) => {
            if (!err && val) setModels(val);
        });
    }, [models]);

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
                models && pattUrls && models.map((model, index) =>
                (<ARMarker type={"pattern"}
                    patternUrl={pattUrls[index]}
                    key={index}>
                    <Model model={model}
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