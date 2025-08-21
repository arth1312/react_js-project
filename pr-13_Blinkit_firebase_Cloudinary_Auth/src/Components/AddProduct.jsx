import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProductAsync } from "../Services/Actions/productAction";
import generateUniqueId from "generate-unique-id";
import './AddProduct.css';
import { uploadImage } from "../Services/imageUpload";

const AddProduct = () => {
    const { isCreated, isError } = useSelector(state => state.productReducer);
    const { user } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const intialState = {
        id: "",
        title: "",
        desc: "",
        price: "",
        category: "",
        image: "",
    };
    const [inputForm, setInputForm] = useState(intialState);
    const [errors, setErrors] = useState({
        id: "",
        title: "",
        desc: "",
        price: "",
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

        if (!inputForm.price) {
            newErrors.price = "Price is required.";
            isValid = false;
        } else if (isNaN(inputForm.price)) {
            newErrors.price = "Price must be a number.";
            isValid = false;
        } else {
            newErrors.price = "";
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

    const isFormValid = () => {
        return (
            inputForm.title.trim() &&
            inputForm.desc.trim() &&
            inputForm.price &&
            !isNaN(inputForm.price) &&
            inputForm.category &&
            inputForm.image
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        let id = generateUniqueId({ length: 6, useLetters: false });
        inputForm.id = id;

        dispatch(addProductAsync(inputForm));
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/")
        }
    }, [isCreated]);

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user]);

    return (
        <>
            <Container className="add-product-container">
                <Form className="product-form" onSubmit={handleSubmit}>
                    <h4 className="form-title">
                        <span className="logo-yellow">Add</span>
                        <span className="logo-green"> Product</span>
                    </h4>

                    <Form.Group as={Row} className="mb-3 form-group">
                        <Form.Label column sm={3} className="form-label">
                            Title
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                placeholder="Enter product title"
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
                                placeholder="Enter product description"
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
                            Price (₹)
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="number"
                                placeholder="Enter price in rupees"
                                name="price"
                                value={inputForm.price}
                                onChange={handleChange}
                                isInvalid={!!errors.price}
                                className="form-input"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.price}
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
                                <option value="Dairy & Bread">Dairy & Bread</option>
                                <option value="Fruits & Vegetables">Fruits & Vegetables</option>
                                <option value="Cold Drinks & Juices">Cold Drinks & Juices</option>
                                <option value="Snacks">Snacks</option>
                                <option value="Breakfast & Instant Food">Breakfast & Instant Food</option>
                                <option value="Sweet Tooth">Sweet Tooth</option>
                                <option value="Bakery & Biscuits">Bakery & Biscuits</option>
                                <option value="Tea & Coffee">Tea & Coffee</option>
                                <option value="Atta, Rice & Dal">Atta, Rice & Dal</option>
                                <option value="Masala & Oil">Masala & Oil</option>
                                <option value="Home & Office">Home & Office</option>
                                <option value="Cleaning Essentials">Cleaning Essentials</option>
                                <option value="Pet Care">Pet Care</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.category}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 form-group">
                        <Form.Label column sm={3} className="form-label">
                            Image
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="file"
                                placeholder="Enter Image URL"
                                name="image"
                                onChange={handleFileChanged}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.image}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <div className="form-actions">
                        <Button type="submit" className="submit-btn" disabled={!isFormValid()}>
                            Add Product
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};

export default AddProduct;