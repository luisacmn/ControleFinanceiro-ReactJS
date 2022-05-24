import React from "react";
import TableItem from "./TableItem";

const Table = (props) => {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tipo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item, index) => (
            <TableItem item={item} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
