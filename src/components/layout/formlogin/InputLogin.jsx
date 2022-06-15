import React from "react";

const InputLogin = ({ tipo, iden, placeh }) => {
  return <input type={tipo} id={iden} placeholder={placeh} />;
};

export default InputLogin;
