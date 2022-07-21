import React from "react";
import styled from "@emotion/styled";

const ConBloq = styled.div`
  display: flex;
  flex-direction:column;
  margin-left: 50px;
`;

const ContBloq = (props) => {
  return <ConBloq>{props.children}</ConBloq>;
};

export default ContBloq;
