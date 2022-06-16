import React from "react";
import styled from "@emotion/styled";

const ConBloq = styled.div`
  display: flex;
  gap: 30px 40px;
  margin-left: 80px;
`;

const ContBloq = (props) => {
  return <ConBloq>{props.children}</ConBloq>;
};

export default ContBloq;
