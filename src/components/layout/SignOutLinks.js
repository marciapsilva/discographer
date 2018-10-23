import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SignIn from '../auth/SignIn';

class SignOutLinks extends Component {
  state = {
    show: false
  }
  showModal = (e) => {
    e.preventDefault();
    this.setState({
      show: true
    })
    console.log('abre modal');
  }
  hideModal = (e) => {
    e.preventDefault();
    this.setState({
      show: false
    })
    console.log('fecha modal');
  }
  render() {
    return (
      <div>
        <ul className="right">
          <li><NavLink to="#modal-signin" onClick={this.showModal} className="btn pink accent-2">sign up</NavLink></li>
          <li><NavLink  to="#modal-signin" onClick={this.showModal}>login</NavLink></li>
        </ul>
        <SignIn />
      </div>
    )
  }
}

export default SignOutLinks;