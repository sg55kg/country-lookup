import { useApiData } from './hooks/useApiData';
import { useState } from 'react';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay';
import ScaleLoader from "react-spinners/ScaleLoader";

const App = () => {

    const [country, setCountry] = useState('US');
    const { data, loading, error } = useApiData(country);

    return (
        <div className="container">
            <Header />
            {loading && !error && <ScaleLoader className="loader" loading={loading} />}
            {error && <ErrorDisplay error={error} />}
            {!loading && !error && <Body data={data} setCountry={setCountry} />}
            <Footer />
        </div>
    )
}

export default App;