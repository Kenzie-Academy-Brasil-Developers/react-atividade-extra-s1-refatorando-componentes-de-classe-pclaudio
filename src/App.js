import { useState } from "react";
import DisplayWeather from "./components/DisplayWeather";
import SearchWeather from "./components/SearchWeather";
import "./App.css";

const App = () => {
  const [ weather, setWeather ] = useState({});
  const [ city, setCity ] = useState('');

  const handleChangeWeather = (weather, city) => {
    setWeather(weather);
    setCity(city);
  };

  return (
    <div className="App">
      <SearchWeather handleChangeWeather={ handleChangeWeather } />
      <DisplayWeather info={{ weather, city }} />
    </div>
  );
}

export default App;