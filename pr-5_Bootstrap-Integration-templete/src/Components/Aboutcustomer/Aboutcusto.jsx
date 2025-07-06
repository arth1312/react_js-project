import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import './Aboutcusto.css'
import { Container } from 'react-bootstrap';
import customertop from '../../assets/images/customer-top-bg.png'
import customerbottom from '../../assets/images/customer-bottom-bg.png'
import customer from '../../assets/images/customer.png'

const AboutCustomer = () => {
    return (
        <>
            <div className="about-custo position-relative">
                <Container>
                    <div className="customer-inner">
                        <div className="customer-top-bg">
                            <img src={customertop} alt="" />
                        </div>
                        <div className="customer-heading text-center">
                            <p className='mb-0'>What Say Our Clients</p>
                            <h2 className='text-uppercase text-white mb-5'>Customer Reviews</h2>
                        </div>
                        <div className="customer-slide">
                            <Swiper
                                direction={'vertical'}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="testimonial-slide">
                                        <div className="testimonial-image-box">
                                            <img src={customer} alt="John Doe" className="testimonial-image" />
                                            <h2 className="testimonial-name">JOHN DOE</h2>
                                        </div>
                                        <div className="testimonial-content">
                                            <span className='square'></span>
                                            <p className="testimonial-text mb-0">
                                                The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta
                                            </p>
                                            <p className="testimonial-text mb-0">
                                                The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta
                                            </p>
                                            <p className="testimonial-text mb-0">
                                                The one day when the lady met this fellow and they knew it was much
                                            </p>
                                            <p className="testimonial-footer mb-0">
                                                JOHN DOE <span className='mb-0'>- designer</span>
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-slide">
                                        <div className="testimonial-image-box">
                                            <img src={customer} alt="John Doe" className="testimonial-image" />
                                            <h2 className="testimonial-name">JOHN DOE</h2>
                                        </div>
                                        <div className="testimonial-content">
                                            <span className='square'></span>
                                            <p className="testimonial-text mb-0">
                                                The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta
                                            </p>
                                            <p className="testimonial-text mb-0">
                                                The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta
                                            </p>
                                            <p className="testimonial-text mb-0">
                                                The one day when the lady met this fellow and they knew it was much
                                            </p>
                                            <p className="testimonial-footer mb-0">
                                                JOHN DOE <span className='mb-0'>- designer</span>
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-slide">
                                        <div className="testimonial-image-box">
                                            <img src={customer} alt="John Doe" className="testimonial-image" />
                                            <h2 className="testimonial-name">JOHN DOE</h2>
                                        </div>
                                        <div className="testimonial-content">
                                            <span className='square'></span>
                                            <p className="testimonial-text mb-0">
                                                The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta
                                            </p>
                                            <p className="testimonial-text mb-0">
                                                The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta
                                            </p>
                                            <p className="testimonial-text mb-0">
                                                The one day when the lady met this fellow and they knew it was much
                                            </p>
                                            <p className="testimonial-footer mb-0">
                                                JOHN DOE <span className='mb-0'>- designer</span>
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="customer-bottom-bg">
                            <img src={customerbottom} alt="" />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default AboutCustomer;