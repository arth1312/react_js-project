import { Container, Row } from 'react-bootstrap'
import './Aboutdisc.css'
import story from '../../assets/images/story.png' 

const AboutDisc = () => {
    return (
        <>
            <div className="aboutdiscover">
                <Container>
                    <Row>
                        <div className="col-12">
                            <div className="aboutdiscover-title text-center">
                                <p className='mb-0'>Discover</p>
                                <h2 className='mb-0'>OUR STORY</h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="aboutdiscover-content text-center">
                                <p className='mb-0'>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                                </p>
                                <div className="aboutdiscover-img">
                                    <img src={story} alt="" />
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default AboutDisc