import { useState } from "react";

const Questao02 = () => {
  const [frente, setFrente] = useState(true);
  //flag com estado para indicar se ele está de frente ou virado

  const pokemon = frente
    ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
    : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/57.png";
  //determinando a url da imagem a partir da flag

  //Renderizando o resultado para mostrar na tela
  return (
    <>
      <img alt="para de dar warning pfv" src={pokemon} />
      <button onClick={() => setFrente(!frente)}>vira</button>
      {/*Ao apertar o botão, o estado da flag de estado muda para falso*/}
    </>
  );
};

export default Questao02;
