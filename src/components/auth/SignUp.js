import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';


class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const modalClass = this.props.show ? "modal d-block" : "modal d-none";
    const { authError } = this.props;

    return (
      <div id="modal-signup" className={modalClass}>
        <div className="modal-header right">
          <a href="#!" onClick={this.props.handleClose} className="modal-close waves-effect waves-green btn-flat">x</a>
        </div>
        <div className="modal-content">
          <form className="white">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
              <label htmlFor="firstName">Nome</label>
              <input type="text" id="firstName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Sobrenome</label>
              <input type="text" id="lastName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit}>Cadastrar</button>
            </div>
          </form>
          <div className="div red-text center">
            { authError ? <p>{ authError }</p> : null}
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
    signUp: newUser => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);