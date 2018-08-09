import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import Counters from './Counters/Counters'

class App extends Component {

  state ={
    counters:[
      
    ]
  }

  handleSubmit = counter => event => {
    event.preventDefault();
    let newCounter = {...counter};
    newCounter.value = 0;
    newCounter.id = (new Date().valueOf());
    const counters = this.state.counters.concat(newCounter);
    
    this.setState({counters:counters});
  }

  handleInc = id => event =>{
    event.preventDefault();
    const counters = [...this.state.counters];
    const index = counters.findIndex(counter => counter.id === id);
    counters[index].value++;
    this.setState({counters:counters});
  }

  handleDec = id => event =>{
    event.preventDefault();
    const counters = [...this.state.counters];
    const index = counters.findIndex(counter => counter.id === id);
    counters[index].value--;
    if(counters[index].value<0) counters[index].value=0;
    this.setState({counters:counters});
  }

  

  handleDelete = id => event =>{
    event.preventDefault();
    const counters = [...this.state.counters].filter(counter => counter.id !== id);
    this.setState({counters:counters});
  }

  render() {
    return (
      <div className="App">
        <div className="containter">
          <Form handleSubmit={this.handleSubmit}/>
          <Counters 
            counters={this.state.counters} 
            handleDelete={this.handleDelete}
            handleInc={this.handleInc}
            handleDec={this.handleDec}/>
        </div>
      </div>
    );
  }
}

export default App;
