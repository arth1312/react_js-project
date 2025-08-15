import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAsync, getAllProductAsync } from "../Services/Actions/productAction";
import { Badge, Button, Card, Modal, Pagination, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Banner from './Banner';
import './Home.css';
import Items from './ProductItems';

const Home = () => {
    const dispatch = useDispatch();
    const { blinkits, isLoading } = useSelector((state) => state.productReducer);
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [selectedBlinkit, setSelectedBlinkit] = useState(null);
    const [sortData, setSortData] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;


    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    const handleSearch = () => {
        if (!search.trim()) {
            setFilteredProducts(blinkits);
            return;
        }

        const results = blinkits.filter(prod =>
            prod.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredProducts(results);
        setSearch("");
        setCurrentPage(1);
    };

    const handleSorting = () => {
        if (!sortData) return;

        const [field, type] = sortData.split(",");
        const sortedProducts = [...filteredProducts].sort((a, b) => {
            if (field === "price") {
                return type === "asc" ? a[field] - b[field] : b[field] - a[field];
            } else {
                return type === "asc"
                    ? a[field].localeCompare(b[field])
                    : b[field].localeCompare(a[field]);
            }
        });

        setFilteredProducts(sortedProducts);
        setCurrentPage(1);
    };

    const handleClear = () => {
        setFilteredProducts(blinkits);
        setSortData("");
        setSearch("");
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleClose = () => setShowModal(false);

    const handleView = (product) => {
        setSelectedBlinkit(product);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        dispatch(deleteProductAsync(id));
    }

    useEffect(() => {
        dispatch(getAllProductAsync());
    }, []);

    const handleEdit = (id) => {
        navigate(`/edit-product/${id}`);
    };

    useEffect(() => {
        setFilteredProducts(blinkits);
        setCurrentPage(1);
    }, [blinkits]);

    return (
        <>
            <div className="home-container">
                <div className="product-search-section">
                    <h5 className="search-section-title">Find Product Data</h5>
                    <div className="search-controls">
                        <div className="search-input-group">
                            <input
                                type="text"
                                className="product-search-input"
                                name="search"
                                value={search}
                                placeholder="Search products..."
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className="search-button" onClick={handleSearch}>
                                Search
                            </button>
                        </div>

                        <div className="sort-control-group">
                            <select
                                className="sort-dropdown"
                                value={sortData}
                                onChange={(e) => setSortData(e.target.value)}
                            >
                                <option value="">Sort By</option>
                                <option value="price,asc">Price: Low to High</option>
                                <option value="price,desc">Price: High to Low</option>
                                <option value="title,asc">Name: A to Z</option>
                                <option value="title,desc">Name: Z to A</option>
                            </select>
                            <button className="sort-button" onClick={handleSorting}>
                                Apply
                            </button>
                        </div>

                        <button className="reset-button" onClick={handleClear}>
                            Reset All
                        </button>
                    </div>
                </div>

                <Banner />
                <Items />

                {isLoading ? <Spinner className='my-5'></Spinner> : <div className="product-grid mt-5">
                    {currentItems.length > 0 ? (
                        currentItems.map((product) => (
                            <Card key={product.id} className="product-card">
                                <div className="product-image-container">
                                    <Card.Img variant="top" src={product.image} className="product-image" />
                                </div>
                                <Card.Body className="product-body">
                                    <Card.Title className="product-title">{product.title}</Card.Title>
                                    <Card.Text className="product-desc">{product.desc}</Card.Text>
                                    <Card.Text className="product-price">₹{product.price}</Card.Text>
                                    <Badge pill bg="success" className="product-category">
                                        {product.category}
                                    </Badge>
                                    <div className="product-actions">
                                        <Button
                                            onClick={() => handleEdit(product.id)}
                                            variant="warning"
                                            className="edit-btn"
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            onClick={() => handleDelete(product.id)}
                                            variant="danger"
                                            className="delete-btn"
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            className="btn-skyblue fs-5"
                                            onClick={() => handleView(product)}
                                        >
                                            View
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))
                    ) : (
                        <div className="no-products">
                            <p>No products found. Try a different search.</p>
                        </div>
                    )}
                </div>}


                {totalPages > 1 && (
                    <div className="pagination-controls d-flex justify-content-center mb-3 mt-5">
                        <Pagination>
                            <Pagination.Prev
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            />
                            {Array.from({ length: totalPages }, (_, i) => (
                                <Pagination.Item
                                    key={i + 1}
                                    active={currentPage === i + 1}
                                    onClick={() => handlePageChange(i + 1)}
                                >
                                    {i + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            />
                        </Pagination>
                    </div>
                )}
            </div>

            <Modal show={showModal} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton className="product-modal-header">
                    <Modal.Title className="product-modal-title">
                        <i className="fas fa-box me-2"></i>
                        Product Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    {selectedBlinkit && (
                        <div className="product-modal-container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="product-modal-image-container">
                                        <img
                                            src={selectedBlinkit.image}
                                            alt={selectedBlinkit.title}
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product-modal-info">
                                        <h2 className="product-modal-name">{selectedBlinkit.title}</h2>
                                        <Badge pill bg="success" className="product-modal-category mb-3">
                                            {selectedBlinkit.category}
                                        </Badge>
                                        <h3 className="product-modal-price">₹{selectedBlinkit.price}</h3>
                                        <div className="product-modal-description">
                                            <h5>Description</h5>
                                            <p>{selectedBlinkit.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer className="product-modal-footer">
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Home;