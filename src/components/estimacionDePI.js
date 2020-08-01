import React, { Component } from 'react';

class EstimacionDePI extends Component {
  constructor(){
    super()
    this.state = {
       corrida: '',
       pi: 0,
       errors: ''
    }
    this.onChange = this.onChange.bind(this);
    this.Calcular = this.Calcular.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name] : e.target.value })
    this.setState({errors:''});
  }

  Calcular(){
    let pi = 0;
    let n = parseInt(this.state.corrida);
    let x = 0;
    for (let i = 0; i < n; i++) {
      let r1 = Math.random();
      let r2 = Math.random();
      if(Math.sqrt((r1*r1)+(r2*r2)) <= 1){
        x = x + 1;
      }
    }
    pi = 4 * (x/n);
    this.setState({pi:pi})
  }

  render() {
    return (
      <div className="mt-3">
        <h1>Contexto</h1>
        <p>
          Se realiza un numero determinado de corridas para simular que tan 
          similar o cercado es la estimacion de pi.
        </p>
        <h1>Respuesta</h1>
        <div className="row">
          <div className="col-4">
            <input 
             className="form-control"
             type="number" 
             name="corrida" 
             id="corrida"
             placeholder="Introduzca el numero de corridas"
             value={this.corrida}
             onChange={this.onChange}
            />
          </div>
          <button className="btn btn-success col-4" type="button" onClick={this.Calcular}>Calcular</button>
        </div>
        <div className="mt-4">
          <p style={{color:"red"}}>{this.state.errors}</p>
          <p>{"El pi estimado es: "}<b>{this.state.pi}</b></p> 
        </div>
      </div>
    );
  }
}

export default EstimacionDePI;