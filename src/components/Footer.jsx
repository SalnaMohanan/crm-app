import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h5 className="fw-bold">Prospect CRM</h5>
            <p className="mb-0">Empowering small businesses with smarter customer management.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="https://facebook.com" className="text-light me-3"><FaFacebook size={20} /></a>
            <a href="https://twitter.com" className="text-light me-3"><FaTwitter size={20} /></a>
            <a href="https://linkedin.com" className="text-light me-3"><FaLinkedin size={20} /></a>
            <a href="mailto:support@prospectcrm.com" className="text-light"><FaEnvelope size={20} /></a>
          </Col>
        </Row>
        <hr style={{ borderColor: '#666' }} />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Prospect CRM. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
