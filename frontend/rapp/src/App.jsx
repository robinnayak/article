import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Article from "./Article";
// import Articlelist from "./Articlelist"
import Base from "./base";
import Navbar from "./Navbar";
import "./App.css";
// import Delete from "./component/pages.jsx/Delete";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="items">
        {/* <Articlelist/> */}
        {/* <Article/> */}
        {/* <Delete/> */}

        <Base />
      </div>
    </>
  );
}
