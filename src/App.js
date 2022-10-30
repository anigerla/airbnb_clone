import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import data from "./data.js";

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key = {item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
