import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getMovieAsync, updateMovieAsync } from "../Services/Actions/movieAction";
import './EditMovie.css';
import { uploadImage } from "../Services/imageUpload";

const EditMovie = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { movie, isUpdated } = useSelector((state) => state.movieReducer);

    const [inputForm, setInputForm] = useState({
        id: "",
        title: "",
        desc: "",
        actor: "",
        director: "",
        category: "",
        image: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputForm(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        try {
            const uploadedUrl = await uploadImage(file);
            if (uploadedUrl) {
                setInputForm(prev => ({ ...prev, image: uploadedUrl }));
            } else {
                alert("Image upload failed. Please try again.");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Image upload failed. Please try again.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateMovieAsync(inputForm));
    };

    useEffect(() => {
        if (isUpdated) {
            navigate("/");
        }
    }, [isUpdated]);

    useEffect(() => {
        if (movie) {
            setInputForm(movie)
        }
    }, [movie]);

    useEffect(() => {
        if (id) {
            dispatch(getMovieAsync(id));
        }
    }, [id]);



    return (
        <Container className="edit-movie-container">
            <Form className="edit-movie-form" onSubmit={handleSubmit}>
                <h2 className="form-title">
                    <span className="logo-blue">Edit</span>
                    <span className="logo-black"> Product</span>
                </h2>

                <Form.Group as={Row} className="mb-4 form-group">
                    <Form.Label column sm={3} className="form-label">
                        Title
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            name="title"
                            value={inputForm.title}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4 form-group">
                    <Form.Label column sm={3} className="form-label">
                        Description
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="desc"
                            value={inputForm.desc}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4 form-group">
                    <Form.Label column sm={3} className="form-label">
                        Actor Name
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            name="actor"
                            value={inputForm.actor}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4 form-group">
                    <Form.Label column sm={3} className="form-label">
                        Director Name
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            name="director"
                            value={inputForm.director}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4 form-group">
                    <Form.Label column sm={3} className="form-label">
                        Category
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Select
                            name="category"
                            value={inputForm.category}
                            onChange={handleChange}
                            className="form-input"
                        >
                            <option value="">Select Category</option>
                            <option value="Bollywood" selected={inputForm.category == "Bollywood"}>Bollywood</option>
                            <option value="South Indian" selected={inputForm.category == "South Indian"}>South Indian</option>
                            <option value="Horror" selected={inputForm.category == "Horror"}>Horror</option>
                            <option value="Action" selected={inputForm.category == "Action"}>Action</option>
                            <option value="Thriller" selected={inputForm.category == "Thriller"}>Thriller</option>
                            <option value="Drama" selected={inputForm.category == "Drama"}>Drama</option>
                            <option value="Historical" selected={inputForm.category == "Historical"}>Historical</option>
                            <option value="War" selected={inputForm.category == "War"}>War</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4 form-group">
                    <Form.Label column sm={3} className="form-label">
                        Image URL
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="form-input"
                        />
                    </Col>
                </Form.Group>

                <div className="form-actions">
                    <Button type="submit" className="submit-btn">
                        Update Product
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default EditMovie;