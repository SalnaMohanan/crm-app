import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CampaignDetails = () => {
  const navigate = useNavigate();
  const [campaignData, setCampaignData] = useState({
    name: "",
    type: "",
    beginDate: "",
    endDate: "",
    status: "",
    description: "",
    image: null,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!campaignData.name.trim()) {
      newErrors.name = "Campaign name is required.";
    }

    if (!campaignData.type.trim()) {
      newErrors.type = "Campaign type is required.";
    }

    if (!campaignData.beginDate) {
      newErrors.beginDate = "Begin date is required.";
    }

    if (!campaignData.endDate) {
      newErrors.endDate = "End date is required.";
    } else if (campaignData.beginDate && campaignData.endDate < campaignData.beginDate) {
      newErrors.endDate = "End date cannot be before begin date.";
    }

    if (!campaignData.status) {
      newErrors.status = "Please select a status.";
    }

    if (!campaignData.description.trim()) {
      newErrors.description = "Description is required.";
    }

    if (campaignData.image) {
      const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (!allowedTypes.includes(campaignData.image.type)) {
        newErrors.image = "Only JPG and PNG files are allowed.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaignData({ ...campaignData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCampaignData({ ...campaignData, image: file });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (validateForm()) {
    const formData = new FormData();
    Object.entries(campaignData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      await axios.post("http://localhost:3000/campaigns", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      alert("Campaign added successfully!");
      navigate("/campaign"); // Redirect after success
    } catch (error) {
      console.error("Error adding campaign:", error);
    }
  }
};

  return (
    <Container className="p-4">
      <h2 className="text-center mb-4">📝 Add New Campaign</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="campaignName">
              <Form.Label>Campaign Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={campaignData.name}
                onChange={handleChange}
                placeholder="Enter campaign name"
               
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="campaignType">
              <Form.Label>Campaign Type</Form.Label>
              <Form.Control
                type="text"
                name="type"
                value={campaignData.type}
                onChange={handleChange}
                placeholder="Enter campaign type"
                
                isInvalid={!!errors.type}
              />
              <Form.Control.Feedback type="invalid">{errors.type}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="beginDate">
              <Form.Label>Proposed Begin Date</Form.Label>
              <Form.Control
                type="date"
                name="beginDate"
                value={campaignData.beginDate}
                onChange={handleChange}
                
                isInvalid={!!errors.beginDate}
              />
              <Form.Control.Feedback type="invalid">{errors.beginDate}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="endDate">
              <Form.Label>Proposed End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={campaignData.endDate}
                onChange={handleChange}
                
                isInvalid={!!errors.endDate}
              />
              <Form.Control.Feedback type="invalid">{errors.endDate}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="campaignStatus">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={campaignData.status}
                onChange={handleChange}
                
                isInvalid={!!errors.status}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Planned">Planned</option>
                <option value="Completed">Completed</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.status}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="imageUpload">
              <Form.Label>Campaign Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                name="image"
                onChange={handleImageChange}
                isInvalid={!!errors.image}
              />
              <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="description">
              <Form.Label>Campaign Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                value={campaignData.description}
                onChange={handleChange}
                placeholder="Enter a brief description of the campaign"
                
                isInvalid={!!errors.description}
              />
              <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* Centering the Submit Button */}
        <Row className="d-flex justify-content-center mt-3">
          <Col md={4}>
            <Button variant="primary" type="submit" className="w-100">
              Add Campaign
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CampaignDetails;
