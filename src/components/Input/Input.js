import styled from "styled-components";

const Wrapper = styled.input`
  padding: 10px 5px;
`;

export const Input = (props) => {
  return <Wrapper {...props} />;
};
