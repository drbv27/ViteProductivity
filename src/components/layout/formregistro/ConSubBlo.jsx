import React from "react";
import styled from "@emotion/styled";

const CoSubB = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const ConSubBlo = (props) => {
  return <CoSubB>{props.children}</CoSubB>;
};

export default ConSubBlo;
