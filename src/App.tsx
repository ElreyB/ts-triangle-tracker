import React from "react";
import styled from "styled-components/macro";
import Form from "./components/Form";
import { connect } from "react-redux";
import { TType, State } from "./types";
import Card from "./components/Card";

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

type Props = {
  type?: TType;
};

function App({ type }: Props): JSX.Element {
  return (
    <Wrapper>
      {type ? (
        <Card />
      ) : (
        <>
          <Header>Triangle Tracker</Header>
          <Form />
        </>
      )}
    </Wrapper>
  );
}

const mapStateToProps = (state: State): Props => {
  return { type: state.type };
};
export default connect(mapStateToProps)(App);
