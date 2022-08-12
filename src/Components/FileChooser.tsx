import { Button } from '@mui/material';

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
{ hint: string }

const FileChooser = (props: InputProps) => (
    <Button variant="contained" component="label">
        {props.hint}
        <input hidden
            type="file"
            {...props} />
    </Button>
);

export default FileChooser;