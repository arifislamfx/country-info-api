import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CountryList.css";

const CountryList = (props) => {
  const { name, flag, region, alpha3Code } = props.country;
  return (
    <Col md={3} className="cart">
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={flag} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Region: {region} </p>
          </Card.Text>
          <Link to={`/info/${alpha3Code}`}>
            <Button variant="primary">More Info</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CountryList;
