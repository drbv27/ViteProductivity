import React from "react";
import styled from "@emotion/styled";

const FormStyle = styled.form`
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
`;

const FormLog2 = ({ submitHandler, ...props }) => {
  return <FormStyle onSubmit={submitHandler}>{props.children}</FormStyle>;
};

export default FormLog2;
