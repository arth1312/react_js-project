import './product.css'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/storageData";

const EditProduct = () => {

    const { id } = useParams();
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

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = getStorageData();
        let updateData = data.map(prod => {
            if (prod.id == id) {
                return inputForm
            } else {
                return prod
            }
        })
        setStorageData(updateData);
        navigate("/");
    };

    useEffect(() => {
        let data = getStorageData();
        let singleRec = data.find(product => product.id == id)
        setInputForm(singleRec);
    }, [id]);

    return (
        <>
            <Container className="m-3">
                <Form className="product-form mt-4" onSubmit={handleSubmit}>
                    <h4 className="mb-4 text-primary">Update Product</h4>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Title
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                name="title"
                                value={inputForm.title}
                                onChange={handleChanged}
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
                                name="desc"
                                value={inputForm.desc}
                                onChange={handleChanged}
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
                                name="price"
                                value={inputForm.price}
                                onChange={handleChanged}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Category
                        </Form.Label>
                        <Col sm="10">
                            <Form.Select
                                aria-label="Default select example"
                                name="category"
                                onChange={handleChanged}
                            >
                                <option>Select Category</option>
                                <option value="Electronics" selected={inputForm.category == "Electronics"}>Electronics</option>
                                <option value="Fashion" selected={inputForm.category == "Fashion"}>Fashion</option>
                                <option value="Mobiles" selected={inputForm.category == "Mobiles"}>Mobiles</option>
                                <option value="Appliances" selected={inputForm.category == "Appliances"}>Appliances</option>
                                <option value="Grocery" selected={inputForm.category == "Grocery"}>Grocery</option>
                                <option value="Home & Furniture" selected={inputForm.category == "Home & Furniture"}>Home & Furniture</option>
                                <option value="Beauty, Toys & More" selected={inputForm.category == "Beauty, Toys & More"}>Beauty, Toys & More</option>
                                <option value="Petrol Two Wheelers" selected={inputForm.category == "Petrol Two Wheelers"}>Petrol Two Wheelers</option>
                                <option value="Eletric Two Wheelers" selected={inputForm.category == "Eletric Two Wheelers"}>Eletric Two Wheelers</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Image
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                name="image"
                                value={inputForm.image}
                                onChange={handleChanged}
                            />
                        </Col>
                    </Form.Group>

                    <Button type="submit">Update Product</Button>
                </Form>
            </Container>
        </>
    )
}
export default EditProduct;