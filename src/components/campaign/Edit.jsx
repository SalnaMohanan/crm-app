import React, { useState } from "react";
import { Container, Form, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EditCampaign = () => {
  const navigate = useNavigate()
  // State for campaign details
  const [campaign, setCampaign] = useState({
    name: "",
    type: "",
    beginDate: "",
    endDate: "",
    status: "",
    description:"",
    image: "", // Placeholder image
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaign({ ...campaign, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Campaign Details:", campaign);
    alert("Campaign details updated successfully!");
    navigate("/campaign")
  };

  return (
    <Container className="p-4">
      <h2 className="text-center mb-4 text-primary fw-bold">✏️ Edit Campaign</h2>
      <Card className="shadow-lg border-0 rounded-4 p-4">
        <Form onSubmit={handleSubmit}>
          {/* Campaign Name & Type */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-bold">Campaign Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={campaign.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-bold">Campaign Type</Form.Label>
                <Form.Control
                  type="text"
                  name="type"
                  value={campaign.type}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Dates */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-bold">Begin Date</Form.Label>
                <Form.Control
                  type="date"
                  name="beginDate"
                  value={campaign.beginDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-bold">End Date</Form.Label>
                <Form.Control
                  type="date"
                  name="endDate"
                  value={campaign.endDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Status */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-bold">Status</Form.Label>
                <Form.Select name="status" value={campaign.status} onChange={handleChange}>
                  <option>Active</option>
                  <option>Planned</option>
                  <option>Completed</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* Description */}
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label className="fw-bold">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={campaign.description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Image Upload */}
          <Row className="mb-4">
            <Col>
              <Form.Group>
                <Form.Label className="fw-bold">Campaign Image</Form.Label>
                <Form.Control type="text" name="image" value={campaign.image} onChange={handleChange} />
                <div className="mt-3 text-center">
                  {campaign.image && (
                    <img
                      src={campaign.image}
                      alt="Campaign"
                      className="img-fluid rounded"
                      style={{ maxWidth: "100%", height: "250px", objectFit: "cover" }}
                    />
                  )}
                </div>
              </Form.Group>
            </Col>
          </Row>

          {/* Centered Buttons */}
          <div className="d-flex justify-content-center gap-3">
            <Button variant="success" type="submit" className="px-4">
              ✅ Save Changes
            </Button>
            
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default EditCampaign;
