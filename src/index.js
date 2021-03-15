import React, { useState } from "react";
import ReactDOM from "react-dom";

import CroppingImage from "./lib";

import image from './demo.jpeg'

import './index.sass'

const App = () => {
  const cacheRef = React.createRef();
  const [src, setSrc] = useState(false);
  const getImage = () => {
    let base = cacheRef.current.getImage();
    setSrc(base)
  }
  return (
    <div style={{ width: 640, margin: "15px auto" }}>
      <h1>Hello React</h1>
      <button onClick={getImage}>getImage</button>
      <section className="img-container">
        <CroppingImage
          image={image}
          width={200}
          height={200}
          ref={cacheRef}
        />
      </section>
      {src && <img src={src}/>}
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));