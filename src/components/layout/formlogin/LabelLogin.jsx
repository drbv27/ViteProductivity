import React from "react";

const LabelLogin = ({ para, texto }) => {
  return <label htmlFor={para}>{texto}</label>;
};

export default LabelLogin;
