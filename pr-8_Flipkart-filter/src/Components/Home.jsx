import './product.css'
import { getStorageData, setStorageData } from "../Services/storageData";
import { Badge, Button, Card, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useEffect, useState } from 'react';

const Home = () => {
    const [productData, setProductData] = useState([]);
    const [search, setSearch] = useState("");
    const [sortData, setSortData] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit-product/${id}`);
    }

    const handleChanged = (e) => {
        setSearch(e.target.value);
    }

    const handleDelete = (id) => {
        let data = getStorageData();
        let updateData = data.filter(product => product.id != id)
        setStorageData(updateData);
        setProductData(updateData);
    }

    const handleSearch = () => {
        console.log("Search ==> ", search);
        let data = getStorageData();
        let updateData = data.filter(prod => prod.title == search)
        setProductData(updateData);
        setSearch("");
        setCurrentPage(1);
    }

    const handleSorting = () => {
        let data = getStorageData();
        let updateData;
        let [field, type] = sortData.split(",");
        console.log(typeof field)
        if (type == "asc" && field != "price") {
            updateData = data.sort((a, b) => {
                return a[field].localeCompare(b[field])
            })
        } else if (type == 'asc' && field == 'price') {
            updateData = data.sort((a, b) => {
                return a[field] - (b[field])
            })
        } else if (type == "desc" && field != "price") {
            updateData = data.sort((a, b) => {
                return b[field].localeCompare(a[field])
            })
        } else if (type == 'desc' && field == 'price') {
            updateData = data.sort((a, b) => {
                return b[field] - (a[field])
            })
        }

        setProductData(updateData);
        setCurrentPage(1);
    }

    const handleClear = () => {
        let data = getStorageData();
        setProductData(data);
        setSortData("");
        setSearch("");
        setCurrentPage(1);
    }

    const totalPages = Math.ceil(productData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = productData.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    useEffect(() => {
        let data = getStorageData();
        setProductData(data);
    }, []);

    return (
        <>
            <div className="product-section container d-flex justify-content-between">
                <h5 className="section-title mb-0">Find Product Data</h5>
                <div className="search w-50 d-flex justify-content-center gap-2 align-items-center">
                    <input
                        type="text"
                        className="px-3 py-2"
                        name="search"
                        value={search}
                        placeholder="Search product"
                        style={{ width: "62%" }}
                        onChange={handleChanged}
                    />
                    <select
                        className="form-select"
                        style={{ width: "80%" }}
                        name="sortData"
                        onChange={e => setSortData(e.target.value)}
                    >
                        <option>Select Sorting</option>
                        <option value={"title,asc"}>Name (A-Z)</option>
                        <option value={"title,desc"}>Name (Z-A)</option>
                        <option value={"price,asc"}>Price - low to high</option>
                        <option value={"price,desc"}>Price - high to low</option>
                        <option value={"category,asc"}>Category (A-Z)</option>
                        <option value={"category,desc"}>Category (Z-A)</option>
                    </select>
                    <Button className="search-btn" style={{ fontSize: "16px" }} onClick={handleSearch}>Search</Button>
                    <Button onClick={handleSorting}>Sorting</Button>
                    <Button style={{ fontSize: "16px", width: "35%" }} onClick={handleClear}>All Data</Button>
                </div>
            </div>
            <div className="product-grid d-flex flex-wrap justify-content-center">
                {currentItems.length > 0 ? (
                    currentItems.map((product) => (
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

            {totalPages > 1 && (
                <div className="pagination-controls d-flex justify-content-center mb-3 mt-5">
                    <Pagination>
                        <Pagination.Prev
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        />
                        {(() => {
                            const items = [];
                            for (let i = 1; i <= totalPages; i++) {
                                items.push(
                                    <Pagination.Item
                                        key={i}
                                        active={currentPage === i}
                                        onClick={() => handlePageChange(i)}
                                    >
                                        {i}
                                    </Pagination.Item>
                                );
                            }
                            return items;
                        })()}

                        <Pagination.Next
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        />
                    </Pagination> 
                </div>
            )}
        </>
    )
}

export default Home;