import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";

import "../Styles/CadAr.css";

const CadAr = () => {
    return (<ARCanvas
        className="canvas"
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
        {/* <ARMarker type={"barcode"} value={"6"}>
          <mesh>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={"green"} />
          </mesh>
        </ARMarker> */}
    </ARCanvas>);
}

export default CadAr;