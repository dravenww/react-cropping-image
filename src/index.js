import React from "react";
import ReactDOM from "react-dom";

import ScreenShot from "./lib";

import image from './demo.jpeg'


const App = () => (
    <div style={{ width: 640, margin: "15px auto" }}>
        <h1>Hello React</h1>
        <section className="img-container" style={{width: '400px', height: '400px'}}>
            <ScreenShot
                img={image}
            />
        </section>
    </div>
);

ReactDOM.render(<App/>, document.getElementById("root"));