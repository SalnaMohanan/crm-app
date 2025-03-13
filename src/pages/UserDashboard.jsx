import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UserSideBar from "../components/userSideBar";
import Campaign from "./Campaign";
import Lead from "./Lead";
import Customer from "./Customer";
import Header from "../components/Header";
import { Card, Col, Container, Row } from "react-bootstrap";
import Followup from "./Followup";

const UserDashboard = () => {

  return (
    <>
    <Header insideDashboard={true} />
    
        <Routes>
          <Route path="/campaign" element={<Campaign insideadmin={false} />} />
          <Route path="/lead" element={<Lead insideadmin={false}/>} />
          <Route path="/followup" element={<Followup />} />

          <Route path="/customer" element={<Customer />} />
        </Routes>
      
    <Container fluid className="min-vh-50">

    <Row className="h-100">
      {/* Sidebar */}
      <Col md={2} className="bg-primary p-0 d-flex flex-column min-vh-100">
      <UserSideBar />
          </Col>

      {/* Main Content */}
      

      <Col md={10} className="p-3">
            <Card className="p-3 shadow-sm h-100">
              <Card.Body>
                <Card.Title><h2>Welcome <span>user</span></h2></Card.Title>
                <Row className="mt-5">
              <Col md={3}>
                <Card className="p-3 shadow-sm">
                  <Card.Body>
                    <Card.Title>Campaign</Card.Title>
                    <Card.Text>Total Campaign : 
                      <br />
                      <Link to={'/user/campaign'}  className="text-black fw-semibold" style={{ textDecoration: "none" }}><i class="fa-solid fa-arrow-right "></i>
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
                       <Link to={'/user/lead'} className="text-black fw-semibold" style={{ textDecoration: "none" }}><i class="fa-solid fa-arrow-right"></i>
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
                      <Link to={'/user/followup'} className="text-black fw-semibold" style={{ textDecoration: "none" }}><i class="fa-solid fa-arrow-right"></i>
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
                      <Link to={'/user/customer'} className="text-black fw-semibold" style={{ textDecoration: "none" }}><i class="fa-solid fa-arrow-right"></i>
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

export default UserDashboard;
