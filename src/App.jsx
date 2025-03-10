import React from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./components/Background";

const App = () => {
  return (
    <div className="h-screen">
      <Background />
      <Header />
      <Todo />
      <Footer />
    </div>
  );
};

export default App;
