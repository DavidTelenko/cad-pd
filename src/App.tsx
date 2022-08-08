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
      <header className="App-header">
          CAD-AR {'>'} Upload Files
      </header>
      {/* <FileUploadForm/> */}
      <DecVert classNameProp='decVert'/>
      <DecVert classNameProp='decHor'/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/fileuploader" element={<FileUploadForm />} />
          <Route path="/markeruploader" element={<MarkersUploader />} />
          <Route path="/cadar" element={<CadAr />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
