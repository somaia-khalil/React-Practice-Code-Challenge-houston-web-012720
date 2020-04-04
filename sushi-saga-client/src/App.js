import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      sushis: [],
      arrayOf4: [],
      counter: 4,
      finishedeat: []
    }
  }


  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({
      sushis,
      arrayOf4: sushis.slice(0,4)
    }))
  }

  limit4 = () => {

    let newsushi =this.state.sushis.slice(this.state.counter,this.state.counter+4)
    console.log(newsushi)
    this.setState({
      arrayOf4:newsushi,
      counter: this.state.counter+=4
    })

  }

  finished = (object) => {
   this.setState({
     finishedeat: [...this.state.finishedeat, object]
   })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  arrayOf4={this.state.arrayOf4}  limit4={this.limit4} finished={this.finished} finishedeat={this.state.finishedeat}/>
        <Table finishedeat={this.state.finishedeat} />
      </div>
    );
  }
}

export default App;