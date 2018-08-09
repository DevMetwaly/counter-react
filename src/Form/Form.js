import React, { Component } from 'react';


export default class Form extends Component {
    state = {
        name:'',
        imagePreviewUrl:''
    }


    handleChange = (event) => {
        if(event.target.name === 'picture'){
           
            let reader = new FileReader();
            let file = event.target.files[0];
            reader.onloadend = () => {
                this.setState({
                  file: file,
                  imagePreviewUrl: reader.result
                });
              }
          
              reader.readAsDataURL(file)
        }
        else this.setState({[event.target.name]:event.target.value});

        //this.setState({[event.target.name]:event.target.value});
       
    }
    render(){
        return(
        <div className="row" style={{paddin:'10px',margin:'50px'}}>
            <div className="col-lg-6">
                <div className="panel panel-default text-left">
                    <div className="panel-heading">Add New Counter</div>
                    <div className="panel-body">
                    
                        <div className="row">
                            <div className="col-lg-12">
                                <form onSubmit={this.props.handleSubmit(this.state)}>
                                    
                                    <div className="form-group">
                                        <label>Counter Name</label>
                                        <input 
                                            value={this.state.name} 
                                            onChange={this.handleChange} 
                                            name="name" 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Counter Name" 
                                            required />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Counter Image</label>
                                        <input 
                                            
                                            onChange={this.handleChange} 
                                            name="picture" 
                                            type="file" 
                                            className="form-control-file" 
                                            required />
                                    </div>
                                    
                                    <button type="submit" className="btn btn-default btn-success" >Add Counter</button>
                                </form>
                               

                            </div>
                        </div>





                    </div>
                </div>
            </div>
        </div>
        );

    }

}