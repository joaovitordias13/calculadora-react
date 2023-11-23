import { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);

  const calcularIMC = () => {
    const alturaMetros = altura / 100; 
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));
  };
  
  const aprovaçãoPelaTabela = () => {
    if (imcCalculado <= 16,9) {
      return (
        <p>Muito abaixo do peso</p>
      )
    } else if(imcCalculado >= 17 && imc <=18,4) {
      return (
        <p>Abaixo do Peso</p>
      )
    } else if(imcCalculado >= 18,4 && imc <= 24,9) {
      return (
        <p>Peso normal</p>
      )
    } else if(imcCalculado >= 25 && 29,9) {
      return (
        <p>acima do peso</p>
      )
    } else if(imcCalculado >= 30 && imc <= 34,9) {
      return (
        <p>Obesidade Grau 1</p>
      )
    } else if(imcCalculado >= 35 && imc <= 40) {
      return (
        <p>Obesidade Grau 2</p>
      ) 
    } else if(imcCalculado >= 40) {
      return (
        <p>Obesidade Grau 3</p>
      )
    }
  } 

  return (
    <div className='App'>
      <h1>Calculadora de IMC</h1>
      <label>
        Altura (cm):
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </label>  
      <br />
      <label>
        Peso (kg):
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </label>
      <br />
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && (
        <div>
          <h2>Resultado:</h2>
          <p>IMC: {imc}</p>
          <p>Classificação : {aprovaçãoPelaTabela} </p>
        </div>
      )}
    </div>
  )
}

export default App
