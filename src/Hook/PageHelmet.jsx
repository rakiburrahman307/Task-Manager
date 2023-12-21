import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const PageHelmet = ({ title }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
        </Helmet>
    );
};
PageHelmet.propTypes = {
    title: PropTypes.string
}
export default PageHelmet;