import React, { useState } from "react";
import styled from "styled-components/macro";
import Form from "./components/Form";
import { State } from "./types";
import { triangleType } from "./utils";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.h1`
  background-color: white;
  min-width: 25%;
  text-align: center;
  padding: 10px 0;
`;

const defaultState = {
  side1: "",
  side2: "",
  side3: "",
  type: "",
};

function App(): JSX.Element {
  const [state, setState] = useState<State>(defaultState);
  const { side1, side2, side3 } = state;

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleCheck = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const type = triangleType(+side1, +side2, +side3);
    setState({
      ...state,
      ...defaultState,
      type,
    });
  };

  return (
    <Wrapper>
      <Header>Triangle Tracker</Header>
      <Form
        handleCheck={handleCheck}
        handleOnchange={handleOnchange}
        side1={side1}
        side2={side2}
        side3={side3}
        setState={() => setState(defaultState)}
      />
      {/* <Form onSubmit={handleCheck}>
        <FormField>
          <Label htmlFor="side1">Side 1:</Label>
          <Input
            type="number"
            name="side1"
            id="side1"
            value={side1}
            onChange={handleOnchange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="side2">Side 2:</Label>
          <Input
            type="number"
            name="side2"
            id="side2"
            value={side2}
            onChange={handleOnchange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="side3">Side 3:</Label>
          <Input
            type="number"
            name="side3"
            id="side3"
            value={side3}
            onChange={handleOnchange}
          />
        </FormField>
        <ButtonGroup>
          <Button width={width} type="submit">
            Check
          </Button>
          <Button
            width={width}
            type="button"
            onClick={() => setState(defaultState)}
          >
            Rest
          </Button>
        </ButtonGroup>
      </Form> */}
    </Wrapper>
  );
}

export default App;
