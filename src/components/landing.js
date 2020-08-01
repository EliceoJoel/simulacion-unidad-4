import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">BIENVENIDO</h1>
            <h5 className="text-center mt-5">
              Selecciona un tipo de aplicacion en la barra de navegacion
            </h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing