import React, { ReactNode, useState } from "react";
import { Link, To } from "react-router-dom";
import Home, { HomeProperties } from "./Home";
import { pushItem } from "../util/pushItem";
import FileChooser from "./FileChooser";
import { encodeImageURL } from "../util/makeMarker";

import { Button, Slider } from '@mui/material';
import {
    Image as ImageIcon,
    Add as AddIcon,
    Visibility as EyeIcon
} from '@mui/icons-material';

import "../Styles/FileUploadForm.css";
import MarkerPreview from "./MarkerPreview";

interface Marker {
    marker: Blob,
    url?: string,
};

const MarkerUploaderButton = (props: {
    linkTo: To,
    marker?: File,
    preview?: string,
    children?: ReactNode
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

        const url = URL.createObjectURL(props.marker);

        encodeImageURL(url, onLoad);
        if (props.preview) pushItem("marker-previews", props.preview);
    };

    return (
        <Link className="button-link" to={props.linkTo}>
            <Button className="inp upload upload-button"
                variant="contained"
                disabled={!props.marker}
                onClick={onMarkerAdd}>
                {props.children}
            </Button>
        </Link>
    );
};

const MarkerUploader = (props: HomeProperties) => {
    const [marker, setMarker] = useState<File>();
    const [ratio, setRatio] = useState(0.5);
    const [preview, setPreview] = useState<string>();

    const ratioSliderOnChange = (_: Event, newValue: number | number[]) => {
        setRatio(newValue as number);
    };

    return (
        <div className="file-upload-form">
            <Home pathName={props.pathName} />
            {marker &&
                <MarkerPreview
                    setPreview={setPreview}
                    innerImageURL={URL.createObjectURL(marker)}
                    color="#000000"
                    ratio={ratio} />
            }
            <FileChooser
                tooltip=".png/.jpg/.jpeg"
                accept=".png, .jpg, .jpeg" // TODO .patt, 
                onChange={(e) => {
                    e.preventDefault();
                    setMarker(e.target.files?.item(0) || undefined);
                }}
            >
                <ImageIcon />
            </FileChooser>
            {marker &&
                <Slider className="cadar-slider"
                    defaultValue={0.5}
                    min={0.1}
                    max={0.9}
                    step={0.01}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    onChange={ratioSliderOnChange}
                />
            }
            <MarkerUploaderButton
                linkTo="/model-uploader"
                marker={marker}
                preview={preview}>
                <AddIcon />
            </MarkerUploaderButton>

            <MarkerUploaderButton
                linkTo="/files-preview"
                marker={marker}
                preview={preview}>
                <EyeIcon />
            </MarkerUploaderButton>
        </div>
    );
};

export default MarkerUploader;