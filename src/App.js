import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {NavBar} from "./components/Navbar"
import Footer from "./components/Footer"
import {Category} from "./Pages/Category"

import "./App.css"

function App() {
  return (
    <div className="App" style={{ position: "relative", minHeight: "100vh" }}>
      <NavBar/>
      <Footer/>
    </div>
  );
}

export default App;
