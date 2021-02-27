import {useRef, useState, useEffect, useCallback, forwardRef, useImperativeHandle} from "react"
import Draggable from 'react-draggable';
import './index.sass'
/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ScreenShot = forwardRef(function (props, ref) {
    const image = useRef(null);
    // target元素的宽高
    const [entity, setEntity] = useState({
        width: 200,
        height: 200,
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
        ctx.drawImage(image.current, position.left, position.top, entity.width, entity.height,0, 0, entity.width, entity.height)
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
        img.src = props.img;
        img.onload = () => {
            setEntity({
                width: img.width / 2,
                height: img.height / 2,
            })
            setPosition({
                top: img.height / 4,
                left: img.width / 4,
            })
            image.current = img;
        }
    }, [props.img])

    // 移动结束的回调
    const onStop = useCallback((event, data) => {
        const width = entity.width / 2;
        const height = entity.height / 2;
        const left = data.lastX + width
        const top = data.lastY + height
        setPosition({
            left: left,
            top: top
        })
        setTimeout(() => {
            props.onMoveEnd && props.onMoveEnd(generateBase());
        }, 10)
    })

    const style = {
        width: entity.width + 'px',
        height: entity.height + 'px',
    }
    return (
        <div className="screen-shot-container">
            <img src={props.img}/>
            <div className="crop-container">
                <Draggable bounds="parent" onStop={onStop}>
                    <div className="target" style={style}>
                        {props.children}
                    </div>
                </Draggable>
            </div>
        </div>
    )
})

export default ScreenShot;