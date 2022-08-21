import { Button } from "@mui/material";
import indexedDB from "localforage";
import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import Home, { HomeProperties } from "../Home";
import FilePreview from "./FilePreview";
import { ViewInAr as ViewInArIcon } from "@mui/icons-material";

import "../../Styles/modelPreview.css";

const FilesPreview = (props: HomeProperties) => {
    const [markerURLs, setMarkerURLs] = useState<string[]>();
    const [modelURLs, setModelURLs] = useState<string[]>();

    useEffect(() => {
        (async () => {
            indexedDB.getItem("marker-previews",
                (err, val: string[] | null) => {
                    if (!err && val) setMarkerURLs(val);
                });
            indexedDB.getItem("models",
                (err, val: (File | string)[] | null) => {
                    if (!err && val) setModelURLs(val.map((e) =>
                        typeof e === "string"
                            ? e
                            : URL.createObjectURL(e)));
                });
        })();
        console.log(markerURLs, modelURLs);
    }, modelURLs && markerURLs && [])

    return (
        <div className="files-preview-container">
            <Home pathName={props.pathName} />
            <div className="files-preview">
                {markerURLs && modelURLs && markerURLs.map((e, i) => {
                    return (
                        <FilePreview
                            key={i}
                            markerURL={e}
                            modelURL={modelURLs[i]} />
                    );
                })}
            </div>
            <Link className="button-link" to="/cad-ar">
                <Button className="inp upload upload-button"
                    variant="contained"
                    disabled={!markerURLs || !modelURLs}>
                    <ViewInArIcon />
                </Button>
            </Link>
        </div>
    );
};

export default FilesPreview;