import { useState } from "react";
import { Form, Button, Row, Col, Container, Table } from "react-bootstrap";
import "./HospitalManage.css";

const Patient_Form = () => {
    const initialState = {
        name: "",
        age: "",
        gender: "",
        date: "",
        contact: "",
        address: "",
        wardNum: "",
        doctor: "",
    };

    const [inputForm, setInputForm] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [patients, setPatients] = useState(() => {
        const data = localStorage.getItem('patients');
        return data ? JSON.parse(data) : [];
    });

    const setStorageData = (data) => {
        localStorage.setItem('patients', JSON.stringify(data));
        setPatients(data);
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputForm({ ...inputForm, [name]: value });
    };

    const validate = () => {
        const newErrors = {};

        if (!inputForm.name.trim()) {
            newErrors.name = "Name is required.";
        }

        if (!inputForm.age) {
            newErrors.age = "Age is required.";
        } else if (isNaN(inputForm.age)) {
            newErrors.age = "Valid age is required.";
        }

        if (!inputForm.gender) {
            newErrors.gender = "Gender is required.";
        }

        if (!inputForm.date) {
            newErrors.date = "Admit date is required.";
        }

        if (!inputForm.contact) {
            newErrors.contact = "Contact number is required.";
        } else if (!/^\d{10}$/.test(inputForm.contact)) {
            newErrors.contact = "Valid 10-digit contact number is required.";
        }

        if (!inputForm.address.trim()) {
            newErrors.address = "Address is required.";
        }

        if (!inputForm.wardNum) {
            newErrors.wardNum = "Please select a ward.";
        }

        if (!inputForm.doctor) {
            newErrors.doctor = "Please assign a doctor.";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        if (isEdit) {
            const updatedPatients = patients.map(patient =>
                patient.id === inputForm.id ? inputForm : patient
            );
            setStorageData(updatedPatients);
            setInputForm(initialState);
            setIsEdit(false);
        } else {
            const id = Math.floor(Math.random() * 10000);
            const updatedPatients = [...patients, { ...inputForm, id }];
            setStorageData(updatedPatients);
            setInputForm(initialState);
        }
        setErrors({});
    };

    const handleEdit = (id) => {
        const singleRec = patients.find(patient => patient.id === id);
        setInputForm(singleRec);
        setIsEdit(true);
    };

    const handleDelete = (id) => {
        const updatedPatients = patients.filter(patient => patient.id !== id);
        setStorageData(updatedPatients);
    };

    return (
        <>
            <Container className="my-4">
                <Form onSubmit={handleSubmit} className="form-container p-4 shadow-sm">
                    <h3 className="text-center mb-4">Patient Information</h3>

                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="formName">
                                <Form.Label className="text-start d-block w-100">Patient Full Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={inputForm.name}
                                    onChange={handleInput}
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formAge">
                                <Form.Label className="text-start d-block w-100">Patient Age:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="age"
                                    value={inputForm.age}
                                    onChange={handleInput}
                                    isInvalid={!!errors.age}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.age}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="formDate">
                                <Form.Label className="text-start d-block w-100">Admit Date:</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="date"
                                    value={inputForm.date}
                                    onChange={handleInput}
                                    isInvalid={!!errors.date}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.date}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formContact">
                                <Form.Label className="text-start d-block w-100">Contact Number:</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="contact"
                                    value={inputForm.contact}
                                    onChange={handleInput}
                                    isInvalid={!!errors.contact}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.contact}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formWard">
                        <Form.Label className="text-start d-block w-100">Assign Ward Number:</Form.Label>
                        <Form.Select
                            name="wardNum"
                            value={inputForm.wardNum}
                            onChange={handleInput}
                            isInvalid={!!errors.wardNum}
                        >
                            <option value="">Select Ward</option>
                            <option value="General Ward">General Ward</option>
                            <option value="ICU">ICU</option>
                            <option value="Maternity Ward">Maternity Ward</option>
                            <option value="Pediatric Ward">Pediatric Ward</option>
                            <option value="Surgical Ward">Surgical Ward</option>
                            <option value="Dental Ward">Dental Ward</option>
                            <option value="Orthopedic Ward">Orthopedic Ward</option>
                            <option value="Cardiology Ward">Cardiology Ward</option>
                            <option value="Emergency Ward">Emergency Ward</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            {errors.wardNum}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDoctor">
                        <Form.Label className="text-start d-block w-100">Assign Doctor:</Form.Label>
                        <Form.Select
                            name="doctor"
                            value={inputForm.doctor}
                            onChange={handleInput}
                            isInvalid={!!errors.doctor}
                        >
                            <option value="">Select Doctor</option>
                            <option value="Dr. Naman Gupta (General Physician)">Dr. Naman Gupta (General Physician)</option>
                            <option value="Dr. Rajiv Patel (Critical Care Specialist)">Dr. Rajiv Patel (Critical Care Specialist)</option>
                            <option value="Dr. Rekha Gupta (Obstetrician/Gynecologist)">Dr. Rekha Gupta (Obstetrician/Gynecologist)</option>
                            <option value="Dr. Milan Dhaduk (MD Madicen)">Dr. Milan Dhaduk (MD Madicen)</option>
                            <option value="Dr. Vishnu Thakkar (Pediatrician)">Dr. Vishnu Thakkar (Pediatrician)</option>
                            <option value="Dr. Farhan Shaikh (General Surgeon)">Dr. Farhan Shaikh (General Surgeon)</option>
                            <option value="Dr. Vishal Shah (Dentist)">Dr. Vishal Shah (Dentist)</option>
                            <option value="Dr. Kiran Desai (Orthopedic Surgeon)">Dr. Kiran Desai (Orthopedic Surgeon)</option>
                            <option value="Dr. Anjali Mehta (Cardiologist)">Dr. Anjali Mehta (Cardiologist)</option>
                            <option value="Dr. Suresh Patel (Emergency Specialist)">Dr. Suresh Patel (Emergency Specialist)</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            {errors.doctor}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label className="text-start d-block w-100">Address:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="address"
                            value={inputForm.address}
                            onChange={handleInput}
                            isInvalid={!!errors.address}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.address}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGender">
                        <Form.Label className="text-start d-block w-100">Gender:</Form.Label>
                        <div className="d-flex gap-3">
                            <Form.Check
                                type="radio"
                                label="Male"
                                name="gender"
                                id="male-radio"
                                value="Male"
                                checked={inputForm.gender === "Male"}
                                onChange={handleInput}
                                isInvalid={!!errors.gender}
                            />
                            <Form.Check
                                type="radio"
                                label="Female"
                                name="gender"
                                id="female-radio"
                                value="Female"
                                checked={inputForm.gender === "Female"}
                                onChange={handleInput}
                                isInvalid={!!errors.gender}
                            />
                            <Form.Check
                                type="radio"
                                label="Other"
                                name="gender"
                                id="other-radio"
                                value="Other"
                                checked={inputForm.gender === "Other"}
                                onChange={handleInput}
                                isInvalid={!!errors.gender}
                            />
                        </div>
                        <Form.Control.Feedback type="invalid" className="d-block">
                            {errors.gender}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <div className="text-center">
                        <Button type="submit" className="mt-3 patient-btn">
                            {isEdit ? "Update Patient" : "Add Patient"}
                        </Button>
                    </div>
                </Form>
            </Container>

            <hr />

            <Container className="my-4">
                <h2 className="mb-4">Patient Records</h2>
                {patients.length > 0 && (
                    <div className="patient-records-container">
                        <Table striped bordered hover responsive className="patient-records-table">
                            <thead className="table-header">
                                <tr>
                                    <th className="name-column">Name</th>
                                    <th className="age-column">Age</th>
                                    <th className="gender-column">Gender</th>
                                    <th className="date-column">Admit Date</th>
                                    <th className="contact-column">Contact</th>
                                    <th className="ward-column">Ward</th>
                                    <th className="doctor-column">Doctor</th>
                                    <th className="actions-column">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients.map((patient) => (
                                    <tr key={patient.id} className="patient-row">
                                        <td className="name-cell">{patient.name}</td>
                                        <td className="age-cell">{patient.age}</td>
                                        <td className="gender-cell">{patient.gender}</td>
                                        <td className="date-cell">{patient.date}</td>
                                        <td className="contact-cell">{patient.contact}</td>
                                        <td className="ward-cell">{patient.wardNum}</td>
                                        <td className="doctor-cell">{patient.doctor}</td>
                                        <td className="actions-cell">
                                            <Button
                                                variant="warning"
                                                size="sm"
                                                className="me-2 edit-btn"
                                                onClick={() => handleEdit(patient.id)}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                className="delete-btn"
                                                onClick={() => handleDelete(patient.id)}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                )}
            </Container>
        </>
    );
};

export default Patient_Form;