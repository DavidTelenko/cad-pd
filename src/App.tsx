import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DecVert from './Components/DecVert';
import Main from './Components/Main';
import CadAr from './Components/CadAr';
import ModelUploader from './Components/ModelUploader';
import MarkerUploader from './Components/MarkerUploader';

import './Styles/App.css';

const App = () => {
  return (
    <div className="App">
      <DecVert classNameProp='decVert' />
      <DecVert classNameProp='decHor' />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main pathName="Home" />} />
          <Route path="/model-uploader" element={
            <ModelUploader pathName="Model uploader" />
          } />
          <Route path="/marker-uploader" element={
            <MarkerUploader pathName="Marker uploader" />
          } />
          <Route path="/cad-ar" element={<CadAr />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
