import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import katie from "./images/image 12.png";
import bride from "./images/wedding-photography 1.png";
import bike from "./images/mountain-bike 1.png";
import Card from "./components/Card.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="card_container">
        <Card 
          img={katie}
          score="5.0"
          review_count={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price="136"
        />
        <Card 
          img={bride}
          score="5.0"
          review_count={30}
          country="USA"
          title="Learn Wedding Photography"
          price="215"
        />
        <Card 
          img={bike}
          score="4.8"
          review_count={2}
          country="USA"
          title="Group Mountain Biking"
          price="50"
        />
      </div>
    </div>
  );
}

export default App;
