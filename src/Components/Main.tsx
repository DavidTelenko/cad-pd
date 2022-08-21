import { Link } from "react-router-dom";
import Home, { HomeProperties } from "./Home";
import IndexedDB from "localforage";

import { Button } from "@mui/material";
import { ViewInAr as ViewInArIcon } from "@mui/icons-material";

import "../Styles/FileUploadForm.css";
import "../Styles/Inputs.css";

const Main = (props: HomeProperties) => {
    return (
        <div className="file-upload-form main">
            <Home pathName={props.pathName} />
            <Link className="button-link" to="/model-uploader">
                <Button variant="contained"
                    className="upload upload-button inp"
                    id="common-button"
                    color="primary"
                    onClick={() => IndexedDB.clear()}>
                    <ViewInArIcon />
                </Button>
            </Link>
            <Link className="button-link" to="/files-preview">
                <Button className="inp preview-button"
                    variant="outlined">
                    See all files
                </Button>
            </Link>
        </div>
    );
}

export default Main;