import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
