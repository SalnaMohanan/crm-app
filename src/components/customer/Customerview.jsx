import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const CustomerView = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get lead ID from URL params

  // Sample customer data (Replace with API data)
  const customerData = {
  
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

  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow-lg p-4" style={{ width: "40rem" }}>
        <Card.Body>
          <h2 className="text-center text-primary fw-bold mb-3">👤 Customer Details</h2>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Name:</strong>
            </Col>
            <Col xs={8}>{customerData.name}</Col>
          </Row>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Email:</strong>
            </Col>
            <Col xs={8}>{customerData.email}</Col>
          </Row>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Phone:</strong>
            </Col>
            <Col xs={8}>{customerData.phone}</Col>
          </Row>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Source:</strong>
            </Col>
            <Col xs={8}>{customerData.source}</Col>
          </Row>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Status:</strong>
            </Col>
            <Col xs={8}>
              <span
                className={`badge ${
                  customerData.status === "New"
                    ? "bg-warning"
                    : customerData.status === "Contacted"
                    ? "bg-info"
                    : "bg-success"
                }`}
              >
                {customerData.status}
              </span>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Assigned To:</strong>
            </Col>
            <Col xs={8}>{customerData.assignedTo}</Col>
          </Row>

          <Row className="mb-3">
            <Col xs={4}>
              <strong>Company:</strong>
            </Col>
            <Col xs={8}>{customerData.company}</Col>
          </Row>
          <Row className="mb-3">
            <Col xs={4}>
              <strong>Industry:</strong>
            </Col>
            <Col xs={8}>{customerData.industry}</Col>
          </Row>
          <Row className="mb-3">
            <Col xs={4}>
              <strong>Address:</strong>
            </Col>
            <Col xs={8}>{customerData.address}</Col>
          </Row>
          <Row className="mb-3">
            <Col xs={4}>
              <strong>notes:</strong>
            </Col>
            <Col xs={8}>{customerData.notes}</Col>
          </Row>

          {/* Close Button (Centered) */}
          <div className="d-flex justify-content-center mt-4">
            <Button variant="secondary" onClick={() => navigate("/customer")}>
              Close
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CustomerView;
