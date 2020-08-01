import React, { Component } from 'react';

class CamionTransportador extends Component {
  constructor(){
    super();
    this.state={
      corrida: '',
      prob: '',
      errors: '',
    }
    this.onChange = this.onChange.bind(this);
    this.Calcular = this.Calcular.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name] : e.target.value })
    this.setState({errors:''});
  }

  Calcular(){
    if(this.valid()){
      this.setState({prob:0})
      let probabilidad = 0;
      let n = parseInt(this.state.corrida);
      let error = 0;
      for (let i = 0; i < n ; i++) {
        let KgTotal = 0;
        for (let j = 0; j < 5; j++) {
          let aleatorio = Math.random();
          let pesoTurril = 0
          if(aleatorio < 0.5){
            pesoTurril = 190 + Math.sqrt(800*aleatorio); 
          }else{
            pesoTurril = 230 - Math.sqrt(800*(1-aleatorio));
          }
          KgTotal = KgTotal + pesoTurril;
          console.log("KGTotal: "+KgTotal)
        }
        if(KgTotal > 1000){
          error++;
          console.log("error: " + error)
          console.log("************************************")
        }
      }
      probabilidad = error / n;
      this.setState({prob:probabilidad})
    }
  }

  valid(){
    let res = false;
    if(this.state.corrida === ''){
      this.setState({errors:"Introduzca un numero"});
    }else{
      res = true
    }
    return res;
  }
  

  render() {
    return (
      <div className="mt-3">
        <h1>Contexto</h1>
        <p>
          Existe un camion que trasporta turriles tiene capacidad de 1000kg, 
          este puede transportar cinco turriles, cada turril puede pesar entre 
          190 y 230 cada uno.
          Cual es la probabilidad de que el peso de los cinco turriles exeda la capacidad del camion?
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
          <p>{"La probabilidad de que exeda en capacidad es de "}<b>{(this.state.prob*100) + "%"}</b></p> 
        </div>
      </div>
    );
  }
}

export default CamionTransportador;