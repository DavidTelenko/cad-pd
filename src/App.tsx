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
import MarkersUploader from './Components/MarkersUploader';

function App() {
  return (
    <div className="App">
      <DecVert classNameProp='decVert' />
      <DecVert classNameProp='decHor' />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/model-uploader" element={<FileUploadForm />} />
          <Route path="/marker-uploader" element={<MarkersUploader />} />
          <Route path="/cad-ar" element={<CadAr />} />
          <Route path="/continue-or-repeat" element={<CadAr />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
