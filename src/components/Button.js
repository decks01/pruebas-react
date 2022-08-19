import React from 'react';
import "../styles/components.css";


function Button  ( props ) {
    
    return (
        <>  
            <button className={`bnt bnt-${props.class}`} >{props.name}</button>
            
 
        </>
    );
}

export default Button;