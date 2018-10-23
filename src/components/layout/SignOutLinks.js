import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';

class SignOutLinks extends Component {
  state = {
    show: false
  }
  showModal = (e) => {
    this.setState({
      show: true
    })
  }
  hideModal = (e) => {
    this.setState({
      show: false
    })
  }
  render() {
    return (
      <div>
        <ul className="right">
          <li><NavLink to="" onClick={this.showModal} className="btn pink accent-2">sign up</NavLink></li>
          <li><NavLink to="" onClick={this.showModal}>login</NavLink></li>
        </ul>
        <SignIn show={this.state.show} handleClose={this.hideModal}/>
        <SignUp show={this.state.show} handleClose={this.hideModal}/>
      </div>
    )
  }
}

export default SignOutLinks;