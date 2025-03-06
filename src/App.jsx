import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Movies from "./pages/Movies";
import Videos from "./pages/Videos";
import Error from "./pages/Error";
import Hero from "./pages/Hero";
import Signin from "./pages/Signin"

function App(){
  return (
    <>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/home" element={<Home />} />
      <Route path="/details/:slug" element={<Details />} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/videos/:slug" element={<Videos/>} />
      <Route path="*" element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App;