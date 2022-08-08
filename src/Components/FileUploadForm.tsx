import React from "react";
import { Link } from "react-router-dom";

import "../Styles/FileUploadForm.css";

const FileUploadForm = () => {
    return (
    <div className="fileUploadForm">
        <input className="int-uplloader upload" type="file" placeholder="Upload file"/>
        <input className="int-uplloader upload" type="text" placeholder="Enter a link"/>
        <Link to="/markeruploader"><button className="upload upload-button">Lets go</button></Link>
    </div>
    );
}

export default FileUploadForm;