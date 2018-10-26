import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }
  render() {
    const modalClass = this.props.show ? "modal d-block" : "modal d-none";
    const { authError } = this.props;

    return (
      <div id="modal-signin" className={modalClass}>
        <div className="modal-header right">
          <a href="#!" onClick={this.props.handleClose} className="modal-close waves-effect waves-green btn-flat">x</a>
        </div>
        <div className="modal-content">
          <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Logar</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Logar</button>
            </div>
          </form>
          <div className="red-text center">
            { authError ? <p>{authError}</p> : null }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
