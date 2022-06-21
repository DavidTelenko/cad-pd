import React from "react";
import "./App.css";
import "./Styles/FileUploader.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FileUploader from "./Components/FileUploader";
import Modeler from "./Components/Modeler";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FileUploader />} />
          <Route path="/modeler" element={<Modeler />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
