import indexedDB from "localforage";
import { Suspense, useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useLoader, Vector3 } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import "../../Styles/modelPreview.css";

interface FilePreviewProps {
    markerURL: string,
    modelURL: string
};

interface ModelProps {
    modelURL: string,
    scale: Vector3,
    size?: number
    color?: number,
    position?: Vector3
};

const Model = (props: ModelProps) => {
    const gltf = useLoader(GLTFLoader, props.modelURL);

    return (
        <mesh scale={props.scale}>
            <Suspense fallback={null}>
                <primitive object={gltf.scene} />
            </Suspense>
        </mesh>
    );
}

const FilePreview = (props: FilePreviewProps) => {
    return (
        <div className="file-preview-card">
            <img className="marker-preview"
                src={props.markerURL}
                alt="marker"
            />
            <div className="model-preview">
                {/* <Canvas
                    camera={{ position: [0, 0, 0], fov: 70 }}
                    style={{
                        backgroundColor: "#111a21",
                    }}
                >
                    <ambientLight />
                    <directionalLight intensity={0.4} />
                    <Model modelURL={props.modelURL} scale={[0.01, 0.01, 0.01]} position={[0, 0, 0]} />
                    <OrbitControls makeDefault />
                </Canvas> */}
                {props.modelURL}
            </div>
        </div>
    );
};

export default FilePreview;