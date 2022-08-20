import indexedDB from "localforage";
import { Suspense, useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useLoader, Vector3 } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface FilePreviewProps {
    markerURL: string,
    modelURL: string
};

interface ModelProps {
    modelURL: string,
    scale: Vector3,
    size?: number
    color?: number,
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
            <Canvas
                camera={{ position: [0, 0, 0], fov: 15 }}
                style={{
                    backgroundColor: '#111a21',
                    width: '100vw',
                    height: '100vh',
                }}
            >
                <ambientLight />
                <directionalLight intensity={0.4} />
                <Model modelURL={props.modelURL} scale={[0.01, 0.01, 0.01]} />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default FilePreview;