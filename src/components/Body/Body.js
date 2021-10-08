import InfoDisplay from './InfoDisplay/InfoDisplay';
import './styles.css';

const Body = ({ data }) => {

    return (
        <div className="body">
            <InfoDisplay data={data} />
        </div>
    )
}

export default Body;