import React, { Component } from 'react';
import  SetColor  from "./components/SetColor";
import  Resuft  from "./components/Resutf";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorRevice: ''
    }
    this.reviceColor = this.reviceColor.bind(this)
  }
  reviceColor(colors){
    this.setState({
      colorRevice: colors
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <SetColor OnClickRevice={ this.reviceColor }></SetColor>
          <Resuft colorResuft={this.state.colorRevice}></Resuft>
        </div>
      </div>
    );
  }
}

export default App;