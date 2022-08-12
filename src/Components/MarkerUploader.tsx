import React, { useState } from "react";
import { Link, To } from "react-router-dom";

import "../Styles/FileUploadForm.css";
import Home, { HomeProperties } from "./Home";
import pushItem from "../util/pushItem";
import { Slider } from '@mui/material';
import FileChooser from "./FileChooser";

const MarkerUploaderButton = (props: {
    message: string,
    linkTo: To,
    marker: File | null | undefined
}) => {
    const onMarkerAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        pushItem("markers", {
            picture: /*zip -> */props.marker,
            // marker: makeMarker(props.marker)
        });
    };

    return (
        <Link to={props.linkTo}>
            <button className="upload upload-button"
                disabled={!props.marker}
                onClick={onMarkerAdd}>
                {props.message}
            </button>
        </Link>
    );
};

const MarkerUploader = (props: HomeProperties) => {
    const [marker, setMarker] = useState<File | null | undefined>(null);

    return (
        <div className="file-upload-form">
            <Home pathName={props.pathName} />
            {marker &&
                <img className="marker-preview"
                    src={URL.createObjectURL(marker)}
                    alt=""
                />
            }
            <FileChooser
                hint="Upload Marker"
                accept=".patt, .png, .jpg, .jpeg"
                onChange={(e) => {
                    e.preventDefault();
                    setMarker(e.target.files?.item(0));
                }}
            />
            Pattern Ratio
            <Slider defaultValue={0.5}
                min={0.1}
                max={0.9}
                step={0.01}
                aria-label="Default"
                valueLabelDisplay="auto"
            />
            <MarkerUploaderButton message="I'm Ok"
                linkTo="/cad-ar"
                marker={marker} />
            <MarkerUploaderButton message="Add another model"
                linkTo="/model-uploader"
                marker={marker} />
        </div>
    );
};

export default MarkerUploader;