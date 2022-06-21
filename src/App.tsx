import React, { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import "./Styles/FileUploader.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FileUploader from "./Components/FileUploader";
import Modeler from "./Components/Modeler";
import NotFound from "./Components/NotFound";

function App() {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();

  const changeHandler = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      setSelectedFile(target.files[0]);
    }
  };

  useEffect(() => console.log(selectedFile), [selectedFile]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <FileUploader
                selectedFile={selectedFile}
                changeHandler={changeHandler}
              />
            }
          />
          <Route path="/modeler" element={<Modeler />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
