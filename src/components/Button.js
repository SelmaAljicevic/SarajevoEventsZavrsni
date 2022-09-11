import styled from "styled-components";

const Wrapper = styled.button`
  border: 2px solid black;
  background: transparent;
  color: black;
  outline: none;
  padding: 10px 5px;
`;

export const Button = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
