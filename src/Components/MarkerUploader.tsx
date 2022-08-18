import React, { useEffect, useState } from "react";
import { Link, To } from "react-router-dom";
import Home, { HomeProperties } from "./Home";
import pushItem from "../util/pushItem";
import { Button, Slider } from '@mui/material';
import FileChooser from "./FileChooser";
import { encodeImageURL } from "../util/makeMarker";
// import { encodeImage } from "../util/makeMarker";

import "../Styles/FileUploadForm.css";

interface Marker {
    // picture?: File,
    marker?: Blob,
    url?: string,
};

const MarkerUploaderButton = (props: {
    message: string,
    linkTo: To,
    marker?: File
}) => {
    const onMarkerAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.marker) {
            encodeImageURL(URL.createObjectURL(props.marker), (data: string) => {
                const obj: Marker = {
                    marker: props.marker,
                    // url: URL.createObjectURL(props.marker),
                };
                // obj.marker = new Blob(
                //     [encoded], {
                //     type: "text/plain",
                // });
                // obj.url = URL.createObjectURL(obj.marker);
            });

            // pushItem("markers", obj);
            return;
        }
        pushItem("markers", null);
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

// const getFile = (pattText: string) => {
//     // const len = pattText.length;
//     // const array = new Uint8Array(len);
//     // for (let i = 0; i < len; i++) {
//     //     array[i] = pattText.charCodeAt(i);
//     // }
//     const file = new Blob([pattText], {
//         type: "text/plain",
//     });

//     return file;
// }

const MarkerUploader = (props: HomeProperties) => {
    const [marker, setMarker] = useState<File | undefined>(undefined);
    // const [pattText, setPattText] = useState<string>();

    // useEffect(() => {
    //     const setPattFileText = async () => {
    //         if (marker) {
    //             // setPattText(encodeImage(await getImageData(URL.createObjectURL(marker))));
    //             setPattText(encodeImage(URL.createObjectURL(marker)));
    //         }
    //     }
    //     setPattFileText();
    // }, [marker]);

    // useEffect(() => {
    //     if (pattText) {
    //         console.log("Patt string was generated successfully!", pattText);
    //         pushItem("patts", getFile(pattText));
    //     }
    // }, [pattText]);

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
                    setMarker(e.target.files?.item(0) || undefined);
                }}
            />
            {/* Pattern Ratio
            <Slider defaultValue={0.5}
                min={0.1}
                max={0.9}
                step={0.01}
                aria-label="Default"
                valueLabelDisplay="auto"
            /> */}
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