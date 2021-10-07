const Form = ({ setCountry }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setCountry(e.target.elements.country.value);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h4>Enter a country (US, UK, CAN, etc):</h4>
            <input type="text" name="country" />
            <button type="submit">Search Countries</button>
        </form>
    )
}

export default Form;