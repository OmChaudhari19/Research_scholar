import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sign from "./components/Sign";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Sign/>}/>
      </Routes>
    </>
  );
}

export default App;
