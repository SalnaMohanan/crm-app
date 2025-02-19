import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ViewCampaign = () => {
  const navigate = useNavigate(); // Navigation Hook

  // Example campaign data (Replace with actual API data if needed)
  const [campaign] = useState({
    name: "",
    type: "",
    beginDate: "",
    endDate: "",
    status: "",
    description:"",
    image: "", // Example image URL
  });

  return (
    <Container className="p-4">
      <h2 className="text-center mb-4 text-primary fw-bold">📢 Campaign Details</h2>
      <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
        {/* Campaign Image */}
        {campaign.image && (
          <div className="text-center bg-dark">
            <img
              src={campaign.image}
              alt="Campaign"
              className="img-fluid rounded-top"
              style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        )}

        <Card.Body className="p-4">
          <Row className="mb-3">
            <Col md={6}>
              <Card.Title className="text-uppercase text-muted">Campaign Name</Card.Title>
              <Card.Text className="fw-semibold fs-5">{campaign.name}</Card.Text>
            </Col>
            <Col md={6}>
              <Card.Title className="text-uppercase text-muted">Campaign Type</Card.Title>
              <Card.Text className="fw-semibold fs-5">{campaign.type}</Card.Text>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Card.Title className="text-uppercase text-muted">Begin Date</Card.Title>
              <Card.Text className="fw-semibold fs-5">{campaign.beginDate}</Card.Text>
            </Col>
            <Col md={6}>
              <Card.Title className="text-uppercase text-muted">End Date</Card.Title>
              <Card.Text className="fw-semibold fs-5">{campaign.endDate}</Card.Text>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Card.Title className="text-uppercase text-muted">Status</Card.Title>
              <span
                className={`badge px-3 py-2 fs-6 ${
                  campaign.status === "Active" ? "bg-success" : "bg-secondary"
                }`}
              >
                {campaign.status}
              </span>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col>
              <Card.Title className="text-uppercase text-muted">Description</Card.Title>
              <Card.Text className="fs-5">{campaign.description}</Card.Text>
            </Col>
          </Row>

          {/* Navigation and Close Button */}
          <div className="d-flex justify-content-center gap-3">
            <Button variant="secondary" className="px-4" onClick={() => navigate('/campaign')}>
            Close
            </Button>
           
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ViewCampaign;
