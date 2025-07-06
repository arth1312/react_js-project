import { Col, Container, Row } from 'react-bootstrap';
import aboutexp from '../../assets/images/about-experince.jpg'
import './Aboutexp.css'
import { BsPlayFill } from "react-icons/bs";

const Aboutexpir = () => {
    return (
        <>
            <div className="about-expi">
                <Container>
                    <Row>
                        <div className="about-expi-inner d-flex flex-wrap align-items-center">
                            <Col xs={12} lg={6}>
                                <div className="about-expi-img position-relative ">
                                    <img src={aboutexp} alt="" />
                                    <a href="#" className='play-icon'>
                                        <span>
                                            <BsPlayFill className='play' />
                                        </span>
                                    </a>
                                </div>
                            </Col>
                            <Col xs={12} lg={6}>
                                <div className="about-expi-content">
                                    <div className="about-expi-title">
                                        <p className='mb-0'>Modern Cuisine</p>
                                        <h2 className='text-uppercase mb-0'>Experience</h2>
                                    </div>
                                    <div className="about-expi-des">
                                        <p className='mb-0'>
                                            Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet.
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
export default Aboutexpir;