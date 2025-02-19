import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.png'

const Header = ({ insideDashboard }) => {
  return (
    <Navbar className='bg-dark'>
      <Container>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Navbar.Brand className='text-warning fw-bolder'>
            <img src={icon} alt="no img" width={'50px'}/>
            CRM
          </Navbar.Brand>
          
        </Link>
        
        {
          insideDashboard &&
          <div className='ms-auto'>
            <Link to={'/'} className='btn btn-link'>
              Logout <i className="fa-solid fa-right-from-bracket"></i> 
            </Link>
          </div>
        }
      </Container>
    </Navbar>
  );
};

export default Header;
