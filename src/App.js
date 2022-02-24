
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}

export default App;
