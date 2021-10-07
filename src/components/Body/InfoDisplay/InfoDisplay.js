const InfoDisplay = ({ data }) => {

    return (
        data.map((d, i) => (
            <div className="country-info-display" key={i}>
                <h2>{d.countryName}</h2>
                <h4>Population:</h4>
                <p>{parseInt(d.population).toLocaleString()} people</p>
                <h4>Capital:</h4>
                <p>{d.capital}</p>
                <h4>Currency:</h4>
                <p>{d.currency}</p>
                <h4>Continent:</h4>
                <p>{d.continentName}</p>
                <h4>Area in square kilometers:</h4>
                <p>{`${d.areaInSqKm} km`}</p>
            </div>
            
        ))
    )
}

export default InfoDisplay;