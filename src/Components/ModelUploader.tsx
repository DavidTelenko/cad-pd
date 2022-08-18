import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home, { HomeProperties } from "./Home"
import { Slider, TextField } from '@mui/material'

import pushItem from "../util/pushItem";

import "../Styles/FileUploadForm.css";
import FileChooser from "./FileChooser";
import { Button } from "@mui/material";

const ModelUploader = (props: HomeProperties) => {
    const [model, setModel] = useState<File | null | undefined>(null);
    const [link, setLink] = useState<string | null | undefined>(null);
    const [scale, setScale] = useState<number>(1.0);
    const [isLinkCorrect, setIsLinkCorrect] = useState<boolean>(true);

    const onModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setModel(e.target.files?.item(0));
    };

    const onLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const link: string = e.target.value;
        const linkPatt: RegExp = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$/gm;
        setLink(link);
        setIsLinkCorrect(linkPatt.test(link));
    };

    const onAddModel = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (model) {
            pushItem("models", model);
            pushItem("links", URL.createObjectURL(model));
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
                    hint="Upload .GLTF model"
                    disabled={!!link}
                    accept=".gltf, .txt"
                    onChange={onModelChange}
                />
                or
                <TextField
                    id="outlined-error-helper-text"
                    className="outlined-error-helper-text inp"
                    color="primary"
                    type="text"
                    error={!isLinkCorrect}
                    disabled={!!model}
                    label="Link to GLTF File"
                    placeholder="Enter a link here..."
                    helperText={!isLinkCorrect ? "This link is not valid" : ""}
                    onChange={onLinkChange}
                />
            </div>
            {/* <Slider defaultValue={0.5}
                min={0.1}
                max={1.0}
                step={0.01}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={scaleSliderOnChange}
            /> */}
            <Link className="button-link" to="/marker-uploader">
                <Button className="inp button-link"
                    variant="contained"
                    disabled={!model && !link}
                    onClick={onAddModel}>
                    Add model
                </Button>
            </Link>
        </div>
    );
}

export default ModelUploader;