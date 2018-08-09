import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from './Body/Body';

export default function Counters(props){
    return (
        <div className="row" style={{paddin:'10px',margin:'30px'}}>

            {props.counters.map((counter => (
                <div 
                    className="col-lg-3" 
                    style={{marginBottom:'20px'}}
                    key={counter.id}>

                    <div className="card">
                        <Header 
                            name={counter.name}
                            handleDelete={props.handleDelete}
                            id={counter.id}/>
                        <Body src={counter.imagePreviewUrl}/>
                        <Footer 
                            cnt={counter.value}
                            handleInc={props.handleInc}
                            handleDec={props.handleDec}
                            id={counter.id}/>
                    </div>
                </div>  
            )))}
            
        </div>

    );

    
    
}