import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { FaSquarePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Services/Actions/userAction';
import logo from '../assets/img/logo.png';
import './Header.css';

const MovieHeader = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userReducer);

    const handleLogOut = () => {
        dispatch(logoutUser());
    };

    return (
        <Navbar bg="white" expand="lg" className="header py-2">
            <Navbar.Brand as={Link} to="/" className="me-lg-4">
                <img src={logo} alt="logo" width={85} />
            </Navbar.Brand>

            <Nav className="ms-auto align-items-center">
                {user ? (
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            {user.email}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item disabled>
                                {user.email}
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={handleLogOut} className="text-danger">
                                Log Out
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                ) : (
                    <Nav.Link
                        as={Link}
                        to="/login"
                        className="d-none py-3 px-4 d-md-flex align-items-center text-dark fw-semibold border border-black rounded"
                    >
                        <FaUser className="me-1" /> Login
                    </Nav.Link>
                )}

                <Link
                    to={"/add-product"}
                    size="sm"
                    className="d-md-flex align-items-center ms-3 add-movie-btn rounded"
                >
                    <FaSquarePlus className="me-1" /> Add Movie
                </Link>
            </Nav>
        </Navbar>
    );
};

export default MovieHeader;
