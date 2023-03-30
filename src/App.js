import React, { useState} from 'react';
import './App.css';
import Nav from './Nav'
 class App extends React.Component{
  constructor() {
  super()
  this.state={
    show:true
  }
    console.warn("constructor");
  }
componentDidMount()
{
  console.warn("componentDidMount");
}
render()
 {
  console.warn("render");
  return (
    <div>
     <h1>hii </h1>
     {
      this.state.show ?
      <Nav />
      :null
     }
     <button onClick={()=>{this.setState({show:!this.state.show})}}> toggle navbar</button>
      </div>
  )
}
}


export default App;