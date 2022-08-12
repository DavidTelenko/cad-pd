import React, { useState } from "react";
import { Link, To } from "react-router-dom";

import "../Styles/FileUploadForm.css";
import Home, { HomeProperties } from "./Home";
import pushItem from "../util/pushItem";
import IndexedDB from 'localforage';

const MarkerUploaderButton = (props: {
    message: string, linkTo: To,
    marker: File | null | undefined
}) => {
    return (
        <Link to={props.linkTo}>
            <button className="upload upload-button"
                disabled={!props.marker}
                onClick={async (e) => {

                }}>
                {props.message}
            </button>
        </Link>
    );
};

const MarkerUploader = (props: HomeProperties) => {
    const [marker, setMarker] = useState<File | null | undefined>(null);

    return (
        <div className="fileUploadForm">
            <Home pathName={props.pathName} />
            <input className="int-uploader upload"
                type="file"
                accept=".patt, .txt"
                placeholder="Upload marker"
                onChange={(e) => {
                    e.preventDefault();
                    setMarker(e.target.files?.item(0));
                }}
            />
            <MarkerUploaderButton message="I'm Ok"
                linkTo="/cad-ar"
                marker={marker} />
            <MarkerUploaderButton message="Add another model"
                linkTo="/model-uploader"
                marker={marker} />
        </div>
    );
}

export default MarkerUploader;