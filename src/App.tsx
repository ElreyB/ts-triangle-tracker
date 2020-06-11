import React, { useState } from "react";
import styled from "./styles";

const Wrapper = styled.div`
  text-align: center;
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
  if (side1 + side2 > side3 || side1 + side3 > side2 || side2 + side3 > side1) {
    type = "Not a Triangle";
  } else if (side1 === side2 && side2 === side3) {
    type = "equilateral";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    type = "sosceles";
  } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
    type = "scalene";
  }
  return type;
}

function App(): JSX.Element {
  const [state, setState] = useState<State>(defaultState);
  const { side1, side2, side3 } = state;

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleCheck = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { side1, side2, side3 } = state;
    setState({
      ...state,
      ...defaultState,
      type: triangleType(+side1, +side2, +side3),
    });
  };

  console.log(state);
  return (
    <Wrapper>
      <label htmlFor="side1">Side 1:</label>
      <input
        type="number"
        name="side1"
        id="side1"
        value={side1}
        onChange={handleOnchange}
      />
      <label htmlFor="side2">Side 2:</label>
      <input
        type="number"
        name="side2"
        id="side2"
        value={side2}
        onChange={handleOnchange}
      />
      <label htmlFor="side3">Side 3:</label>
      <input
        type="number"
        name="side3"
        id="side3"
        value={side3}
        onChange={handleOnchange}
      />
      <button onClick={handleCheck}>Check</button>
      <button>Rest</button>
    </Wrapper>
  );
}

export default App;
