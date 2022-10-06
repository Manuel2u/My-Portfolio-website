import React from "react";

function Image(props){
    return(
        <img src={props.link} className={props.className}
         alt={props.alternative} height={props.height} width={props.width}/>
    );
}

export default Image;