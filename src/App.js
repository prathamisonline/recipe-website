import "./App.css";
import Pages from "./pages/Pages";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Wrapper>
          <GiKnifeFork />
          <Link to={"/"}>Delicious</Link>
        </Wrapper>
        <Navigation />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  font-size: 2rem;
  margin: 2rem;
  font-family: "Lobster two", cursive;
  text-decoration: none;
`;

export default App;
