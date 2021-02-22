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
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
        width: 200,
        height: 200
    });
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
    const targetStyle = {
        backgroundImage: `url(${props.img})`
    }
    return (
        <div className="screen-shot-container">
            <img src={props.img}/>
            <Draggable bounds="parent" {...dragHandlers}>
                <div className="target" style={targetStyle}>
                    target
                </div>
            </Draggable>
        </div>
    )
}