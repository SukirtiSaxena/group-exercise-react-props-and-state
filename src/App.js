import './App.css';
import React, { useState } from 'react';
import ChuckCard from './Components/ChuckCard';
import ChuckJokes from './Components/ChuckJokes';
import ChuckInfo from './Components/ChuckInfo';

function App() {

  const [chuckGreeting, setChuckGreeting] = useState("I am Chuck Norris!!!")
  const [chuckImage, setChuckImage] = useState("https://images-global.nhst.tech/image/R1dwYnJhOTc5RjNCTG5URi9BMUlIZGE5cTRtemFrUWFBSVNINUMvZ20xZz0=/nhst/binary/f1ffde963b9087457feb601be1842d16?image_version=1200")
  const [whalesSaved, setWhalesSaved] = useState(700)
  const [roundHouseKicks, setRoundHouseKicks] = useState(300000)
  const [jokes, setJokes] = useState([{
    "id": 1,
    "joke": "Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.",
  },
  {
    "id": 2,
    "joke": "Time waits for no man. Unless that man is Chuck Norris.",
  },
  {
    "id": 3,
    "joke": "The dinosaurs looked at Chuck Norris the wrong way once. You know what happened to them.",
  },
  {
    "id": 4,
    "joke": "Chuck Norris does not own a stove, oven, or microwave, because revenge is a dish best served cold.",
  }])

  return (
    <div className="App">

      <h1>React props and state</h1>
      <ChuckCard chuckGreeting={chuckGreeting} chuckImage={chuckImage} />

      <h2>Chuck Info: </h2>
      <ChuckInfo />

      <h2>Jokes: </h2>

    </div>
  );
}

export default App;
