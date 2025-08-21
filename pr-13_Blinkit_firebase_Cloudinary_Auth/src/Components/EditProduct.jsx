import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getProductAsync, updateProductAsync } from "../Services/Actions/productAction";
import './EditProduct.css';
import { uploadImage } from "../Services/imageUpload";

const EditProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { blinkit, isUpdated } = useSelector((state) => state.productReducer);
    const { user } = useSelector(state => state.userReducer);

    const [inputForm, setInputForm] = useState({
        id: "",
        title: "",
        desc: "",
        price: "",
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
        console.log("Updated Product Data:", inputForm);
        dispatch(updateProductAsync(inputForm));
    };

    useEffect(() => {
        if (isUpdated) {
            navigate("/");
        }
    }, [isUpdated, navigate]);

    useEffect(() => {
        if (blinkit) {
            setInputForm(blinkit);
        }
    }, [blinkit]);

    useEffect(() => {
        if (id) {
            dispatch(getProductAsync(id));
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user]);

    return (
        <>
            <Container className="edit-product-container">
                <Form className="edit-product-form" onSubmit={handleSubmit}>
                    <h2 className="form-title">
                        <span className="logo-yellow">Edit</span>
                        <span className="logo-green"> Product</span>
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
                            Price (₹)
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="number"
                                name="price"
                                value={inputForm.price}
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
                                <option value="Dairy & Bread" selected={inputForm.category == "Dairy & Bread"}>Dairy & Bread</option>
                                <option value="Fruits & Vegetables" selected={inputForm.category == "Fruits & Vegetables"}>Fruits & Vegetables</option>
                                <option value="Cold Drinks & Juices" selected={inputForm.category == "Cold Drinks & Juices"}>Cold Drinks & Juices</option>
                                <option value="Snacks" selected={inputForm.category == "Snacks"}>Snacks</option>
                                <option value="Breakfast & Instant Food" selected={inputForm.category == "Breakfast & Instant Food"}>Breakfast & Instant Food</option>
                                <option value="Sweet Tooth" selected={inputForm.category == "Sweet Tooth"}>Sweet Tooth</option>
                                <option value="Bakery & Biscuits" selected={inputForm.category == "Bakery & Biscuits"}>Bakery & Biscuits</option>
                                <option value="Tea & Coffee" selected={inputForm.category == "Tea & Coffee"}>Tea & Coffee</option>
                                <option value="Atta, Rice & Dal" selected={inputForm.category == "Atta, Rice & Dal"}>Atta, Rice & Dal</option>
                                <option value="Masala & Oil" selected={inputForm.category == "Masala & Oil"}>Masala & Oil</option>
                                <option value="Home & Office" selected={inputForm.category == "Home & Office"}>Home & Office</option>
                                <option value="Cleaning Essentials" selected={inputForm.category == "Cleaning Essentials"}>Cleaning Essentials</option>
                                <option value="Pet Care" selected={inputForm.category == "Pet Care"}>Pet Care</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-4 form-group">
                        <Form.Label column sm={3} className="form-label">
                            Image
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={handleFileUpload}
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
        </>
    );
};

export default EditProduct;
