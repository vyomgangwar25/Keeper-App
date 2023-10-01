import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CreateArea from "./Components/CreateArea";
import "./Style.css";
function App() {
  return (
    <div className="App">
       <Header/>
       <Footer/>
       <CreateArea/>
    </div>
  );
}

export default App;
