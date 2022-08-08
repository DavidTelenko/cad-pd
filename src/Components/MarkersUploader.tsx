import React from "react";
import { Link } from "react-router-dom";

import "../Styles/FileUploadForm.css";

const MarkersUploader = () => {
    return (
    <div className="fileUploadForm">
        <input className="int-uplloader upload" type="file" placeholder="Upload file"/>
        <Link to="/cadar"><button className="upload upload-button">Lets go</button></Link>
    </div>
    );
}

export default MarkersUploader;