import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { fetchTables } from "./redux/tablesRedux";
import { useDispatch } from "react-redux";
import Home from "./components/pages/Home/Home";
import Table from "./components/pages/Table/Table";
import NavBar from "./components/views/NavBar/NavBar";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect( () => dispatch(fetchTables()), [dispatch])

  return (
    <main>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<Table />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
