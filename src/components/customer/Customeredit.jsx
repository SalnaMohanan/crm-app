import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";


const Customeredit = ({insideadmin}) => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get lead ID from URL params

  // Sample existing lead data (replace with API data)
  const initialLead = {
    name: "",
    email: "",
    phone: "",
    source: "",
    status: "",
    assignedTo: "",
    company:"",
      industry:"",
      address:"",
        notes: "",
  };

  const [customerData, setCustomerData] = useState(initialLead);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // TODO: Fetch the lead details using `id` from API and setcustomerData
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!customerData.name.trim()) newErrors.name = "Name is required";
    if (!customerData.email.trim() || !/\S+@\S+\.\S+/.test(customerData.email)) newErrors.email = "Valid email is required";
    if (!customerData.phone.trim() || !/^\d{10}$/.test(customerData.phone)) newErrors.phone = "Valid 10-digit phone number required";
    if (!customerData.source.trim()) newErrors.source = "Source is required";
    if (!customerData.status.trim()) newErrors.status = "Status is required";
    if (!customerData.assignedTo.trim()) newErrors.assignedTo = "Assigned To is required";
    if (!customerData.company.trim()) newErrors.company = "Name is required";
    if (!customerData.industry.trim()) newErrors.industry = "industry is required";
    if (!customerData.address.trim()) newErrors.address = "address is required";
    if (!customerData.notes.trim()) newErrors.notes = "notes is required";
    
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Updated Lead Data:", Data);
    alert("customer details updated successfully!");
    
    // TODO: Send updated data to API

    navigate("/customer"); // Redirect back to leads page
  };
  return (
    <Container className="p-4">
    <h2 className="text-center text-warning fw-bold">✏️ Edit Customer</h2>
    <Card className="shadow-lg border-0 rounded-4 p-4">

    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="customerName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={customerData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="customerEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={customerData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="customerPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={customerData.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="customerSource">
            <Form.Label>customer Source</Form.Label>
            <Form.Control
              type="text"
              name="source"
              value={customerData.source}
              onChange={handleChange}
              isInvalid={!!errors.source}
            />
            <Form.Control.Feedback type="invalid">{errors.source}</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="customerStatus">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={customerData.status}
              onChange={handleChange}
              isInvalid={!!errors.status}
            >
              <option value="">Select Status</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.status}</Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="customerAssignedTo">
            <Form.Label>Assigned To</Form.Label>
            <Form.Control
              type="text"
              name="assignedTo"
              value={customerData.assignedTo}
              onChange={handleChange}
              isInvalid={!!errors.assignedTo}
            />
            <Form.Control.Feedback type="invalid">{errors.assignedTo}</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="customercompany">
            <Form.Label>company</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={customerData.company}
              onChange={handleChange}
              isInvalid={!!errors.company}
            />
            <Form.Control.Feedback type="invalid">{errors.company}</Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="customerindustry">
            <Form.Label>industry</Form.Label>
            <Form.Control
              type="text"
              name="industry"
              value={customerData.industry}
              onChange={handleChange}
              isInvalid={!!errors.industry}
            />
            <Form.Control.Feedback type="invalid">{errors.industry}</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="customerAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
            as="textarea"
              type="text"
              name="address"
              value={customerData.address}
              onChange={handleChange}
              isInvalid={!!errors.address}
            />
            <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="customernotes">
            <Form.Label>notes</Form.Label>
            <Form.Control
            as="textarea"
              type="text"
              name="notes"
              value={customerData.notes}
              onChange={handleChange}
              isInvalid={!!errors.notes}
            />
            <Form.Control.Feedback type="invalid">{errors.notes}</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
     

      {/* Centered Submit & Cancel Buttons */}
      <Row className="mt-3 d-flex justify-content-center">
        <Col md={4}>
            <Button
            variant="secondary"
            className="w-100"
          onClick={() => navigate(insideadmin ?  "/user/customer" :"/customer")}>
                 Save change
              </Button>
        </Col>
        <Col md={4}>
  <Button
    variant="secondary"
    className="w-100"
    onClick={() => navigate(insideadmin ? "/user/customer" : "/customer")}
  >
    Cancel
  </Button>
</Col>

      </Row>
    </Form>
    </Card>
  </Container>
  )
}

export default Customeredit