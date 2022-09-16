import styled from "styled-components";

const Wrapper = styled.div`
  height: 12px;
  font-size: 12px;
  color: red;
`;

export const Error = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
