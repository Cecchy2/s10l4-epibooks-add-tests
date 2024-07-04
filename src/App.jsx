import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";

import BookList from "./components/BookList";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Container fluid>
        <Welcome />
        <h1>Questo e il mio primo test</h1>
        <BookList />
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
