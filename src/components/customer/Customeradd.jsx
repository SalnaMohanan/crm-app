import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const Customeradd = () => {
  const navigate = useNavigate();


  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    status: "",
    assignedTo: "",
    image: null,
    company:"",
      industry:"",
      address:"",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCustomerData({ ...customerData, image: file });
    }
  };

  // Validation Function
  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!customerData.name.trim()) newErrors.name = "customer Name is required!";
    if (!customerData.email.trim() || !emailRegex.test(customerData.email))
      newErrors.email = "Valid Email is required!";
    if (!customerData.phone.trim() || !phoneRegex.test(customerData.phone))
      newErrors.phone = "Valid 10-digit Phone Number is required!";
    if (!customerData.source.trim()) newErrors.source = "customer Source is required!";
    if (!customerData.status) newErrors.status = "Status selection is required!";
    if (!customerData.assignedTo.trim()) newErrors.assignedTo = "Assigned To is required!";
    if (!customerData.notes.trim()) newErrors.notes = "Notes are required!";
    if (!customerData.company.trim()) newErrors.company = "company Name required!";
    if (!customerData.industry.trim()) newErrors.industry = "industry required!";
    if (!customerData.address.trim()) newErrors.address = "address required!";


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("customer Data Submitted:", customerData);
      alert("customer details added successfully!");

      // Reset form
      setCustomerData({
        name: "",
        email: "",
        phone: "",
        source: "",
        status: "",
        assignedTo: "",
        image: null,
        company:"",
      industry:"",
      address:"",
        notes: "",
      });

      navigate("/lead", { state: { converted: true } });    }
  };

  return (
    <Container className="p-4">
      <h2 className="text-center mb-4 text-primary fw-bold">📝 Add New Customer</h2>
      <Form onSubmit={handleSubmit}>
        {/* Name & Email */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-bold">customer Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={customerData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={customerData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* Phone & Source */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-bold">Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={customerData.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-bold">Customer Source</Form.Label>
              <Form.Control
                type="text"
                name="source"
                value={customerData.source}
                onChange={handleChange}
                isInvalid={!!errors.source}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.source}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* Status & Assigned To */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-bold">Status</Form.Label>
              <Form.Select
                name="status"
                value={customerData.status}
                onChange={handleChange}
                isInvalid={!!errors.status}
                required
              >
                <option value="">Select Status</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Converted">Converted</option>
                <option value="Lost">Lost</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.status}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-bold">Assigned To</Form.Label>
              <Form.Control
                type="text"
                name="assignedTo"
                value={customerData.assignedTo}
                onChange={handleChange}
                isInvalid={!!errors.assignedTo}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.assignedTo}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* Image Upload */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-bold">Customer Image</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
              {customerData.image && (
                <div className="mt-3 text-center">
                  <img
                    src={URL.createObjectURL(customerData.image)}
                    alt="Preview"
                    className="img-fluid rounded"
                    style={{ maxWidth: "100%", height: "200px", objectFit: "cover" }}
                  />
                </div>
              )}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-bold">Company </Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={customerData.company}
                onChange={handleChange}
                isInvalid={!!errors.company}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.company}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        {/* comany, intstry */}
        <Row>
       
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-bold">Industry </Form.Label>
              <Form.Control
                type="text"
                name="industry"
                value={customerData.industry}
                onChange={handleChange}
                isInvalid={!!errors.industry}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.industry}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-bold">Address </Form.Label>
              <Form.Control
              as="textarea"
                type="text"
                name="address"
                value={customerData.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* Notes */}
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label className="fw-bold">Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="notes"
                value={customerData.notes}
                onChange={handleChange}
                isInvalid={!!errors.notes}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.notes}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* Centered Submit Button */}
        <Row className="d-flex justify-content-center mt-3">
          <Col md={4}>
            <Button onClick={handleSubmit} variant="primary" type="submit" className="w-100">
              ➕ Add customer
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Customeradd;
