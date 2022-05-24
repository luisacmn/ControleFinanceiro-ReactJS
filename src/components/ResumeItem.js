import React from "react";

const ResumeItem = (props) => {
  return (
    <div className="col-sm-4 resume-item">
      <p> {props.title} <props.icon /> </p>
      <span>R$ {props.value}</span>
    </div>
  );
};

export default ResumeItem;
