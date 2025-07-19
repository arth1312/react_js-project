import './product.css'
import { getStorageData, setStorageData } from "../Services/storageData";
import { Badge, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useEffect, useState } from 'react';

const Home = () => {

    const [productData, setProductData] = useState([]);
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit-product/${id}`);
    }

    const handleDelete = (id) => {
        let data = getStorageData();
        let updateData = data.filter(product => product.id != id)
        setStorageData(updateData);
        setProductData(updateData);
    }

    useEffect(() => {
        let data = getStorageData();
        setProductData(data);
    }, []);

    return (
        <>
            <div className="product-grid d-flex flex-wrap justify-content-center">
                {productData.length > 0 ? (
                    productData.map((product) => (
                        <Card key={product.id} className="product-card">
                            <Card.Img src={product.image} />
                            <Card.Body>
                                <Card.Title className="text-center">{product.title}</Card.Title>
                                <Card.Text>{product.desc}</Card.Text>
                                <Card.Text>₹ {product.price}</Card.Text>
                                <Badge bg="success">{product.category}</Badge>
                                <div className="mt-3 d-flex justify-content-around">
                                    <Button onClick={() => handleEdit(product.id)} variant="warning">
                                        Edit
                                    </Button>
                                    <Button onClick={() => handleDelete(product.id)} variant="danger">
                                        Delete
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <h4 className="text-center text-dark">Product Not Found</h4>
                )}

            </div>

        </>
    )
}
export default Home;