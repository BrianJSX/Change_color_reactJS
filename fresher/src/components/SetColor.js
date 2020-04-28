import React, { Component } from 'react';

class SetColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red','blue','green','black'],
            colorsActive: ''
        };
    };
    setColorStyle(colors){
        if(colors === this.state.colorsActive){
            return {
                color : this.state.colorsActive
            };
        };
    }
    setColorSpan(colors){
        this.setState({
            colorsActive: colors
        });
        this.props.OnClickRevice(colors);
    }
    render() {
        var elementColor = this.state.colors.map((colors,index)=>{
            return  <span   className="m-2"
                            key={ index }
                            style={ this.setColorStyle(colors) }
                            onClick={()=> this.setColorSpan(colors )}
                    ><b>{colors}</b></span>
        });
        return ( 
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        SET COLOR
                    </div>
                    <div className="card-body">
                        {elementColor}
                    </div>
                    <div className="card-footer text-muted">
                        Footer
                    </div>
                </div>
            </div>
        );
    }
}

export default SetColor;