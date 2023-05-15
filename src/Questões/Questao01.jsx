import { useEffect, useState } from "react";

//criando com arrow function e colocando o array de alunos
const Questao01X = (props) => {
  const alunos = [
    { nome: "Chico", notas: { ap1: 8.4, ap2: 5.4 } },
    { nome: "Lucas", notas: { ap1: 6.7, ap2: 3.5 } },
    { nome: "Alano", notas: { ap1: 7.3, ap2: 9.2 } }
  ];
  /* alimentando a questão01Y com os alunos via props*/
  return <Questao01Y />;
};

//criando utilizando a função de function tradicional
function Questao01Y(props) {
  const [aprovados, setAprovados] = useState([]);
  //const para guardar os alunos aprovados

  //laço dentro do useEffect para tirar a média dos alunos aprovados e inserir o aluno que passou na const
  useEffect(() => {
    for (let i = 0; i === 2; i++) {
      const media = (i.ap1 + i.ap2) / 2;
      if (media >= 5) setAprovados(props.alunos[i]);
    }
  }, [setAprovados]);

  //renderizando os alunos aprovados
  return "" + { aprovados };
}

export default Questao01X;
