import styled from "styled-components";

import { Button, Page, Input, Error } from "components";
import { useCreateEvent } from "hooks";
import { EVENT_TYPES } from "constants/eventsTypes.const";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

const RadioWrapper = styled.div`
  display: flex;
`;

export const AddEvents = () => {
  const { createEventAsync, isSuccess, error } = useCreateEvent();

  const onSave = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const place = e.target.place.value;
    const description = e.target.description.value;
    const image_url = e.target.image_url.value;
    const category = e.target.category.value;
    const popularity = e.target.popularity.value;

    try {
      const res = createEventAsync({
        name,
        place,
        description,
        image_url,
        category,
        popularity,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Page>
      <Wrapper>
        <h3>Login</h3>
        <FormWrapper onSubmit={onSave}>
          <label>Name</label> <Input type="text" name="name" required />
          <label>Place</label> <Input type="text" name="place" required />
          <label>Description</label> <Input type="text" name="description" />
          <label>Image (url link)</label>
          <Input type="text" name="image_url" />
          <label>
            <strong>Category</strong>
          </label>
          {Object.values(EVENT_TYPES).map((e, i) => {
            return (
              <RadioWrapper key={`category-${i}`}>
                <label>{e}</label>
                <Input type="radio" name="category" value={e} />
              </RadioWrapper>
            );
          })}
          <label>Popularity (0 - 1)</label>
          <Input
            type="number"
            min="0"
            step="0.1"
            max="1"
            name="popularity"
            required
          />
          <Button style={{ marginBottom: 10 }} type="submit">
            Add event
          </Button>
        </FormWrapper>
        {isSuccess && "Event created!"}
        <Error>{error?.message}</Error>
      </Wrapper>
    </Page>
  );
};
