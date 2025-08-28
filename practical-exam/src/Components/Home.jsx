import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteMovieAsync,  getAllMovieAsync, } from "../Services/Actions/movieAction";
import { Badge, Button, Card, Modal, Pagination, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Home.css';

const MovieHome = () => {
    const dispatch = useDispatch();
    const { movies, isLoading } = useSelector((state) => state.movieReducer);
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [sortData, setSortData] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;


    const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredMovies.slice(startIndex, startIndex + itemsPerPage);

    const handleSearch = () => {
        if (!search.trim()) {
            setFilteredMovies(movies);
            return;
        }

        const results = movies.filter(movi =>
            movi.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredMovies(results);
        setSearch("");
        setCurrentPage(1);
    };

    const handleSorting = () => {
        if (!sortData) return;

        const [field, type] = sortData.split(",");
        const sortedMovies = [...filteredMovies].sort((a, b) => {
            if (field === "price") {
                return type === "asc" ? a[field] - b[field] : b[field] - a[field];
            } else {
                return type === "asc"
                    ? a[field].localeCompare(b[field])
                    : b[field].localeCompare(a[field]);
            }
        });

        setFilteredMovies(sortedMovies);
        setCurrentPage(1);
    };

    const handleClear = () => {
        setFilteredMovies(movies);
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

    const handleView = (movie) => {
        setSelectedMovie(movie);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        dispatch(deleteMovieAsync(id));
    }

    useEffect(() => {
        dispatch(getAllMovieAsync());
    }, []);

    const handleEdit = (id) => {
        navigate(`/edit-product/${id}`);
    };

    useEffect(() => {
        setFilteredMovies(movies);
        setCurrentPage(1);
    }, [movies]);

    return (
        <>
            <div className="home-container">
                <div className="movie-search-section">
                    <h5 className="search-section-title">Find Movie Data</h5>
                    <div className="search-controls">
                        <div className="search-input-group">
                            <input
                                type="text"
                                className="movie-search-input"
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

                {isLoading ? <Spinner></Spinner> : <div className="movie-grid mt-5">
                    {currentItems.length > 0 ? (
                        currentItems.map((product) => (
                            <Card key={product.id} className="movie-card">
                                <div className="movie-image-container">
                                    <Card.Img variant="top" src={product.image} className="movie-image" />
                                </div>
                                <Card.Body className="movie-body">
                                    <Card.Title className="movie-title">{product.title}</Card.Title>
                                    <Card.Text className="movie-desc">{product.desc}</Card.Text>
                                    <Card.Text className="movie-actor">{product.actor}</Card.Text>
                                    <Card.Text className="movie-director">{product.director}</Card.Text>
                                    <Badge pill bg="success" className="movie-category">
                                        {product.category}
                                    </Badge>
                                    <div className="movie-actions">
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
                        <div className="no-movie">
                            <p>No movies found. Try a different search.</p>
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
                <Modal.Header closeButton className="movie-modal-header">
                    <Modal.Title className="movie-modal-title">
                        <i className="fas fa-box me-2"></i>
                        Product Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    {selectedMovie && (
                        <div className="movie-modal-container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="movie-modal-image-container">
                                        <img
                                            src={selectedMovie.image}
                                            alt={selectedMovie.title}
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="movie-modal-info">
                                        <h2 className="movie-modal-name">{selectedMovie.title}</h2>
                                        <Badge pill bg="success" className="product-modal-category mb-3">
                                            {selectedMovie.category}
                                        </Badge>
                                        <h3 className="movie-modal-actor">Actor: {selectedMovie.actor}</h3>
                                        <h3 className="movie-modal-director">Director: {selectedMovie.director}</h3>
                                        <div className="movie-modal-description">
                                            <h4>Description: {selectedMovie.desc}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer className="movie-modal-footer">
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default MovieHome;