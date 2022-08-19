import React from 'react';
import "../styles/components.css";


function Button  ( props ) {
    
    return (
        <>  
            <button style={{width: `${props.width}px`, height: `${props.height}px`}} className={`bnt bnt-${props.class}`} >{props.name}</button>
            
 
        </>
    );
}

export default Button;