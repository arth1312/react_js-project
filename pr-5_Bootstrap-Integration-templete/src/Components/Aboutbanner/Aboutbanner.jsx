import './Aboutbanner.css';
import { Container, Row } from 'react-bootstrap';
import Aboutbanner from '../../assets/images/about-banner.jpg';

const AboutBanner = () => {
    return (
        <>
            <div className="about-banner position-relative">
                <div className="about-img">
                    <img src={Aboutbanner} alt="About Banner" />
                </div>
                <Container>
                    <Row>
                        <div className="col-12">
                            <div className="about-title text-white position-absolute top-50 start-50 translate-middle text-center">
                                <h1 className="text-uppercase">About Us</h1>
                                <ul className="d-flex justify-content-center list-unstyled gap-2">
                                    <li>Home</li>
                                    <li>/</li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default AboutBanner;