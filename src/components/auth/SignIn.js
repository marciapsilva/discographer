import React from 'react';

const SignIn = ({ show, handleClose }) => {
  const modalClass = show ? "modal d-block" : "modal d-none";
  return (
    <div id="modal-signin" className={modalClass}>
      <div className="modal-header right">
        <a href="#!" onClick={handleClose} className="modal-close waves-effect waves-green btn-flat">x</a>
      </div>
      <div className="modal-content">
        <form className="white">
          <h5 className="grey-text text-darken-3">Logar</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email"/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password"/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Logar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn;