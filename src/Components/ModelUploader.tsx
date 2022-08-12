import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home, { HomeProperties } from "./Home"
import Slider from '@mui/material/Slider'

import pushItem from "../util/pushItem";

import "../Styles/FileUploadForm.css";
import FileChooser from "./FileChooser";

const ModelUploader = (props: HomeProperties) => {
    const [model, setModel] = useState<File | null | undefined>(null);
    const [link, setLink] = useState<string | null | undefined>(null);
    const [scale, setScale] = useState<number>(1.0);

    const onModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setModel(e.target.files?.item(0));
    };

    const onLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setLink(e.target.value);
    };

    const onAddModel = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (model) {
            pushItem("models", model);
            pushItem("links", URL.createObjectURL(model)); // FIXME rel path is a lie
        }
        else {
            pushItem("links", link);
            pushItem("models", null);
        }
        pushItem("scales", scale);
    };

    const scaleSliderOnChange = (_: Event, newValue: number | number[]) => {
        setScale(newValue as number);
    };

    return (
        <div className="file-upload-form">
            <Home pathName={props.pathName} />
            <div className="input-area">
                <FileChooser
                    hint="Upload model file"
                    accept=".gltf, .txt"
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
            </div>
            <Slider defaultValue={0.5}
                min={0.1}
                max={1.0}
                step={0.01}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={scaleSliderOnChange}
            />
            <Link to="/marker-uploader">
                <button className="upload upload-button"
                    disabled={!model && !link}
                    onClick={onAddModel}>
                    Add model
                </button>
            </Link>
        </div>
    );
}

export default ModelUploader;