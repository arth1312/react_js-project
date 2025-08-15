import { Col, Container, Row } from "react-bootstrap"
import banner1 from '../assets/img/Group.jpg'
import banner2 from '../assets/img/pharmacy.jpg'
import banner3 from '../assets/img/Pet-Care.jpg'
import banner4 from '../assets/img/babycare.jpg'

const Banner = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <img src={banner1} alt="" className="w-100" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={banner2} alt="" className="w-100" />
                    </Col>
                    <Col>
                        <img src={banner3} alt="" className="w-100" />
                    </Col>
                    <Col>
                        <img src={banner4} alt="" className="w-100" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Banner