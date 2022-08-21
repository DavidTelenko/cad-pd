import indexedDB from "localforage";
import { Suspense, useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useLoader, useThree, Vector3 } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


import "../../Styles/modelPreview.css";
import * as THREE from "three";

interface FilePreviewProps {
    markerURL: string,
    modelURL: string
};

interface ModelProps {
    modelURL: string,
    scale?: Vector3,
    size?: number
    color?: number,
    position?: Vector3
};

const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
        () => {
            const controls = new OrbitControls(camera, gl.domElement);

            controls.minDistance = 3;
            controls.maxDistance = 20;
            return () => {
                controls.dispose();
            };
        },
        [camera, gl]
    );
    return null;
};

const Model = (props: ModelProps) => {
    const gltf = useLoader(GLTFLoader, props.modelURL);

    console.log(props.modelURL);


    const getScale = (scene: typeof gltf.scene) => {
        const bbox = new THREE.Box3().setFromObject(scene);
        const size = bbox.getSize(new THREE.Vector3());

        console.log(bbox, scene.id);

        const maxAxis = Math.max(size.x, size.y, size.z);

        console.log(scene.scale.clone().multiplyScalar(1.0 / maxAxis));


        return scene.scale.multiplyScalar(1.0 / maxAxis);
    }

    const getPosition = (scene: typeof gltf.scene) => {
        const bbox = new THREE.Box3().setFromObject(scene);
        const cent = bbox.getCenter(new THREE.Vector3());
        const size = bbox.getSize(new THREE.Vector3());

        const pos = cent.multiplyScalar(-1);
        pos.y -= (size.y * 0.5);

        return pos;
    }

    return (
        <mesh scale={getScale(gltf.scene)} >
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
                <Canvas
                    className="canvas-model-preview"
                >
                    <CameraController />
                    <ambientLight />
                    <spotLight intensity={0.3} position={[5, 10, 50]} />
                    <directionalLight intensity={0.4} />
                    <Model modelURL={props.modelURL} position={[0, 0, 0]} />
                    <primitive object={new THREE.AxesHelper(10)} />
                </Canvas>
            </div>
            <div className="model-info">
                {

                }
            </div>
        </div>
    );
};

export default FilePreview;