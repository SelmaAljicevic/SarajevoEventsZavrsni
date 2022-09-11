import { useEffect, useState } from "react";
import styled from "styled-components";

import { Button } from "components";
import { useEvents } from "hooks";

import NavBar from "../../components/NavBar/NavBar";
import { Event } from "./Event";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-block: 20px;
`;

const StyledEvent = styled(Event)`
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  margin: 0 auto;
  width: 33%;
`;

const Homepage = () => {
  const [params, setParams] = useState({
    pageNumber: 1,
    pageSize: 1,
    sortBy: "popularity",
    order: "desc",
  });
  const { data, isLoading } = useEvents(params);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (data?.list) setEvents((prevState) => [...prevState, ...data.list]);
  }, [data]);

  const isAllLoaded = events.length >= data?.total;

  const loadMore = () => {
    if (isAllLoaded) return;
    setParams((prevState) => ({
      ...prevState,
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  return (
    <Wrapper>
      <NavBar />
      {events.map((e, i) => {
        return <StyledEvent key={`event-${i}`} event={e} />;
      })}
      {!isAllLoaded && (
        <StyledButton onClick={loadMore}>
          {isLoading ? "Loading..." : "Load more"}
        </StyledButton>
      )}
    </Wrapper>
  );
};

export default Homepage;
