import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Movies from "./pages/Movies";
import Videos from "./pages/Videos";

function App(){
  return (
    <>

    {/* <NavBar/> */}

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:slug" element={<Details />} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/videos/:slug" element={<Videos/>} />
    </Routes>
    </>
  )
}

export default App;