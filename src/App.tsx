import React from "react";
import { Line, Title } from "./App.style";
import Container from "./Components/Container";
import List from "./Components/List";

function App() {
  return (
    <Container>
      <Title>
        <h1>FAQ</h1>
        <Line />
      </Title>
      <List />
    </Container>
  );
}

export default App;
