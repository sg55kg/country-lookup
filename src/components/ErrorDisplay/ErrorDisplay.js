
const ErrorDisplay = ({ error }) => {

    

    return (
        <div className="error">
            <h2>There was an error retrieving this information.</h2>
            <h5>Make sure to use the country ISO code and not the full name in the search! (US instead of United States)</h5>
            <p>{error.message}</p>
            <button onClick={console.log('test')}>Return</button>
        </div>
    )
}

export default ErrorDisplay;