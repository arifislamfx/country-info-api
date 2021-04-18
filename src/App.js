
import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';


function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
    })
    .catch(err => {
      console.log(err.message);
    })
  }, [])

  const handleAdd = (country) => {
    console.log('add cliked', country)
  }

  return (
    <div className="App">
      <h1>Hello world!</h1>
    <h1>Total country: {countries.length} </h1>

    <ul>
      {
        countries.map(country => <Country country = {country} handleAdd = {handleAdd} key = {country.alpha3Code}> </Country>)
      }
    </ul>

    </div>
  );
}

export default App;
