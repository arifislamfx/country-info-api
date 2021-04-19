
    import { useEffect, useState } from 'react';
    import './App.css';
import Cart from './components/Cart/Cart';
    import Country from './components/Country/Country';


    function App() {

      const [countries, setCountries] = useState([]);
      const [cart, setCart] = useState([]);

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
        const newCountry = [...cart, country];
            setCart(newCountry);
      }

      return (
        <div className="App">
          <h1>Hello world!</h1>
        <h1>Total country: {countries.length} </h1>
        <h3>Country added: {cart.length} </h3>

        <Cart cart = { cart } />

        <ul>
          {
            countries.map(country => <Country country = {country} handleAdd = {handleAdd} key = {country.alpha3Code}> </Country>)
          }
        </ul>

        </div>
      );
    }

    export default App;
