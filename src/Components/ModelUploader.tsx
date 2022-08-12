import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home, { HomeProperties } from "./Home"

import IndexedDB from "localforage";
import pushItem from "../util/pushItem";

import "../Styles/FileUploadForm.css";

const ModelUploader = (props: HomeProperties) => {
    const [model, setModel] = useState<File | null | undefined>(null);
    const [link, setLink] = useState<string | null | undefined>(null);

    const onModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setModel(e.target.files?.item(0));
    };

    const onLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setLink(e.target.value);
    };

    return (
        <div className="fileUploadForm">
            <Home pathName={props.pathName} />
            <input className="int-uploader upload"
                type="file"
                accept=".gltf, .txt"
                placeholder="Upload model file"
                disabled={!!link}
                onChange={onModelChange}
            />
            or
            <input className="int-uploader upload"
                type="text"
                placeholder="Enter link"
                disabled={!!model}
                onChange={onLinkChange}
            />
            <Link to="/marker-uploader">
                <button className="upload upload-button"
                    disabled={!model && !link}
                    onClick={async (e) => {
                    }}>
                    Add model
                </button>
            </Link>
        </div>
    );
}

export default ModelUploader;