import { useState } from "react";
import { buildFullMarker } from "../util/makeMarker";

interface MarkerPreviewProps {
    innerImageURL: string,
    ratio: number,
    color?: string | CanvasGradient | CanvasPattern
}

const MarkerPreview = (props: MarkerPreviewProps) => {
    const [url, setUrl] = useState<string>("");

    buildFullMarker(props.innerImageURL, props.ratio,
        720, props.color ?? "#000000",
        (generated: string) => {
            setUrl(generated);
        });

    return (
        <img className="marker-preview"
            src={url}
            alt="marker"
        />
    );
};

export default MarkerPreview;