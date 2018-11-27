import React, { Component } from "react";


class Navbar extends Component {
    render(){
        return (
            <nav className="navbar is-fixed-top">
            <div className="navbar-brand">
              <a className="navbar-item" href="">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
              </a>
              <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          
              <div id="navbarExampleTransparentExample" className="navbar-menu">
                  <div className="navbar-start">
                      <a className="navbar-item" href="">
                          Home
                      </a>
                      
                          {/* <div className="navbar-item has-dropdown is-hoverable">
                          <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
                          Docs
                          </a>
                          <div className="navbar-dropdown is-boxed">
                          <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
                              Overview
                          </a>
                          <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                              Modifiers
                          </a>
                          <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                              Columns
                          </a>
                          <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                              Layout
                          </a>
                          <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                              Form
                          </a>
                          <hr className="navbar-divider"></hr>
                          <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                              Elements
                          </a>
                          <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                              Components
                          </a>
                          </div>
                      </div> */}
                  </div> 
          
                  <div className="navbar-end">
                  <div className="navbar-item">
                      <div className="field is-grouped">
                      <p className="control">
                          <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="">
                          <span>Login</span>
                          </a>
                      </p>
                      <p className="control">
                          <a className="button is-primary" href="">
                          <span>Signup</span>
                          </a>
                      </p>
                      </div>
                  </div>
                  </div>
            </div>
            </nav>
        )
    }
}

export default Navbar;