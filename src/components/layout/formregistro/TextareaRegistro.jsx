import React from "react";

const TextareaRegistro = ({ txtn, ident, placeh, column, rowst }) => {
  return (
    <textarea
      name={txtn}
      id={ident}
      placeholder={placeh}
      cols={column}
      rows={rowst}
    ></textarea>
  );
};

export default TextareaRegistro;
