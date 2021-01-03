import React, { useState } from "react";
import "./styles.css";

var fruitionary = {
  "🍎": "Apple",
  "🍉": "Watermelon",
  "🍌": "Banana",
  "🥭": "Mango",
  "🍓": "Strawberry",
  "🥝": "Kiwi",
  "🍇": "Grapes",
  "🍍": "Pineapple",
  "🍐": "Pear",
  "🍒": "Cherries"
};

var FruitsWeKnow = Object.keys(fruitionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function fruitInputHandler(event) {
    var userInput = event.target.value;
    var meaning = fruitionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have that in our database!";
    }
    setMeaning(meaning);
  }

  function FruitClickHandler(fruit) {
    var meaning = fruitionary[fruit];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>
        <strong>
          <span role="img" aria-label="search">
            {" "}
            &#128269;
          </span>{" "}
          Search fruit
        </strong>
      </h1>
      <br />
      <input onChange={fruitInputHandler}></input>
      <h2> {meaning} </h2>
      <br />
      <h3>Fruits we know</h3>

      {FruitsWeKnow.map(function (fruit) {
        return (
          <span
            className="FruitsWeKnow"
            onClick={() => FruitClickHandler(fruit)}
            key={fruit}
          >
            {fruit}
          </span>
        );
      })}
    </div>
  );
}
