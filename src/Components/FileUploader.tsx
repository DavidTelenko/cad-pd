import { ChangeEvent, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
// import AddLinkIcon from "@mui/icons-material/AddLink";
// import FileUploadIcon from "@mui/icons-material/FileUpload";

const useStyles = makeStyles({
  root: {
    width: "90%",
  },
  margin: {
    margin: "5px",
  },
});

type FileUploaderProps = {
  selectedFile: File | undefined;
  selectedLink: string | undefined;
  changeHandler: (event: ChangeEvent) => void;
  linkHandler: (event: ChangeEvent) => void;
};

const FileUploader = ({
  selectedFile,
  selectedLink,
  changeHandler,
  linkHandler,
}: FileUploaderProps) => {
  const classes = useStyles();

  const [value, setValue] = useState<number | number[]>(2.5);

  const onSliderChange = (value: number | number[]) => {
    setValue(value);
  };

  return (
    <>
      <div className="FileUploader">
        {selectedLink ? <></> :
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">
              Upload GLTF/GLB file
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              type="file"
              name="file"
              onChange={(event) => changeHandler(event)}
              startAdornment={
                <InputAdornment position="start">
                  {/* <FileUploadIcon /> */}
                </InputAdornment>
              }
              placeholder="No file was chosen"
              inputProps={{ accept: ".gltf,.glb", readOnly: true }}
            />
          </FormControl>}
        {selectedFile ? <></> :
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">
              Enter valid GLTF/GLB link
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  {/* <AddLinkIcon /> */}
                </InputAdornment>
              }
              inputProps={{
                pattern: ".+.gltf|.+.glb",
              }}
              onChange={linkHandler}
            />
          </FormControl>}
        <div className={classes.root}>
          <div>{`Scale ${value}`}</div>
          <Slider
            defaultValue={2.5}
            aria-labelledby="discrete-slider-small-steps"
            step={0.05}
            min={0.05}
            max={4.95}
            valueLabelDisplay="auto"
            onChange={(_event, value) => onSliderChange(value)}
          />
        </div>
        <Link to="/modeler" onClick={() => console.log(selectedFile)}>
          <Button variant="contained" color="primary">
            Continue
          </Button>
        </Link>
      </div>
    </>
  );
};

export default FileUploader;
