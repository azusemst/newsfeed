import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Feed from "./pages/Feed";
import Edit from "./pages/Edit";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
