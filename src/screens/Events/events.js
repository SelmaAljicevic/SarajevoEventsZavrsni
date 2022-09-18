import { useEffect, useState } from "react";

import { EVENT_TYPES } from "constants/eventTypes.const";
import { Button, Page } from "components";
import styled from "styled-components";
import { useEvents } from "hooks";
import { Event } from "screens/FavoriteEvents/Event";

const StyledButton = styled(Button)`
  width: 200px;

  ${({ isSelected }) =>
    isSelected &&
    `
      color: blue;
      border-color: blue;
    `};
`;

const LeftSection = styled.div`
  & > button {
    margin-top: 10px;
  }
`;

const LoadMoreButton = styled(Button)`
  display: flex;
  justify-content: center;
  width: 33%;
  cursor: pointer;
`;

const LoadMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const EventsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Events = () => {
  const [eventType, setEventType] = useState(EVENT_TYPES.MUSIC);

  const [events, setEvents] = useState([]);

  const [params, setParams] = useState({
    pageNumber: 1,
    pageSize: 5,
    key: "category",
    filter: eventType,
  });

  const { data, isLoading } = useEvents(params);

  useEffect(() => {
    if (data?.list) setEvents((prevState) => [...prevState, ...data.list]);
  }, [data]);

  const changeEvent = (event) => {
    setEventType(event);
    setParams((prevState) => ({
      ...prevState,
      pageNumber: 1,
      filter: event,
    }));

    setEvents([]);
  };

  const isAllLoaded = events.length >= data?.total;

  const loadMore = () => {
    if (isAllLoaded) return;
    setParams((prevState) => ({
      ...prevState,
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  return (
    <Page>
      <div className="thingstodo-wrapper">
        <LeftSection className="left">
          {Object.values(EVENT_TYPES).map((event, i) => (
            <StyledButton
              isSelected={eventType === event}
              key={`event-${i}`}
              onClick={() => changeEvent(event)}
            >
              {event}
            </StyledButton>
          ))}
        </LeftSection>
        <EventsListWrapper className="right">
          {events.map((event, i) => (
            <Event key={`event-${i}`} event={event} />
          ))}
        </EventsListWrapper>
      </div>
      <LoadMoreButtonWrapper>
        {!isAllLoaded && (
          <LoadMoreButton onClick={loadMore}>
            {isLoading ? "Loading..." : "Load more"}
          </LoadMoreButton>
        )}
      </LoadMoreButtonWrapper>
    </Page>
  );
};
