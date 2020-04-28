import React, { Component } from 'react';

class Resutf extends Component {
    render() {
        return (
            <div className="resutf col-md-6">
                <div className="card border-primary">
                  <div className="card-body">
                    <h4 className="card-title">{this.props.colorResuft}</h4>
                  </div>
                </div>
            </div>
        );
    }
}

export default Resutf;