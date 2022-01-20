/* 
  Não consegui desenvolver o desafio de forma decente. Aparentemente por falta 
  de treino em react acabei esquecendo muita coisa.

  Estarei fazendo uma revisão por conta própria antes da revisão da Labenu,
  pois assim relembrarei conceitos básicos para chegar menos cru.
*/

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="BarraLateral">
          <select name="sorteios" id="sorteios">
            <option value="mega-sena">MEGA-SENA</option>
            <option value="quina">QUINA</option>
            <option value="lotofacil">LOTOFÁCIL</option>
            <option value="lotomania">LOTOMANIA</option>
            <option value="timemania">TIMEMANIA</option>
            <option value="dia-de-sorte">DIA DE SORTE</option>
          </select>

          <div className='loteria'>
            <img src="logo.png" alt="Logo" />
            <span>MEGA-SENA</span>
          </div>

          <div className='concurso'>
            <span>CONCURSO</span>
            <span>4531 - 07/04/2020</span>
          </div>
        </div>

        <div className='sorteio'>
          <div className='numero'>06</div>
          <div className='numero'>09</div>
          <div className='numero'>28</div>
          <div className='numero'>33</div>
          <div className='numero'>37</div>
          <div className='numero'>40</div>
        </div>

        <span>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</span>
    </div>
  );
}

export default App;
