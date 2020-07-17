import React, { useState } from "react";
import { Dispatch } from "redux";
import styled from "styled-components/macro";
import { connect } from "react-redux";
import { getTriangle } from "../../actions";
import { Sides } from "../../types";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
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

const defaultState = {
  side1: "",
  side2: "",
  side3: "",
};

function Form({
  getTriangle,
}: ReturnType<typeof mapDispatchToProps>): JSX.Element {
  const [state, setState] = useState<Sides>(defaultState);

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleCheck = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getTriangle(state);
    setState(defaultState);
  };
  const { side1, side2, side3 } = state;
  return (
    <StyledForm onSubmit={handleCheck}>
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
        <Button width={25} type="submit">
          Check
        </Button>
        <Button width={25} type="button" onClick={() => setState(defaultState)}>
          Rest
        </Button>
      </ButtonGroup>
    </StyledForm>
  );
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    getTriangle: (sides: Sides) => dispatch(getTriangle(sides)),
  };
}
export default connect(null, mapDispatchToProps)(Form);
