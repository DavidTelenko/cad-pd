import { Link } from "react-router-dom";
import Home, { HomeProperties } from "./Home";

import { Button } from "@mui/material";

import "../Styles/FileUploadForm.css";
import "../Styles/Inputs.css";

const Main = (props: HomeProperties) => {
    return (
        <div>
            <Home pathName={props.pathName} />

            <Link className="button-link" to="/model-uploader">
                <Button variant="contained" className="upload upload-button inp" id="common-button" color="primary">
                    Let's CAD-AR!
                </Button>
            </Link>

        </div>
    );
}

export default Main;