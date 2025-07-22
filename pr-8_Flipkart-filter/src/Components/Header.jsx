import './product.css'
import { Link } from 'react-router-dom';
import { FaSquarePlus } from "react-icons/fa6";
import FlipCardlogo from "../assets/img/Flip_Card_logo.svg";
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <header className="header-container shadow-sm">
                <Container>
                    <div className="header-top d-flex">
                        <div className="logo-search">
                            <Link to="/" className="logo pe-3">
                                <img src={FlipCardlogo} alt="Flip_Card" />
                            </Link>
                        </div>
                        <div className="header-actions">
                            <Navbar expand="md" variant="light">
                                <Nav className='d-flex align-items-start'>
                                    <Link to={"/add-product"} className="d-flex align-items-center text-dark text-decoration-none">
                                        <FaSquarePlus className='fs-4' />
                                        <span className='ps-1'>Add Product</span>
                                    </Link>
                                </Nav>
                            </Navbar>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}
export default Header;