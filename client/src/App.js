import React from "react";
import Task from "./pages/Task";
import { BrowserRouter } from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";


const App = () => {
  return (
    <BrowserRouter>
      <Task />
      {/* <NavBar />
      <AppRouter /> */}
    </BrowserRouter>
  )
}

export default App