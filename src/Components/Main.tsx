import React from "react";
import { Link } from "react-router-dom";

import "../Styles/FileUploadForm.css";

const Main = () => {
    return (
        <div>
            <header className="App-header">
                CAD-AR / Let's start
            </header>
            <Link to="/model-uploader">
                <button className="upload upload-button">Let's start!</button>
            </Link>
        </div>
    );
}

export default Main;