import React from "react";

const InputRegistro = ({ tipo, ident, placeh }) => {
  return <input type={tipo} id={ident} placeholder={placeh}></input>;
};

export default InputRegistro;
