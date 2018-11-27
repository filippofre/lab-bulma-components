import React, { Component } from "react";

import "./App.css";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import Signup from "./Signup.js";

class App extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <div className="margin-top-60">
                    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    <CoolButton button="Signup" isSmall isDanger className="is-rounded my-class"/>
                </div>
                <Signup />
            </div>
        )
    }
}

export default App;