import { useApiData } from './hooks/useApiData';
import { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Form from './components/Body/Form/Form';
import Footer from './components/Footer/Footer';
import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay';
import ScaleLoader from "react-spinners/ScaleLoader";

const App = () => {

    const [country, setCountry] = useState('US');
    const { data, loading, error, setError } = useApiData(country);

    return (
        <Router>
            <div className="container">
                <Header />
                <Route path="/country-lookup">
                    {!error && <Form setCountry={setCountry} />}
                    {loading && !error && <ScaleLoader className="loader" loading={loading} />}
                    {!loading && !error && <Body data={data} />}
                </Route>
                {error && <Redirect to="/country-lookup/error" />}
                <Route path="/country-lookup/error">
                    <ErrorDisplay error={error} setError={setError}/>
                </Route>
                <Footer />
            </div>
        </Router>
    )
}

export default App;