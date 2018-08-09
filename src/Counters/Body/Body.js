import React from 'react';

export default function Body(props){
    return (
        <div className="card-body">
            <img className="card-img-top" src={props.src} alt="Card image cap" />
        </div>          
    );
}