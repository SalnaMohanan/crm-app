import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Header insideDashboard={true} />
      <Container fluid className="min-vh-50">
        <Row className="h-100">
          {/* Sidebar (1/3) */}
          <Col md={2} className="bg-light p-0 d-flex flex-column min-vh-100">
            <SideBar />
          </Col>

          {/* Main Content (2/3) */}
          <Col md={10} className="p-3">
            <Card className="p-3 shadow-sm h-100">
              <Card.Body>
                <Card.Title><h2>Welcome <span>user ,</span></h2></Card.Title>
                <Row className="mt-5">
              <Col md={3}>
                <Card className="p-3 shadow-sm">
                  <Card.Body>
                    <Card.Title>Campaign</Card.Title>
                    <Card.Text>Total Campaign : 
                      <br />
                      <Link to={'/campaign'}  className="text-black fw-semibold" style={{ textDecoration: "none" }}><i class="fa-solid fa-arrow-right "></i>
                      </Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="p-3 shadow-sm">
                  <Card.Body>
                    <Card.Title>Lead</Card.Title>
                    <Card.Text>Total Lead : 
                      <br />
                       <Link to={'/lead'} className="text-black fw-semibold" style={{ textDecoration: "none" }}><i class="fa-solid fa-arrow-right"></i>
                              </Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="p-3 shadow-sm">
                  <Card.Body>
                    <Card.Title>Followup</Card.Title>
                    <Card.Text>Total Followup
                      <br />
                      <Link to={'/followup'} className="text-black fw-semibold" style={{ textDecoration: "none" }}><i class="fa-solid fa-arrow-right"></i>
                              </Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="p-3 shadow-sm">
                  <Card.Body>
                    <Card.Title>Customer</Card.Title>
                    <Card.Text>Total Customer
                      <br />
                      <Link to={'/customer'} className="text-black fw-semibold" style={{ textDecoration: "none" }}><i class="fa-solid fa-arrow-right"></i>
                              </Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
