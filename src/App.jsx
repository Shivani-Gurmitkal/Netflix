import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Movies from "./pages/Movies";
import Videos from "./pages/Videos";
import Error from "./pages/Error";

function App(){
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:slug" element={<Details />} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/videos/:slug" element={<Videos/>} />
      <Route path="*" element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App;