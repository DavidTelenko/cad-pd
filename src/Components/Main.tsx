import React from "react";
import { Link } from "react-router-dom";

import "../Styles/FileUploadForm.css";

const Main = () => {
    return <Link to="/fileuploader">
    <button className="upload upload-button">Let's start!</button>
    </Link>
}

export default Main;