import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const CountryInfo = () => {
  const { countryId } = useParams();
  const history = useHistory();

  const [country, setCountry] = useState([]);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/alpha/${countryId}`;

    axios(url)
      .then((data) => {
        setCountry(data.data);
        setPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setPending(false);
      });
  }, [countryId]);

  const goBack = () => {
    history.push("/");
  };

  return (
    <div className="text-center">
      <h1>{error && <div>{error}</div>}</h1>
      <h3 className="text-center lead mt-5">
        {" "}
        {isPending && <div>Loading...</div>}{" "}
      </h3>
      <img src={country.flag} width={200} height={200} alt="flag" />
      <h2>Name: {country.name} </h2>
      <h6>Capital: {country.capital} </h6>
      <h6>Region: {country.region} </h6>
      <h6>Population: {country.population} </h6>
      <h6>Area: {country.area} </h6>
      <h6>Currencies: {country?.currencies?.[0].name} </h6>
      <Button onClick={() => goBack()}>Go Back</Button>
    </div>
  );
};

export default CountryInfo;
