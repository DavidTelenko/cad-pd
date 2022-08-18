import React, { useEffect, useState } from "react";
import { Link, To } from "react-router-dom";
import Home, { HomeProperties } from "./Home";
import { pushItem } from "../util/pushItem";
import { Button, Slider } from '@mui/material';
import FileChooser from "./FileChooser";
import { encodeImageURL } from "../util/makeMarker";

import "../Styles/FileUploadForm.css";
import MarkerPreview from "./MarkerPreview";

interface Marker {
    marker: Blob,
    url?: string,
};

const MarkerUploaderButton = (props: {
    message: string,
    linkTo: To,
    marker?: File
}) => {
    const onMarkerAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!props.marker) {
            pushItem("markers", null);
            return;
        }

        const onLoad = (encoded: string) => {
            const obj: Marker = {
                marker: new Blob([encoded], {
                    type: "text/plain",
                })
            };
            obj.url = URL.createObjectURL(obj.marker);
            pushItem("markers", obj);
        }

        encodeImageURL(URL.createObjectURL(props.marker), onLoad);
    };

    return (
        <Link className="button-link" to={props.linkTo}>
            <Button className="inp upload upload-button"
                variant="contained"
                disabled={!props.marker}
                onClick={onMarkerAdd}>
                {props.message}
            </Button>
        </Link>
    );
};

const MarkerUploader = (props: HomeProperties) => {
    const [marker, setMarker] = useState<File | undefined>(undefined);
    const [ratio, setRatio] = useState(0.5);

    const ratioSliderOnChange = (_: Event, newValue: number | number[]) => {
        setRatio(newValue as number);
    };

    return (
        <div className="file-upload-form">
            <Home pathName={props.pathName} />
            {marker && <MarkerPreview
                innerImageURL={URL.createObjectURL(marker)}
                color="#000000"
                ratio={ratio} />
            }
            <FileChooser
                hint="Upload Marker"
                accept=".patt, .png, .jpg, .jpeg"
                onChange={(e) => {
                    e.preventDefault();
                    setMarker(e.target.files?.item(0) || undefined);
                }}
            />
            {marker &&
                <>
                    Pattern Ratio
                    <Slider className="cadar-slider"
                        defaultValue={0.5}
                        min={0.1}
                        max={0.9}
                        step={0.01}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        onChange={ratioSliderOnChange}
                    />
                </>
            }
            <MarkerUploaderButton message="Let's CAD-AR"
                linkTo="/cad-ar"
                marker={marker} />
            <MarkerUploaderButton message="Add another model"
                linkTo="/model-uploader"
                marker={marker} />
        </div>
    );
};

export default MarkerUploader;