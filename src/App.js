import React from "react";
import Nav from "./nav";
import Card from "./card";
import data from "./data";
import "./style.css";

function App() {
  const card = data.map((info) => {
    return <Card key={info.id} {...info} />;
  });

  return (
    <div>
      <Nav />
      <section className="card_list">{card}</section>
    </div>
  );
}

export default App;
