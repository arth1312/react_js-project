import { Col, Container, Row } from 'react-bootstrap';
import './Aboutres.css';
import aboutRestaurant from '../../assets/images/about-restaurant.jpg';

const Aboutres = () => {
    return (
        <>
            <div className="about-rest">
                <Container>
                    <Row>
                        <div className="about-rest-inner d-flex flex-wrap align-items-center">
                            <Col xs={12} lg={6}>
                                <div className="about-rest-img">
                                    <img src={aboutRestaurant} alt="" width={512}/>
                                </div>
                            </Col>
                            <Col xs={12} lg={6}>
                                <div className="about-rest-content">
                                    <div className="about-rest-title">
                                        <p className='mb-0'>Delicious Restaurant</p>
                                        <h2 className='text-uppercase mb-0'>about pizzon</h2>
                                    </div>
                                    <div className="about-rest-des">
                                        <p className='mb-0'>
                                            Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo  cursus aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Aboutres;