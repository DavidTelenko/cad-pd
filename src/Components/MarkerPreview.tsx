import { useEffect, useState } from "react";
import { buildFullMarker } from "../util/makeMarker";
import { pushItem } from "../util/pushItem";

interface MarkerPreviewProps {
    innerImageURL: string,
    ratio: number,
    color?: string | CanvasGradient | CanvasPattern,
    setPreview: React.Dispatch<React.SetStateAction<string | undefined>>
}

const MarkerPreview = (props: MarkerPreviewProps) => {
    const [url, setUrl] = useState<string>("");

    useEffect(() => {
        buildFullMarker(props.innerImageURL, props.ratio,
            720, props.color ?? "#000000",
            (generated: string) => {
                setUrl(generated);
                props.setPreview(generated);
            });
    }, [props])

    return (
        <img className="marker-preview"
            src={url}
            alt="marker"
        />
    );
};

export default MarkerPreview;