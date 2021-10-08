
import { Link } from 'react-router-dom';

const ErrorDisplay = ({ error, setError }) => {

    //setError(false);

    return (
        <div className="error">
            <h2>There was an error retrieving this information.</h2>
            <h5>Make sure to use the country ISO code and not the full name in the search! (US instead of United States)</h5>
            <p>{error ? error.message : ''}</p>
            <Link to="/country-lookup" className="return-button" onClick={setError(false)} >Return</Link>
        </div>
    )
}

export default ErrorDisplay;