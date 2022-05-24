import React from "react";

const TableItem = (props) => {
  return (
    <>
      <tr>
        <td>{props.item.descrição}</td>
        <td>{props.item.tipo}</td>
        <td style={{ color: props.item.tipo === "Entrada" ? "green" : "red" }}>
          {props.item.valor}
        </td>
      </tr>
    </>
  );
};

export default TableItem;
