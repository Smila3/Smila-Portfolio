import React from 'react';
import './VerticalDiv.css';

const VerticalDiv = ({leftContent}, {rightContent}) => {
    return(
        <div className="vertical-container">
            <div className="left-panel">Projects
            {leftContent}
            </div>
            <div className="right-panel">Description
            {rightContent}
            </div>
        </div>
    )
}

export default VerticalDiv;