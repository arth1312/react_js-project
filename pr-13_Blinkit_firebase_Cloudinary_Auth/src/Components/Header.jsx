import './Header.css';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { FaSquarePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAsync } from '../Services/Actions/userAction';

const Header = () => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userReducer);
    const handleLogOut = () => {
        dispatch(logOutAsync());
    }

    return (
        <>
            <Navbar bg="white" expand="lg" className="header py-2">
                <Navbar.Brand as={Link} to="/" className="me-lg-4">
                    <span className="logo-yellow fw-bold">blink</span>
                    <span className="logo-green fw-bold">it</span>
                </Navbar.Brand>

                <div className="d-none d-lg-flex align-items-center me-lg-3 location-container">
                    <div>
                        <div className="delivery-time fw-bold small">Delivery in 15 minutes</div>
                        <div className="address" style={{ maxWidth: '250px', fontSize: "12px" }}>
                            Sarthana Rd, Kavita Society, Nana Varachha, Surat, Gujarat <span className="text-muted">▼</span>
                        </div>
                    </div>
                </div>

                <Nav className="ms-auto align-items-center">
                    {
                        user ?
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
                            :
                            <Nav.Link as={Link} to="/login" className="d-none py-3 px-4 d-md-flex align-items-center text-dark fw-semibold border border-black rounded">
                                <FaUser className="me-1" /> Login
                            </Nav.Link>
                    }
                    <Link to={"/add-product"} size="sm" className="d-md-flex align-items-center ms-3 add-product-btn rounded">
                        <FaSquarePlus className="me-1" /> Add Product
                    </Link>
                </Nav>
            </Navbar>
        </>
    );
};

export default Header;