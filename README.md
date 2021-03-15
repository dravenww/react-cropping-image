# react-cropping-image

前端通用图片裁剪组件 for react 16.8 +

# 安装 

```
npm install --save react-cropping-image
or
yarn add react-cropping-image
```

# 使用
```
import React, { useState } from "react";
import CroppingImage from 'react-cropping-image';
const App = () => {
    const cacheRef = React.createRef();
    const [src, setSrc] = useState(false);
    const imageSrc = 'https://github.com/dravenww/react-screenshot/blob/master/src/demo.jpeg?raw=true';
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
                      image={imageSrc}
                      width={200}
                      height={200}
                      ref={cacheRef}
                    />
              </section>
              {src && <img src={src}/>}
        </div>
    );
}
```
# 参数

- image: 图片地址，src
- width: 裁剪所得图片宽度，默认200
- height: 裁剪所得图片高度，默认200

说明： 组件ScreenShot的宽高为所在容器的100%。

# 方法

- getImage: 获取用户裁剪后得图片，格式为base64的png类型。参见demo：[react-cropping-image](https://codesandbox.io/s/zealous-fast-rzg0t)
