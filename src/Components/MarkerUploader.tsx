import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../Styles/FileUploadForm.css";
import Home, { HomeProperties } from "./Home";

const MarkerUploader = (props: HomeProperties) => {
    const [marker, setMarker] = useState<string[]>();

    return (
        <div className="fileUploadForm">
            <Home pathName={props.pathName} />
            <input className="int-uploader upload" type="file" placeholder="Upload file" />
            <Link to="/cad-ar">
                <button className="upload upload-button">Im Ok</button>
            </Link>
            <Link to="/model-uploader">
                <button className="upload upload-button">Add another model</button>
            </Link>
        </div>
    );
}

export default MarkerUploader;