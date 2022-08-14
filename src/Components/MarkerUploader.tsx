import React, { useEffect, useState } from "react";
import { Link, To } from "react-router-dom";
import Home, { HomeProperties } from "./Home";
import pushItem from "../util/pushItem";
import { Slider } from '@mui/material';
import FileChooser from "./FileChooser";
import { encodeImage } from "../util/makeMarker";

import "../Styles/FileUploadForm.css";

const MarkerUploaderButton = (props: {
    message: string,
    linkTo: To,
    marker: File | null | undefined,
    disabled?: boolean,
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
                disabled={!props.marker || props.disabled}
                onClick={onMarkerAdd}>
                {props.message}
            </button>
        </Link>
    );
};

const getFile = (pattText: string) => {
    // const len = pattText.length;
    // const array = new Uint8Array(len);
    // for (let i = 0; i < len; i++) {
    //     array[i] = pattText.charCodeAt(i);
    // }
    const file = new Blob([pattText], {
        type: "text/plain",
    });

    return file;
}

const MarkerUploader = (props: HomeProperties) => {
    const [marker, setMarker] = useState<File | null | undefined>(null);
    const [pattText, setPattText] = useState<string>();

    useEffect(() => {
        const setPattFileText = async () => {
            if (marker) {
                // setPattText(encodeImage(await getImageData(URL.createObjectURL(marker))));
                setPattText(encodeImage(URL.createObjectURL(marker)));
            }
        }
        setPattFileText();
    }, [marker]);

    useEffect(() => {
        if (pattText) {
            console.log("Patt string was generated successfully!", pattText);
            pushItem("patts", getFile(pattText));
        }
    }, [pattText]);

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
                marker={marker}
                disabled={!pattText} />
            <MarkerUploaderButton message="Add another model"
                linkTo="/model-uploader"
                marker={marker} />
        </div>
    );
};

export default MarkerUploader;