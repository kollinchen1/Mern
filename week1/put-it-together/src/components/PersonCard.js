import React, { Component } from 'react';
                
                
class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    flipSwitch = () => {
        this.setState({ age: this.state.age+1 });
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.header}</h1>
                <p>Age: { this.state.age }</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={ this.flipSwitch }>Birthday Button For {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}
                
export default LightSwitch;