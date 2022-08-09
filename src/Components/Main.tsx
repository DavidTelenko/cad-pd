import React from "react";
import { Link } from "react-router-dom";
import Home, { HomeProperties } from "./Home";

import "../Styles/FileUploadForm.css";

const Main = (props: HomeProperties) => {
    return (
        <div>
            <Home pathName={props.pathName} />
            <Link to="/model-uploader">
                <button className="upload upload-button">Let's start!</button>
            </Link>
        </div>
    );
}

export default Main;