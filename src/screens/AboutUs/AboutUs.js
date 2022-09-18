import styled from "styled-components";

import { Page } from "components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-inline: 10%;
  height: 500px;
`;

export const AboutUs = () => {
  return (
    <Page>
      <Wrapper>
        <h1>About us</h1>
        <p>
          Find out what's on in Sarajevo, There are countless events in Sarajevo
          from genres like sport, cinema, theatre, music to dance ; you can find
          your pick and have the best time of your life.
        </p>
        <p>
          Check out some amazing events in Sarajevo to take away all the fun
          experiences. There can be a lot that the city might be offering but
          all the events in Sarajevo make it unique, distinctive and different
          from others.
        </p>
        <p>
          You can look for all the things to do in Sarajevo and soak in the
          culture and entertainment scene here. Come and have a taste of
          Sarajevo whilst you are mesmerized while you are discovering and
          digging in the details.
        </p>
        <p>
          With Sarajevoevents find out all your weekend getaways, things to do
          in Sarajevo and all the upcoming events near you.
        </p>
      </Wrapper>
    </Page>
  );
};
