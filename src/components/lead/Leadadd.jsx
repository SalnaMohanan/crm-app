import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Leadadd = () => {
  const navigate = useNavigate();

  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    status: "",
    assignedTo: "",
    image: null,
    notes: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeadData({ ...leadData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLeadData({ ...leadData, image: file });
    }
  };

  // Validation Function
  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!leadData.name.trim()) newErrors.name = "Lead Name is required!";
    if (!leadData.email.trim() || !emailRegex.test(leadData.email))
      newErrors.email = "Valid Email is required!";
    if (!leadData.phone.trim() || !phoneRegex.test(leadData.phone))
      newErrors.phone = "Valid 10-digit Phone Number is required!";
    if (!leadData.source.trim()) newErrors.source = "Lead Source is required!";
    if (!leadData.status) newErrors.status = "Status selection is required!";
    if (!leadData.assignedTo.trim()) newErrors.assignedTo = "Assigned To is required!";
    if (!leadData.notes.trim()) newErrors.notes = "Notes are required!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Lead Data Submitted:", leadData);
      alert("Lead details added successfully!");

      // Reset form
      setLeadData({
        name: "",
        email: "",
        phone: "",
        source: "",
        status: "",
        assignedTo: "",
        image: null,
        notes: "",
      });

      navigate("/leads");
    }
  };

  return (
    <Container className="p-4">
      <h2 className="text-center mb-4 text-primary fw-bold">📝 Add New Lead</h2>
      <Form onSubmit={handleSubmit}>
        {/* Name & Email */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-bold">Lead Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={leadData.name}
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
                value={leadData.email}
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
                value={leadData.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-bold">Lead Source</Form.Label>
              <Form.Control
                type="text"
                name="source"
                value={leadData.source}
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
                value={leadData.status}
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
                value={leadData.assignedTo}
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
              <Form.Label className="fw-bold">Lead Image</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
              {leadData.image && (
                <div className="mt-3 text-center">
                  <img
                    src={URL.createObjectURL(leadData.image)}
                    alt="Preview"
                    className="img-fluid rounded"
                    style={{ maxWidth: "100%", height: "200px", objectFit: "cover" }}
                  />
                </div>
              )}
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
                value={leadData.notes}
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
            <Button variant="primary" type="submit" className="w-100">
              ➕ Add Lead
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Leadadd;
