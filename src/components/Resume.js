import React from "react";
import ResumeItem from "./ResumeItem";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

const Resume = (props) => {
  return (
    <div className="container">
      <div className="row" id="resume">
        <ResumeItem
          title="Entradas"
          icon={FaArrowAltCircleUp}
          value={props.entradas}
        />
        <ResumeItem
          title="Saídas"
          icon={FaArrowAltCircleDown}
          value={props.saidas}
        />
        <ResumeItem title="Total" icon={FaDollarSign} value={props.total} />
      </div>
    </div>
  );
};

export default Resume;
