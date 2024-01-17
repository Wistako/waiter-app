import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { fetchTables } from "./redux/tablesRedux";
import { useDispatch } from "react-redux";
import Home from "./components/pages/Home/Home";
import TablePage from "./components/pages/TablePage/TablePage";
import NavBar from "./components/views/NavBar/NavBar";

function App() {
  const dispatch = useDispatch();
  useEffect( () => dispatch(fetchTables()), [dispatch])

  return (
    <main>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<TablePage />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
