import React from "react";
import { Link } from "react-router-dom";

import "../Styles/FileUploadForm.css";

const FileUploadForm = () => {
    return (
        <div className="fileUploadForm">
            <header className="App-header">
                CAD-AR / Model upload
            </header>
            <input className="int-uploader upload"
                type="file"
                placeholder="Upload file"

            />
            <input className="int-uploader upload"
                type="text"
                placeholder="Enter a link"
            />
            <Link to="/marker-uploader">
                <button className="upload upload-button">Let's go</button>
            </Link>
        </div>
    );
}

export default FileUploadForm;