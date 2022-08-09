import React from "react";
import { Link } from "react-router-dom";

import "../Styles/FileUploadForm.css";

const MarkersUploader = () => {
    return (
        <div className="fileUploadForm">
            <header className="App-header">
                CAD-AR / Marker upload
            </header>
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

export default MarkersUploader;