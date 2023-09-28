import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing our pages
import Home from "./Home";
import Single from "./Single";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Single />} path="/anime/:id" />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
