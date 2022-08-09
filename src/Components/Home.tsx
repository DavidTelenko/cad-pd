import React from "react";
import { Link } from "react-router-dom";

import "../Styles/FileUploadForm.css";

export interface HomeProperties {
    pathName: string;
}

const Home = (props: HomeProperties) => {
    return (
        <header className="App-header">
            <Link to="/" className="home-link">CAD-AR</Link> {'>'} {props.pathName}
            {/*e.g. CAD-AR / Home*/}
        </header>
    );
}

export default Home;