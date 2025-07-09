import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import logo from '../../assets/images/header.png';
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import './Header.css';

const Header = () => {
    return (
        <Navbar expand="lg" className="sticky-top main-navbar" style={{ backgroundColor: '#121619' }}>
            <Container fluid className="px-4" style={{ maxWidth: '1200px' }}>
                <Navbar.Brand href="#" className="me-lg-5">
                    <img src={logo} alt="header-logo" width={150} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarResponsive" className="navbar-toggler-custom d-lg-none" />

                <Navbar.Collapse id="navbarResponsive">
                    <Nav className="index-header mx-lg-auto">
                        <Nav.Link href="#home" className="nav-link">Home</Nav.Link>

                        <NavDropdown title="Menu" id="menu-dropdown" className="nav-link-custom dropdown-custom">
                            <NavDropdown.Item href="#menu-list">Menu list</NavDropdown.Item>
                            <NavDropdown.Item href="#menu-grid">Menu grid</NavDropdown.Item>
                            <NavDropdown.Item href="#special-pizza">Special Pizza</NavDropdown.Item>
                            <NavDropdown.Item href="#all-pizza">All pizza</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Blog" id="blog-dropdown" className="nav-link-custom dropdown-custom">
                            <NavDropdown.Item href="#blog-left">Blog Leftside</NavDropdown.Item>
                            <NavDropdown.Item href="#blog-right">Blog Rightside</NavDropdown.Item>
                            <NavDropdown.Item href="#blog-detail">Blog Detail</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#reservation" className="nav-link">Reservation</Nav.Link>

                        <NavDropdown title="Pages" id="pages-dropdown" className="nav-link-custom dropdown-custom">
                            <NavDropdown.Item href="#about-us">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
                            <NavDropdown.Item href="#shop-grid">Shop Grid</NavDropdown.Item>
                            <NavDropdown.Item href="#404">404</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <div className="d-none d-lg-flex align-items-center ms-lg-auto">
                        <div className="d-flex align-items-center gap-3 icon-box">
                            <div className="d-flex align-items-center text-white phone-icon-hover contact-info">
                                <IoCallOutline className="me-2 header-icon" />
                                <span>+91 123 456 789</span>
                            </div>
                            <div className="d-flex align-items-center text-white bag-icon-hover contact-info">
                                <HiOutlineShoppingBag className="me-2 header-icon" />
                                <span>0 items - <span className="ms-1">$0.00</span></span>
                            </div>
                            <button className="order-button">ORDER ONLINE</button>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;