import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CampaignDetails = () => {
  const navigate = useNavigate()
  const [campaignData, setCampaignData] = useState({
    name: "",
    type: "",
    beginDate: "",
    endDate: "",
    status: "",
    description: "",
    image: null,
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for adding the campaign, such as sending the data to an API or updating state
    console.log("Campaign Data Submitted:", campaignData);
    alert("Campaign details add successfully!");

    // Reset form after submission
    setCampaignData({
      name: "",
      type: "",
      beginDate: "",
      endDate: "",
      status: "",
      description: "",
      image: null,
    });
    navigate('/campaign')
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
                required
              />
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
                required
              />
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
                required
              />
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
                required
              />
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
                required
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Planned">Planned</option>
                <option value="Completed">Completed</option>
              </Form.Select>
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
              />
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
                required
              />
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
