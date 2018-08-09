import React from 'react';
import './Footer.css';
export default function Footer(props){
    return (
        <div className="card-footer">
        <div className="row">
            <div className="col-lg-6">
                <button 
                    className="btn btn-primary-outline"
                    onClick={props.handleInc(props.id)}>
                    
                    <i class="fas fa-plus-circle" style={{color:'blue'}}></i>
                </button>
                <button 
                    className="btn btn-primary-outline"
                    onClick={props.handleDec(props.id)}>

                    <i class="fas fa-minus-circle" style={{color:'gray'}}></i>
                </button>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-2" style={{lineHeight:'200%'}}>
                <span className="badge badge-info">{props.cnt}</span>
            </div>
        </div>
        </div>
    );
}