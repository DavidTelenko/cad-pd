import { Button } from "@mui/material";
import indexedDB from "localforage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home, { HomeProperties } from "../Home";
import FilePreview from "./FilePreview";
import { ViewInAr as ViewInArIcon } from '@mui/icons-material';

const FilesPreview = (props: HomeProperties) => {
    const [markerURLs, setMarkerURLs] = useState<string[]>([]);
    const [modelURLs, setModelURLs] = useState<string[]>([]);

    useEffect(() => {
        indexedDB.getItem("marker-previews", (err, val: string[] | null) => {
            if (!err && val) setMarkerURLs(val);
        });
        indexedDB.getItem("links", (err, val: string[] | null) => {
            if (!err && val) setModelURLs(val);
        });
    }, [])

    return (
        <div>
            <Home pathName={props.pathName} />
            {markerURLs && modelURLs && markerURLs.map((e, i) => {
                return (
                    <FilePreview
                        key={i}
                        markerURL={e}
                        modelURL={modelURLs[i]} />
                );
            })}
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