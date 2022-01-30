import React from 'react';

const TextError = (props) => {
    return(
        <div className='errors'>
            {props.children}
        </div>
    )
}

export default TextError;