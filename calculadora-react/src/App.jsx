import { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);
  const [classificacao,setClassificacao] = useState('')

  const calcularIMC = () => {
    const alturaMetros = altura / 100; 
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));
  };
  const aprovaçãoPelaTabela = () => {
    if (imcCalculado <= 16,9) {
      setClassificacao('Muito abaixo do peso')
    } else if(imcCalculado >= 17 && imcCalculado <=18,4) {
      setClassificacao('Abaixo do peso')
    } else if(imcCalculado >= 18,4 && imcCalculado <= 24,9) {
      setClassificacao('Peso Normal')
    } else if(imcCalculado >= 25 && imcCalculado29,9) {
      setClassificacao('Acima do peso')
    } else if(imcCalculado >= 30 && imcCalculado <= 34,9) {
      setClassificacao('Obesidade grau 1')
    } else if(imcCalculado >= 35 && imcCalculado <= 40) {
      setClassificacao('Obesidade grau 2')
    } else  {
      setClassificacao('obesidade grau 3')
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

export default App;
