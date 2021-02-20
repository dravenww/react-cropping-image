import {useState, useEffect, useCallback} from "react"

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function ScreenShot(props) {
    useCallback(() => {
        console.log(123)
    })
    return (
        <div className="screen-shot-container">
            hello world
        </div>
    )
}