import React, { Component } from 'react';
import HomeImage from '../../assets/home-img.png';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    if (this.props.search.length !== 0) return <Redirect to='/search_result' />

    return (
      <main className="container row">
        <div className="col s6">
          <img width="500" src={HomeImage} alt="Imagem de 4 algums, um do Queen, um do Deep Purple, um do Fleetwood Mac e um do Led Zeppelin"/>
        </div>
        <div className="col s6">
          <h1>discographer</h1>
          <p>Você é apaixonado por música? Que tal um aplicativo para guardar todos os artistas, albums e faixas que você já ouviu?</p>
          <p>Essa é a proposta do discographer. Com ele, você poderá registrar todas as suas descobertas musicais, favoritar suas músicas preferidas e até mesmo saber quantos porcento da discografia de um artista você já ouviu.</p>
          <p>Você está esperando o que para criar a sua conta? Junte-se à comunidade e seja um discographer você também!</p>
        </div>
      </main>
    ) 
  }
}

const mapStateToProps = state => {
  return {
    search: state.search.keyword
  }
}

export default connect(mapStateToProps)(Home);