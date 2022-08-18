import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import Home, { HomeProperties } from "./Home";
import IndexedDB from 'localforage';

import "../Styles/FileUploadForm.css";
import "../Styles/Inputs.css";

const Main = (props: HomeProperties) => {
    return (
        <div>
            <Home pathName={props.pathName} />
            <Link className="button-link" to="/model-uploader">
                <Button variant="contained"
                    className="upload upload-button inp"
                    id="common-button"
                    color="primary"
                    onClick={() => IndexedDB.clear()}>
                    Let's CAD-AR!
                </Button>
            </Link>
        </div>
    );
}

export default Main;