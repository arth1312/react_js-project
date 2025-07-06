import Aboutbanner from './Aboutbanner/Aboutbanner';
import AboutCustomer from './Aboutcustomer/Aboutcusto';
import AboutDisc from './Aboutdiscover/Aboutdisc';
import Aboutexpir from './AboutExp/Aboutexp';
import Aboutbook from './Aboutonline/Aboutbook';
import Aboutres from './Aboutrestaurant/Aboutres';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const AboutUs = () => {
    return (
        <>
            <Header />
            <Aboutbanner />
            <Aboutres />
            <AboutDisc />
            <Aboutexpir />
            <AboutCustomer />
            <Aboutbook />
            <Footer />
        </>
    )
}
export default AboutUs;