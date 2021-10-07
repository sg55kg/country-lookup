import Form from './Form/Form';
import InfoDisplay from './InfoDisplay/InfoDisplay';
import './styles.css';

const Body = ({ data, setCountry }) => {

    return (
        <div className="body">
            <Form setCountry={setCountry} />
            <InfoDisplay data={data} />
        </div>
    )
}

export default Body;