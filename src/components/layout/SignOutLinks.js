import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';

class SignOutLinks extends Component {
  state = {
    signin: { show: false },
    signup: { show: false }
  }
  showModal = (e) => {
    e.preventDefault();
    if (e.target.getAttribute('data-link') === 'signin') {
      this.setState({
        ...this.state,
        signin: { show: true}
      })
    } 

    if (e.target.getAttribute('data-link') === 'signup') {
      this.setState({
        ...this.state,
        signup: { show: true}
      })
    } 
  }
  hideModal = (e) => {
    this.setState({
      signin: { show: false},
      signup: { show: false}
    })
  }
  render() {
    return (
      <div>
        <ul className="right">
          <li><NavLink to="" data-link="signup" onClick={this.showModal} className="btn pink accent-2">sign up</NavLink></li>
          <li><NavLink to="" data-link="signin" onClick={this.showModal}>login</NavLink></li>
        </ul>
        <SignUp show={this.state.signup.show} handleClose={this.hideModal}/>
        <SignIn show={this.state.signin.show} handleClose={this.hideModal}/>
      </div>
    )
  }
}

export default SignOutLinks;