import "./App.scss";
import Intro from "./components/layers/Intro";
import Pricing from "./components/layers/Pricing";
import Benefits from "./components/layers/Benefits";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Intro />

        <Pricing />
      </Container>
      <Container>
        <Benefits />
      </Container>
    </div>
  );
}

export default App;
