import React, { Component } from "react";

class CoolButton extends Component {
    render(){
        console.log(this.props)
        return (
            <div>
                <button className="button is-rounded my-class is-danger is-small">{this.props.button}</button>
            </div>
        )
    }
}

export default CoolButton;