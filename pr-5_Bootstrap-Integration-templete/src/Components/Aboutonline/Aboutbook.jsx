import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Aboutbook.css'
import call from '../../assets/images/online-call.png'


const Aboutbook = () => {
    return (
        <>
            <div className="about-book">
                <Container>
                    <Row>
                        <div className="about-book-inner d-flex flex-wrap align-items-center">
                            <Col xs={12} md={6}>
                                <div className="about-book-content">
                                    <div className="about-book-heading">
                                        <p className='mb-0'>Fresh From Pizzon</p>
                                        <h2 className='mb-0 text-uppercase'>BOOK ONLINE</h2>
                                    </div>
                                    <div className="about-book-des">
                                        <p className='mb-0'>
                                            Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur
                                        </p>
                                    </div>
                                    <a href="#" className='online-call'>
                                        <img src={call} alt="" />+ 91 123 456 789 0
                                    </a>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="book-form">
                                    <h2 className='text-uppercase text-center'>Book a table</h2>
                                    <Form>
                                        <Form.Group className='form-group'>
                                            <Form.Control type="text" placeholder="Name" className='name' />
                                        </Form.Group>
                                        <Form.Group className='form-group'>
                                            <Form.Control type="email" placeholder="Email" className='email' />
                                        </Form.Group>
                                        <Form.Select className='form-group person'>
                                            <option value="Person5">Person 5</option>
                                            <option value="Person4">Person 4</option>
                                            <option value="Person3">Person 3</option>
                                        </Form.Select>
                                        <Form.Group className='form-group'>
                                            <Form.Control type="text" placeholder="Date" className='date' />
                                        </Form.Group>
                                        <div className='form-button d-flex justify-content-center'>
                                            <Button type="submit" className='booknow text-white'>BOOK NOW</Button>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Aboutbook;