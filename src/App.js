import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/pages/Home/Home";
import Table from "./components/pages/Table/Table";

function App() {
  return (
    <main>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<Table />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
