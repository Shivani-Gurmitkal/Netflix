import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App(){
  return (
    <>

    {/* <NavBar/> */}

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:slug" element={<Details />} />
    </Routes>
    </>
  )
}

export default App;