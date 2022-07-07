import React, { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import "./Styles/FileUploader.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FileUploader from "./Components/FileUploader";
import Modeler from "./Components/Modeler";
import NotFound from "./Components/NotFound";

function App() {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [selectedLink, setLink] = useState<string>("");

  const changeHandler = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      setSelectedFile(target.files[0]);
      console.log(target.value);
    }
  };

  const linkHandler = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.value) {
      setLink(target.value);
    }
  };
  //
  useEffect(() => console.log(selectedFile), [selectedFile]);
  useEffect(() => console.log(selectedLink), [selectedLink]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <FileUploader
                selectedFile={selectedFile}
                selectedLink={selectedLink}
                changeHandler={changeHandler}
                linkHandler={linkHandler}
              />
            }
          />
          <Route path="/modeler" element={<Modeler link={selectedLink} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
