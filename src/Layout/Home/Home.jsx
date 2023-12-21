import Banner from "./Banner/Banner";
import Footer from "../Footer/Footer";
import AudienceSection from "./AudienceSection/AudienceSection";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AudienceSection></AudienceSection>
           <Testimonial></Testimonial>
           <Footer></Footer>
        </div>
    );
};

export default Home;