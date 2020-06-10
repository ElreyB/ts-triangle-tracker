import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "./styles";

const Wrapper = styled.div`
  text-align: center;
`;

function App(): JSX.Element {
  return (
    <Wrapper className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Wrapper>
  );
}

export default App;
