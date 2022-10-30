import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
// import katie from "./images/image 12.png";
// import bride from "./images/wedding-photography 1.png";
// import bike from "./images/mountain-bike 1.png";
import Card from "./components/Card.js";
import data from "./data.js";

function App() {
  const cards = data.map(item => {
    return (
      <Card
        img = {item.img}
        score = {item.stats.score}
        review_count = {item.stats.review_count}
        country = {item.country}
        title = {item.title}
        price = {item.price}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="card_container">
        {cards}
      </div>
    </div>
  );
}

export default App;
