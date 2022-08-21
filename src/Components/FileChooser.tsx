import React, { ReactNode } from "react";
import { Button, Tooltip } from "@mui/material";

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
        disabled?: boolean,
        children?: ReactNode,
        tooltip?: string
    }

const FileChooser = (props: InputProps) => {
    const { children, disabled, tooltip, ...rest } = props;

    return (
        <Tooltip title={tooltip ?? ""} hidden={!tooltip}>
            <Button
                variant="contained"
                component="label"
                disabled={disabled}
                className="common-button inp"
                id="common-button"
            >
                {children}
                <input hidden type="file" {...rest} />
            </Button>
        </Tooltip>
    );
};

export default FileChooser;