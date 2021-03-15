import {useRef, useState, useEffect, useCallback, forwardRef, useImperativeHandle} from "react"
import Draggable from 'react-draggable';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .crop-container {
    user-select: none;
    position: absolute;
    overflow: hidden;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100%;
    .control-top {
      position: absolute;
      top: -1px;
      width: 100%;
      background: red;
    }
  }
  .target {
    position: absolute;
    box-shadow: 0 0 0 1000px rgb(0 0 0 / 30%);
    border: 1px dashed #fff;
    box-sizing: border-box;
    cursor: move;
  }
`;
/**
 *
 * @param props object
 * @param props width: 目标宽度，默认200
 * @param props height: 目标高度，默认200
 * @param props image: 底图
 * @returns {JSX.Element}
 * @constructor
 */
const ScreenShot = forwardRef(function (props, ref) {
    const image = useRef(null);
    const container = useRef(null);

    const [translate, setTranslate] = useState({
        x: 0,
        y: 0
    });
    // target元素的宽高
    const [entity, setEntity] = useState({
        width: 0,
        height: 0,
    });
    // target元素的位置
    const [position, setPosition] = useState({
        top: 0,
        left: 0
    });
    // 生成base64类型的图片
    const generateBase = () => {
        let canvas = document.createElement('canvas');
        canvas.setAttribute("width", entity.width)
        canvas.setAttribute("height", entity.height);
        let ctx = canvas.getContext('2d')
        const left = position.left + translate.x;
        const top = position.top + translate.y;
        ctx.drawImage(image.current, left, top, entity.width, entity.height,0, 0, entity.width, entity.height)
        return canvas.toDataURL('image/png');
    }

    // 向外暴露方法
    useImperativeHandle(ref, () => ({
        getImage() {
            return generateBase();
        }
    }))
    // 初始化时获取图片，设置宽高和位置
    useEffect(() => {
        let img = new Image();
        img.src = props.image;
        img.onload = () => {
            image.current = img;
            const cw = container.current.offsetWidth;
            const ch = container.current.offsetHeight;
            const width = props.width || 200;
            const height = props.width || 200;
            setEntity({
                width: width,
                height: height,
            })
            setPosition({
                top: (ch - height) / 2,
                left: (cw - width) / 2,
            });

        }
    }, [props.image])

    // 移动结束的回调
    const onStop = useCallback((event, data) => {
        setTranslate({
            x: data.lastX,
            y: data.lastY
        })
    })

    const style = {
        width: entity.width + 'px',
        height: entity.height + 'px',
        top: position.top + 'px',
        left: position.left + 'px',
    }
    return (
        <Container ref={container} className="screen-shot-container">
            <img src={props.image}/>
            <div className="crop-container">
                <Draggable bounds="parent" onStop={onStop}>
                    <div className="target" style={style}></div>
                </Draggable>
            </div>
        </Container>
    )
})

export default ScreenShot;