import {useState, useEffect, useCallback} from "react"
import Draggable from 'react-draggable';
import './index.sass'
/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function ScreenShot(props) {
    console.log(props)
    const [position, setPosition] = useState({
        width: 200,
        height: 200
    });
    useEffect(() => {
        let img = new Image();
        img.src = props.img;
        img.onload = () => {
            setPosition({
                width: img.height / 2,
                height: img.height / 2,
            })
        }
    }, [props.img])
    const onStart = useCallback((event, data) => {
        console.log('start')
        console.log(data)
    })
    const onStop = useCallback((event, data) => {
        console.log(data)
    })
    const dragHandlers = {
        onStart,
        onStop
    }
    const style = {
        width: position.width + 'px',
        height: position.height + 'px',
    }
    return (
        <div className="screen-shot-container">
            <img src={props.img}/>
            <div className="crop-container">
                <Draggable bounds="parent" {...dragHandlers}>
                    <div className="target" style={style}>
                        {props.children}
                    </div>
                </Draggable>
            </div>
        </div>
    )
}