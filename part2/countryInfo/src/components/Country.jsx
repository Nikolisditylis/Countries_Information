const Country = ({country, buttonAction}) => {
    return(
        <li>
            {country.name.common}
            <button onClick={buttonAction}> Show </button>
        </li>
    )
}

export default Country;