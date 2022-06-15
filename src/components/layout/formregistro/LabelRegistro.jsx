import React from "react";

const LabelRegistro = ({ para, texto }) => {
  return <label htmlFor={para}>{texto}</label>;
};

export default LabelRegistro;
