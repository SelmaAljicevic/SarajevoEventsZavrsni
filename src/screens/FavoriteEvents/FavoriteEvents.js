import { useEffect, useState } from "react";
import styled from "styled-components";

import { Button } from "components";
import { useEvents } from "hooks";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import { Event } from "./Event";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 40px;
`;

const StyledEvent = styled(Event)`
  margin: 20px;
`;

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  width: 33%;
  cursor: pointer;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FavoriteEvents = () => {
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
    <>
      <NavBar />
      <Wrapper>
        {events.map((e, i) => {
          return <StyledEvent key={`event-${i}`} event={e} />;
        })}
      </Wrapper>
      <StyledButtonWrapper>
        {!isAllLoaded && (
          <StyledButton onClick={loadMore}>
            {isLoading ? "Loading..." : "Load more"}
          </StyledButton>
        )}
      </StyledButtonWrapper>
      <Footer />
    </>
  );
};

export default FavoriteEvents;
