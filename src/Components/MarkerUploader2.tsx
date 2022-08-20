// import React, { useEffect, useState } from "react";
// import { Link, To } from "react-router-dom";
// import Home, { HomeProperties } from "./Home";
// import { pushItem } from "../util/pushItem";
// import { Button, Slider, TextField } from '@mui/material';
// import FileChooser from "./FileChooser";
// import { encodeImageURL } from "../util/makeMarker";

// import "../Styles/FileUploadForm.css";
// import MarkerPreview from "./MarkerPreview";

// interface Marker {
//     marker: Blob,
//     url?: string,
// };

// const MarkerUploaderButton = (props: {
//     message: string,
//     linkTo: To,
//     marker?: File | string,
// }) => {
//     const onMarkerAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//         if (!props.marker) {
//             pushItem("markers", null);
//             return;
//         }

//         const onLoad = (encoded: string) => {
//             const obj: Marker = {
//                 marker: new Blob([encoded], {
//                     type: "text/plain",
//                 })
//             };
//             obj.url = URL.createObjectURL(obj.marker);
//             pushItem("markers", obj);
//         }

//         const url = typeof props.marker == "string"
//             ? props.marker
//             : URL.createObjectURL(props.marker);

//         encodeImageURL(url, onLoad);
//     };

//     return (
//         <Link className="button-link" to={props.linkTo}>
//             <Button className="inp upload upload-button"
//                 variant="contained"
//                 disabled={!props.marker}
//                 onClick={onMarkerAdd}>
//                 {props.message}
//             </Button>
//         </Link>
//     );
// };

// const MarkerUploader = (props: HomeProperties) => {
//     const [marker, setMarker] = useState<File | undefined>();
//     const [ratio, setRatio] = useState(0.5);
//     const [link, setLink] = useState<string | undefined>();
//     const [isLinkCorrect, setIsLinkCorrect] = useState<boolean>(true);

//     const ratioSliderOnChange = (_: Event, newValue: number | number[]) => {
//         setRatio(newValue as number);
//     };

//     const onLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         e.preventDefault();
//         const link = e.target.value;
//         const linkPatt = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$/gm;
//         setLink(link);
//         setIsLinkCorrect(linkPatt.test(link));
//     };

//     return (
//         <div className="file-upload-form">
//             <Home pathName={props.pathName} />
//             {(marker || link) &&
//                 <MarkerPreview
//                     innerImageURL={marker
//                         ? URL.createObjectURL(marker)
//                         : (link ?? "")}
//                     color="#000000"
//                     ratio={ratio} />
//             }
//             {!link && <FileChooser
//                 hint="Upload Marker"
//                 accept=".png, .jpg, .jpeg" // TODO .patt, 
//                 disabled={!!link} // fixme?
//                 onChange={(e) => {
//                     e.preventDefault();
//                     setMarker(e.target.files?.item(0) || undefined);
//                 }}
//             />
//             }
//             {!link && !marker && "or"}
//             {!marker &&
//                 <TextField
//                     id="outlined-error-helper-text"
//                     className="outlined-error-helper-text inp"
//                     color="primary"
//                     type="text"
//                     error={!isLinkCorrect}
//                     disabled={!!marker}
//                     label="Link to Image File"
//                     placeholder="Enter a link here..."
//                     helperText={!isLinkCorrect ? "This link is not valid" : ""}
//                     onChange={onLinkChange}
//                 />
//             }
//             {(marker || link) &&
//                 <>
//                     Pattern Ratio
//                     <Slider className="cadar-slider"
//                         defaultValue={0.5}
//                         min={0.1}
//                         max={0.9}
//                         step={0.01}
//                         aria-label="Default"
//                         valueLabelDisplay="auto"
//                         onChange={ratioSliderOnChange}
//                     />
//                 </>
//             }
//             <MarkerUploaderButton message="Let's CAD-AR"
//                 linkTo="/cad-ar"
//                 marker={marker ?? link} />
//             <MarkerUploaderButton message="Add another model"
//                 linkTo="/model-uploader"
//                 marker={marker ?? link} />
//         </div>
//     );
// };

// export default MarkerUploader;
export {};