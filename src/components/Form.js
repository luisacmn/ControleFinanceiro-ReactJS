import React from "react";

const Form = (props) => {
  return (
    <div className="container">
      <div className="row" id="form">
        <div className="col-sm-3 form-item form-txt">
          <label>Descrição</label>
          <input type="text" onChange={props.descChange} />
        </div>
        <div className="col-sm-3 form-item form-txt">
          <label>Valor</label>
          <input type="number" onChange={props.amountChange} />
        </div>
        <div className="col-sm-3 form-item form-radio">
          <input
            type="radio"
            id="entrada"
            name="radiobutton"
            defaultChecked
            onChange={props.radioChange}
          />
          <label>Entrada</label>
          <input 
            type="radio" 
            id="saida"
            name="radiobutton" 
            onChange={props.radioChange} />
          <label>Saída</label>
        </div>
        <div className="col-sm-3 form-item form-button">
          <button onClick={props.onClick}>ADICIONAR</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
