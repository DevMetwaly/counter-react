import React from 'react';

export default function Header(props){
    return (
            <div className="card-header text-white bg-secondary">
                {props.name}
                <button 
                    className="btn btn-primary-outline" 
                    style={{position:'absolute',right:'-11px',top:'-13px'}}
                    onClick={props.handleDelete(props.id)}>

                    <i class="fas fa-times" style={{color:'red'}}></i>
                </button>
            </div>
    );
}