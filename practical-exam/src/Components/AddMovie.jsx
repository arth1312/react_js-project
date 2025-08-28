import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addMovieAsync } from "../Services/Actions/movieAction";
import generateUniqueId from "generate-unique-id";
import './AddMovie.css';
import { uploadImage } from "../Services/imageUpload";

const AddMovie = () => {
    const { isCreated, isError } = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const intialState = {
        id: "",
        title: "",
        desc: "",
        actor: "",
        director: "",
        category: "",
        image: "",
    };
    const [inputForm, setInputForm] = useState(intialState);
    const [errors, setErrors] = useState({
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
        setInputForm({
            ...inputForm,
            [name]: value,
        });
    };

    const handleFileChanged = async (e) => {
        let imagePath = await uploadImage(e.target.files[0]);

        setInputForm({
            ...inputForm,
            image: imagePath,
        });
    }

    const validate = () => {
        const newErrors = { ...errors };
        let isValid = true;

        if (!inputForm.title.trim()) {
            newErrors.title = "Title is required.";
            isValid = false;
        } else {
            newErrors.title = "";
        }

        if (!inputForm.desc.trim()) {
            newErrors.desc = "Description is required.";
            isValid = false;
        } else {
            newErrors.desc = "";
        }

        if (!inputForm.actor) {
            newErrors.actor = "Actor is required.";
            isValid = false;
        } else {
            newErrors.actor = "";
        }

        if (!inputForm.director) {
            newErrors.director = "Director is required.";
            isValid = false;
        } else {
            newErrors.director = "";
        }

        if (!inputForm.category) {
            newErrors.category = "Category is required.";
            isValid = false;
        } else {
            newErrors.category = "";
        }

        if (!inputForm.image.trim()) {
            newErrors.image = "Image URL is required.";
            isValid = false;
        } else {
            newErrors.image = "";
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        let id = generateUniqueId({ length: 6, useLetters: false });
        inputForm.id = id;

        dispatch(addMovieAsync(inputForm));
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/")
        }
    }, [isCreated]);

    return (
        <Container className="add-movie-container">
            <Form className="movie-form" onSubmit={handleSubmit}>
                <h4 className="form-title">
                    <span className="logo-blue">Add</span>
                    <span className="logo-black"> Product</span>
                </h4>

                <Form.Group as={Row} className="mb-3 form-group">
                    <Form.Label column sm={3} className="form-label">
                        Title
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            placeholder="Enter movie title"
                            name="title"
                            value={inputForm.title}
                            onChange={handleChange}
                            isInvalid={!!errors.title}
                            className="form-input"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.title}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 form-group">
                    <Form.Label column sm={3} className="form-label">
                        Description
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter movie description"
                            name="desc"
                            value={inputForm.desc}
                            onChange={handleChange}
                            isInvalid={!!errors.desc}
                            className="form-input"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.desc}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 form-group">
                    <Form.Label column sm={3} className="form-label">
                        Actor Name
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            placeholder="Enter actor name"
                            name="actor"
                            value={inputForm.actor}
                            onChange={handleChange}
                            isInvalid={!!errors.actor}
                            className="form-input"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.actor}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 form-group">
                    <Form.Label column sm={3} className="form-label">
                        Director Name
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            placeholder="Enter director name"
                            name="director"
                            value={inputForm.director}
                            onChange={handleChange}
                            isInvalid={!!errors.director}
                            className="form-input"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.director}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 form-group">
                    <Form.Label column sm={3} className="form-label">
                        Category
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Select
                            name="category"
                            value={inputForm.category}
                            onChange={handleChange}
                            isInvalid={!!errors.category}
                            className="form-input"
                        >
                            <option value="">Select Category</option>
                            <option value="Bollywood">Bollywood</option>
                            <option value="South Indian">South Indian</option>
                            <option value="Horror">Horror</option>
                            <option value="Action">Action</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Drama">Drama</option>
                            <option value="Historical">Historical</option>
                            <option value="War">War</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            {errors.category}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 form-group">
                    <Form.Label column sm={3} className="form-label">
                        Image URL
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="file"
                            placeholder="Enter image URL"
                            name="image"
                            onChange={handleFileChanged}
                            className="form-input"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.image}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <div className="form-actions">
                    <Button type="submit" className="submit-btn">
                        Add Product
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default AddMovie;