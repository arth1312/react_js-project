import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './Aboutcusto.css';
import { Container } from 'react-bootstrap';

import customertop from '../../assets/images/customer-top-bg.png';
import customerbottom from '../../assets/images/customer-bottom-bg.png';
import customer from '../../assets/images/customer.png';

const testimonials = [
    {
        name: "JOHN DOE",
        role: "Designer",
        image: customer,
        text: [
            "The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta The one day when the lady met this fellow and they knew it was much "
        ]
    },
    {
        name: "JOHN DOE",
        role: "Designer",
        image: customer,
        text: [
            "The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta The one day when the lady met this fellow and they knew it was much "
        ]
    },
    {
        name: "JOHN DOE",
        role: "Designer",
        image: customer,
        text: [
            "The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta The one day when the lady met this fellow and they knew it was much "
        ]
    }
    
];

const AboutCustomer = () => {
    return (
        <div className="about-custo position-relative">
            <Container>
                <div className="customer-inner">
                    <div className="customer-top-bg">
                        <img src={customertop} alt="Top Background" />
                    </div>

                    <div className="customer-heading text-center">
                        <p className='mb-0'>What Say Our Clients</p>
                        <h2 className='text-uppercase text-white mb-5'>Customer Reviews</h2>
                    </div>

                    <div className="customer-slide">
                        <Swiper
                            direction="vertical"
                            loop={true}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="testimonial-slide">
                                        <div className="testimonial-image-box">
                                            <img src={item.image} alt={item.name} className="testimonial-image" />
                                            <h2 className="testimonial-name">{item.name}</h2>
                                        </div>
                                        <div className="testimonial-content">
                                            <span className='square'></span>
                                            {item.text.map((para, i) => (
                                                <p className="testimonial-text mb-0" key={i}>{para}</p>
                                            ))}
                                            <p className="testimonial-footer mb-0">
                                                {item.name} <span>- {item.role}</span>
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="customer-bottom-bg">
                        <img src={customerbottom} alt="Bottom Background" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutCustomer;
