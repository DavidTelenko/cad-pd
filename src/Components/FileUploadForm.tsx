import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home, { HomeProperties } from "./Home";

import "../Styles/FileUploadForm.css";

const FileUploadForm = (props: HomeProperties) => {
    const [file, setFile] = useState<string[]>();
    const [link, setLink] = useState<string[]>();

    return (
        <div className="fileUploadForm">
            <Home pathName={props.pathName} />
            <input className="int-uploader upload"
                type="file"
                placeholder="Upload file"
            />
            <input className="int-uploader upload"
                type="text"
                placeholder="Enter a link"
            />
            <Link to="/marker-uploader">
                <button className="upload upload-button">Add marker</button>
            </Link>
        </div >
    );
}

export default FileUploadForm;