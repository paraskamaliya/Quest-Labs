import React from 'react'
import loading from "../Assets/loading.gif";

function LoadingIndicator() {
    return (
        <div id='loadingDiv'>
            <img src={loading} alt="" />
        </div>
    )
}

export default LoadingIndicator