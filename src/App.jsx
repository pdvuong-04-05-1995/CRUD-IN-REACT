import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListUsers from "./crud/ListUsers";
import AddUser from "./crud/AddUser";
import UpdateUser from "./crud/UpdateUser";
import ReadUsers from "./crud/ReadUsers";
import HomePage from "./HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={HomePage} />
          <Route path="user">
            <Route index element={<ListUsers />} />
            <Route path="add" element={<AddUser />} />
            <Route path="update/:id" element={<UpdateUser />} />
            <Route path="read/:id" element={<ReadUsers />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
