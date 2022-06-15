import React from "react";
import styled from "@emotion/styled";

const FormStyle = styled.form`
  background: rgba(0, 0, 0, 0.712);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  margin-top: 50px;
  margin-left: 290px;
  margin-right: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const FormLog2 = ({ submitHandler, ...props }) => {
  return <FormStyle onSubmit={submitHandler}>{props.children}</FormStyle>;
};

export default FormLog2;
