import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Followview = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get lead ID from URL params

  // Sample lead data (Replace with API data)
  const followUpData = {
    id: id,
    contactname: "",
    email: "",
    phone: "",
    source: "", // Corrected key
    status: "",
    notes: "",
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow-lg p-4" style={{ width: "40rem" }}>
        <Card.Body>
          <h2 className="text-center text-primary fw-bold mb-3">👤 Follow-up Details</h2>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Name:</strong>
            </Col>
            <Col xs={8}>{followUpData.contactname}</Col>
          </Row>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Email:</strong>
            </Col>
            <Col xs={8}>{followUpData.email}</Col>
          </Row>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Phone:</strong>
            </Col>
            <Col xs={8}>{followUpData.phone}</Col>
          </Row>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Source:</strong>
            </Col>
            <Col xs={8}>{followUpData.source}</Col>
          </Row>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Status:</strong>
            </Col>
            <Col xs={8}>
              <span
                className={`badge ${
                  followUpData.status === "New"
                    ? "bg-warning"
                    : followUpData.status === "Contacted"
                    ? "bg-info"
                    : "bg-success"
                }`}
              >
                {followUpData.status}
              </span>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Note:</strong>
            </Col>
            <Col xs={8}>{followUpData.notes}</Col>
          </Row>

          {/* Close Button (Centered) */}
          <div className="d-flex justify-content-center mt-4">
            <Button variant="secondary" onClick={() => navigate("/followup")}>
              Close
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Followview;
