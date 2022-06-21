import { ChangeEvent, FC, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
// import AddLinkIcon from "@mui/icons-material/AddLink";

const useStyles = makeStyles({
  root: {
    width: 550,
  },
  margin: {
    // margin: theme.spacing(1),
  },
});

const valuetext = (value: number): string => {
  return `${value}°C`;
};

const FileUploader: FC = () => {
  const classes = useStyles();

  const [selectedFile, setSelectedFile] = useState<File>();
  const [value, setValue] = useState<number | number[]>(2.5);

  const changeHandler = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.files) setSelectedFile(target.files[0]);
    console.log(selectedFile);
  };

  const onSliderChange = (value: number | number[]) => {
    // const target = e.target as HTMLInputElement;
    setValue(value);
  };

  const handleSubmission = () => {};

  return (
    <>
      <div className="FileUploader">
        <input
          type="file"
          name="file"
          onChange={(e) => changeHandler(e)}
          accept=".gltf,.glb"
        />
        {selectedFile ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate: {selectedFile.lastModified.toLocaleString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="input-with-icon-adornment">
            With a start adornment
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                {/* <AddLinkIcon /> */}
              </InputAdornment>
            }
          />
        </FormControl>
        <div className="form-group py-3" v-if="!$store.sharedModelFile">
          <label className="form-label">
            <i className="fas fa-link"></i> GLTF/GLB Link
          </label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                .gltf
              </span>
            </div>
            <input
              className="form-control input-group"
              v-model="$store.sharedModelLink"
              placeholder="Link"
              pattern=".+\.gltf|.+\.glb"
              type="input"
            />
          </div>
        </div>
        <div className={classes.root}>
          <div>{`Scale ${value}`}</div>
          <Slider
            defaultValue={2.5}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-small-steps"
            step={0.05}
            min={0.05}
            max={4.95}
            valueLabelDisplay="auto"
            onChange={(event, value) => onSliderChange(value)}
          />
        </div>
        <Button variant="contained" color="primary">
          Continue
        </Button>
      </div>
    </>
  );
};

export default FileUploader;
