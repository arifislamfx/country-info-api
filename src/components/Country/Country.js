

const Country = (props) => {
            const {name, capital, population, flag, alpha3Code} = props.country;
            
            const handleAdd = props.handleAdd;
    return (
        <div style = {{border: "3px solid red", maxWidth: "300px", marginTop: "50px", marginLeft: "200px", padding: "20px 0" }}>

            <h2> Unique code: {alpha3Code} </h2>
            <h3>  {name} </h3>
            <h4>Capital is {capital} </h4>
            <h5>population: {population} </h5>
            <img src= {flag} width = "100" height = "100" alt="flag"/> <br/>
            <button onClick={() => handleAdd(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;
