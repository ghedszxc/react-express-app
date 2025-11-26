// import React from "react";
import { Routes, Route } from "react-router";

// Components
import TopNav from "./components/topNav";
import Default from "./pages/default";
import Login from "./pages/login";
import User from "./pages/user";

function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
