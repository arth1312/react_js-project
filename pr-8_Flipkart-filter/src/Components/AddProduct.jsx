import './product.css'
import generateUniqueId from "generate-unique-id";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/storageData";

const AddProduct = () => {
    const navigate = useNavigate();
    const intialState = {
        title: "",
        desc: "",
        price: "",
        category: "",
        image: "",
    };
    const [inputForm, setInputForm] = useState(intialState);
    const [errors, setErrors] = useState({
        title: "",
        desc: "",
        price: "",
        category: "",
        image: "",
    });

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value,
        });
    };

    const validate = () => {
        const newErrors = { ...errors };
        let isValid = true;

        if (!inputForm.title) {
            newErrors.title = "Title is required.";
            isValid = false;
        } else {
            newErrors.title = "";
        }

        if (!inputForm.desc) {
            newErrors.desc = "Description is required.";
            isValid = false;
        } else {
            newErrors.desc = "";
        }

        if (!inputForm.price) {
            newErrors.price = "Price is required.";
            isValid = false;
        } else {
            newErrors.gender = "";
        }

        if (!inputForm.category) {
            newErrors.category = "Categort date is required.";
            isValid = false;
        } else {
            newErrors.category = "";
        }

        if (!inputForm.image) {
            newErrors.image = "Image is required.";
            isValid = false;
        } else {
            newErrors.image = "";
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        let id = generateUniqueId({
            length: 6,
            useLetters: false,
        });
        inputForm.id = id;
        let data = getStorageData();
        data.push(inputForm);
        setStorageData(data);
        navigate("/");
    };
    return (
        <>
            <Container className="m-3">
                <Form className="product-form mt-4" onSubmit={handleSubmit}>
                    <h4 className="mb-4 text-primary">Add New Product</h4>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Title
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="Enter Title"
                                name="title"
                                value={inputForm.title}
                                onChange={handleChanged}
                                isInvalid={!!errors.title}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Description
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="Enter Description"
                                name="desc"
                                value={inputForm.desc}
                                onChange={handleChanged}
                                isInvalid={!!errors.desc}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Price
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="Enter Price"
                                name="price"
                                value={inputForm.price}
                                onChange={handleChanged}
                                isInvalid={!!errors.price}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Category
                        </Form.Label>
                        <Col sm="10">
                            <Form.Select
                                name="category"
                                value={inputForm.category}
                                onChange={handleChanged}
                                isInvalid={!!errors.category}
                            >
                                <option value="">Select Category</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Mobiles">Mobiles</option>
                                <option value="Appliances">Appliances</option>
                                <option value="Grocery">Grocery</option>
                                <option value="Home & Furniture">Home & Furniture</option>
                                <option value="Beauty, Toys & More">Beauty, Toys & More</option>
                                <option value="Petrol Two Wheelers">Petrol Two Wheelers</option>
                                <option value="Eletric Two Wheelers">Eletric Two Wheelers</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Image URL
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="Enter Image URL"
                                name="image"
                                value={inputForm.image}
                                onChange={handleChanged}
                                isInvalid={!!errors.image}
                            />
                        </Col>
                    </Form.Group>

                    <Button type="submit">Add Product</Button>
                </Form>
            </Container>
        </>
    );
};

export default AddProduct;