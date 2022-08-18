import { Button } from '@mui/material';

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
{ hint: string, disabled?: boolean }

const FileChooser = (props: InputProps) => (
    <Button
        variant="contained"
        component="label"
        disabled={props.disabled}
        className="common-button inp"
        id="common-button"
    >
        {props.hint}
        <input hidden
            type="file"
            {...props} />
    </Button>
);

export default FileChooser;