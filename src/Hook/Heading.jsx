
import { PropTypes } from 'prop-types';
const Heading = ({heading, subHeading}) => {
    return (
        <div>
         <h2 className="text-4xl text-center font-bold text-[#FFD700]">{heading}</h2>
         <p className="text-center font-bold">{subHeading}</p>
        </div>
    );
};
Heading.propTypes ={
    heading: PropTypes.string,
    subHeading: PropTypes.string
}
export default Heading;