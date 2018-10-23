import React from 'react';

const SignUp = ({ show, handleClose }) => {
  const modalClass = show ? "modal d-block" : "modal d-none";
  return (
    <div id="modal-signup" className={modalClass}>
      <div className="modal-header right">
        <a href="#!" onClick={handleClose} className="modal-close waves-effect waves-green btn-flat">x</a>
      </div>
      <div className="modal-content">
        <form className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstName">Nome</label>
            <input type="text" id="firstName" />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Sobrenome</label>
            <input type="text" id="lastName" />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;

// state = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   password: ''
// }
// handleChange = (e) => {
//   this.setState({
//     [e.target.id]: e.target.value
//   })
// }
// handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(this.state);
// }