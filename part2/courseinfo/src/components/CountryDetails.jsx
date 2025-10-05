const CountryDetails = ({country}) => {
    return(
        <div>
            <h1> {country.name.official} </h1>
            Capital : {country.capital}
            <br></br>Area : {country.area}

            <h2>Languages</h2>
            <ul> {Object.values(country.languages).map(
                language => <li key={language}> {language} </li>
            )} </ul>

            <img src={`${country.flags.png}`} />
        </div>
    )
}

export default CountryDetails