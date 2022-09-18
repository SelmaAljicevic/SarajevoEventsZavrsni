import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-style: outset;
  padding: 10px;
  width: min-content;

  & > img {
    width: 200px;
    height: 200px;
    background-size: cover;
  }
`;

export const Event = ({ event, ...rest }) => {
  if (!event) return null;

  return (
    <Wrapper {...rest}>
      <>
        <div>{event.name}</div>
        <div>Place: {event.place}</div>
        <div style={{ marginBottom: 10 }}>Category: {event.category}</div>
      </>
      <img src={event.image_url} alt="" />
    </Wrapper>
  );
};
