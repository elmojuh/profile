import { useState } from "react";

// pequena função de teste de um contador em tela.

export default function Contador() {
  const [contador, setContador] = useState(0);
  function adicionarContador() {
    setContador(contador + 1);
  }

  const style = {
    color: 'blue',
    borderStyle: 'solid',
    borderRadius: '20px',
    padding: '10px'
  }
  function decrementarContador() {
    setContador(contador - 1);
  }
  return (
    <div style={style}>
      <Style>
        Valor: {contador}
        <br></br>
        <button onClick={adicionarContador}>Adicionar</button>
        <button onClick={decrementarContador}>Decrementar</button>
      </Style>
    </div>
  );
}

function Style({ children }) {
  return (
    <div>
      {children}
      <style jsx>
        {`
          div {
            color: blue;
            border-style: solid;
            border-radius: 20px;
            padding: 10px;
          }
        `}
      </style>
    </div>
  );
}
