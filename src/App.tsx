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
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const darkTheme = createTheme({
  palette: {
    // mode: 'dark',
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <Main pathName="Home" />
            } />
            <Route path="/model-uploader" element={
              <ModelUploader pathName="Model uploader" />
            } />
            <Route path="/marker-uploader" element={
              <MarkerUploader pathName="Marker uploader" />
            } />
            <Route path="/cad-ar" element={
              <CadAr />
            } />
          </Routes>
        </BrowserRouter>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
