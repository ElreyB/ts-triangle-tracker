import React, { useState } from "react";
import styled from "styled-components/macro";
import Form from "./components/Form";
import { State } from "./types";
import { triangleType } from "./utils";
import Card from "./components/Card";
import data from "./data";

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
  type: undefined,
};

function App(): JSX.Element {
  const [state, setState] = useState<State>(defaultState);

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleCheck = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { side1, side2, side3 } = state;

    const type = triangleType(+side1, +side2, +side3);
    setState({
      ...state,
      ...defaultState,
      type,
    });
  };
  const { side1, side2, side3, type } = state;
  return (
    <Wrapper>
      {type && type !== "Not a Triangle" ? (
        <Card
          image={data[type as keyof typeof data].image}
          info={data[type as keyof typeof data].info}
          link={data[type as keyof typeof data].link}
          type={type}
          returnHome={() => setState(defaultState)}
        />
      ) : (
        <>
          <Header>Triangle Tracker</Header>
          <Form
            handleCheck={handleCheck}
            handleOnchange={handleOnchange}
            side1={side1}
            side2={side2}
            side3={side3}
            setState={() => setState(defaultState)}
          />
        </>
      )}
    </Wrapper>
  );
}

export default App;
