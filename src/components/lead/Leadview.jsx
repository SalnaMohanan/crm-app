import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const LeadView = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get lead ID from URL params

  // Sample lead data (Replace with API data)
  const leadData = {
  
    name: "",
    email: "",
    phone: "",
    source: "",
    status: "",
    assignedTo: "",
    createdAt: "",
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow-lg p-4" style={{ width: "40rem" }}>
        <Card.Body>
          <h2 className="text-center text-primary fw-bold mb-3">👤 Lead Details</h2>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Name:</strong>
            </Col>
            <Col xs={8}>{leadData.name}</Col>
          </Row>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Email:</strong>
            </Col>
            <Col xs={8}>{leadData.email}</Col>
          </Row>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Phone:</strong>
            </Col>
            <Col xs={8}>{leadData.phone}</Col>
          </Row>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Source:</strong>
            </Col>
            <Col xs={8}>{leadData.source}</Col>
          </Row>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Status:</strong>
            </Col>
            <Col xs={8}>
              <span
                className={`badge ${
                  leadData.status === "New"
                    ? "bg-warning"
                    : leadData.status === "Contacted"
                    ? "bg-info"
                    : "bg-success"
                }`}
              >
                {leadData.status}
              </span>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Assigned To:</strong>
            </Col>
            <Col xs={8}>{leadData.assignedTo}</Col>
          </Row>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Created On:</strong>
            </Col>
            <Col xs={8}>{leadData.createdAt}</Col>
          </Row>

          {/* Close Button (Centered) */}
          <div className="d-flex justify-content-center mt-4">
            <Button variant="secondary" onClick={() => navigate("/lead")}>
              Close
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LeadView;
