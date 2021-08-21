import React from 'react'
import loadingGif from "../images/gif/loading-arrow.gif"
function Loading() {
    return (
        <div className="loading">
            <h4> stfu and wait </h4>
            <img src={loadingGif} alt="loading Icon" />
        </div>
    )
}

export default Loading
