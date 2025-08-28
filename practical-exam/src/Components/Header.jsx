import { Navbar, Nav } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { FaSquarePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpg'
import './Header.css';

const MovieHeader = () => {
    return (
        <Navbar bg="white" expand="lg" className="header py-2">
            <Navbar.Brand as={Link} to="/" className="me-lg-4">
                <img src={logo} alt="" width={85} />
            </Navbar.Brand>


            <Nav className="ms-auto align-items-center">
                <Nav.Link as={Link} to="/login" className="d-none d-md-flex align-items-center text-dark fw-semibold">
                    <FaUser className="me-1" /> Login
                </Nav.Link>
                <Link to={"/add-product"} size="sm" className="d-md-flex align-items-center ms-3 add-movie-btn rounded">
                    <FaSquarePlus className="me-1" /> Add Movie
                </Link>
            </Nav>
        </Navbar>
    );
};

export default MovieHeader;