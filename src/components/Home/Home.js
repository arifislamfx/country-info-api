import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CountryList from "../CountryList/CountryList";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://restcountries.eu/rest/v2/all";

    axios(url)
      .then((data) => {
        setCountries(data.data);
        setPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setPending(false);
      });
  }, []);

  const textStyle = {
    textAlign: "center",
    color: "red",
    letterSpacing: "0.8px",
    margin: "30px",
  };

  return (
    <Container>
      <h1>{error && <div>{error}</div>}</h1>
      <h3 className="text-center lead mt-5">
        {" "}
        {isPending && <div>Loading...</div>}{" "}
      </h3>
      <h2 style={textStyle}>List of Countries of the world......</h2>
      <Row>
        {countries.map((country) => (
          <CountryList country={country} key={country.alpha3Code}></CountryList>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
