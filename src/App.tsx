import React, { useState } from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  border: 1px solid black;
  min-height: 200px;
  min-width: 300px;
  background-color: white;
  padding: 10px;
`;

const FormField = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid black;
`;

const Label = styled.label`
  display: block;
  width: 100%;
`;

const Button = styled.button<{ width: number }>`
  width: ${({ width }) => `${width}%`};
  padding: 5px;
  font-size: 18px;
  border-radius: 10px;
  border: 1px solid black;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type State = {
  side1: string;
  side2: string;
  side3: string;
  type: string;
};

const defaultState = {
  side1: "",
  side2: "",
  side3: "",
  type: "",
};

function triangleType(side1: number, side2: number, side3: number): string {
  let type = "";
  if (side1 === side2 && side2 === side3) {
    type = "equilateral";
  } else if (
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1
  ) {
    type = "Not a Triangle";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    type = "sosceles";
  } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
    type = "scalene";
  }
  return type;
}

function App({ width = 25 }: { width?: number }): JSX.Element {
  const [state, setState] = useState<State>(defaultState);
  const { side1, side2, side3 } = state;

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

  return (
    <Wrapper>
      <Form onSubmit={handleCheck}>
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
      </Form>
    </Wrapper>
  );
}

export default App;
