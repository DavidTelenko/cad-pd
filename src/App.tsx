import React from 'react';
import DecVert from './Components/DecVert';
import FileUploadForm from './Components/FileUploadForm';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import './Styles/App.css';
import Main from './Components/Main';
import CadAr from './Components/CadAr';
import MarkerUploader from './Components/MarkerUploader';

function App() {
  return (
    <div className="App">
      <DecVert classNameProp='decVert' />
      <DecVert classNameProp='decHor' />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main pathName="Home" />} />
          <Route path="/model-uploader" element={<FileUploadForm pathName="Model uploader" />} />
          <Route path="/marker-uploader" element={<MarkerUploader pathName="Marker uploader" />} />
          <Route path="/cad-ar" element={<CadAr />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
