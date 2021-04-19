

const Country = (props) => {
            const {name, capital, population, flag, alpha3Code, region} = props.country;
            
            const handleAdd = props.handleAdd;

    return (
        <div style = {{maxWidth: "200px", display: "flex", flexDirection: "row", margin: "0 auto"}}>
            <div style = {{border: "3px solid red", margin: "10px", padding: "10px" }} >
            <p> Unique code: {alpha3Code} </p>
            <h3>  {name} </h3>
            <h4>Capital is {capital} </h4>
            <h5>population: {population} </h5>
            <p>region : {region} </p>
            <img src= {flag} width = "50" height = "50" alt="flag"/> <br/>
            <button onClick={() => handleAdd(props.country)}>Add Country</button>
            </div>
        </div>
    );
};

export default Country;
