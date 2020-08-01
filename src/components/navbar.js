import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {
    
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <a className="navbar-brand" href="/">
            Inicio
          </a>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample10"
            aria-controls="navbarsExample10"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
  
          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample10"
          >
            <ul className="navbar-nav">
              <li className="nav-item ml-auto px-2">
                <Link to="camionTransp" className="nav-link">
                  Camion transportador
                </Link>
              </li>
              <li className="nav-item ml-auto px-2">
                <Link to="estimacionPI" className="nav-link">
                  Estimacion de PI
                </Link>
              </li>
            </ul>  
          </div>
        </nav>
      </div>
    )
  } 
}
  
export default withRouter(Navbar)