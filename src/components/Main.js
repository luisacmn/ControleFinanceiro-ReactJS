import React, { useState } from "react";
import Resume from "./Resume";
import Form from "./Form";
import Table from "./Table";

//componente pai carrega os dados que serão compartilhados, assim como as funções que modificam esses dados.
const Main = () => {
  //Guardar/trackear valores do input
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0); //Valor que será somado
  const [isChecked, setisChecked] = useState(true); //A entrada , que é default checked, começa como true. Se ela mudar, ela vira false.

  //Funções do input e checkbox
  const descChange = (e) => setDesc(e.target.value);
  const amountChange = (e) => setAmount(e.target.value);
  const radioChange = () => setisChecked(!isChecked);

  //Usar valores do input para Cálculo e armazenar
  const [entradas, setEntradas] = useState(0);
  const [saidas, setSaidas] = useState(0);
  const total = entradas - saidas;

  //Usar valores do input para armazenar em um array de Objetos, com valores que serão usados na tabela. Cada objeto é um item do array(lista),
  const [items, setItems] = useState([{}]);

  //Realizar cálculo e atualizar os valores do array items
  const onClick = () => {
    //Última Etapa: Clicar e alterar valores de entrada e saída. (Fazer cálculo)
    if (isChecked === true) {
      setEntradas(Number(entradas) + Number(amount)); //transformar a variável em número para calcular.
      console.log("entrada is true");
    } else {
      setSaidas(Number(saidas) + Number(amount));
      console.log("entrada is false");
    }

    setItems((prevState) => {
      //atualizar o array items:
      if (isChecked === true) {
        return [
          ...prevState,
          {
            descrição: desc,
            tipo: "Entrada",
            valor: amount
          }
        ];
      } else {
        return [
          ...prevState,
          {
            descrição: desc,
            tipo: "Saída",
            valor: amount
          }
        ];
      }
    });
    console.log(items.length);
  };

  return (
    <div>
      <Resume
        entradas={entradas}
        saidas={saidas}
        total={total}
        amount={amount}
      />
      <Form
        descChange={descChange}
        amountChange={amountChange}
        radioChange={radioChange}
        onClick={onClick}
      />
      <Table items={items} isChecked={isChecked} />
    </div>
  );
};

export default Main;
