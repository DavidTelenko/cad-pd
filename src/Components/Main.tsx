import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import Home, { HomeProperties } from "./Home";
import IndexedDB from 'localforage';

import "../Styles/FileUploadForm.css";

const Main = (props: HomeProperties) => {
    return (
        <div>
            <Home pathName={props.pathName} />
            <Link to="/model-uploader" style={{ textDecoration: 'none' }}>
                <Button variant="contained" component="label"
                    onClick={() => IndexedDB.clear()}>
                    Let's start!
                </Button>
            </Link>
        </div>
    );
}

export default Main;