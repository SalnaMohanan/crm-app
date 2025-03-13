import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Customer = ({ insideadmin }) => {
  const navigate = useNavigate();

  const customers = 
   [ {
      name: "",
      email: "",
      phone: "",
    }]
  

  return (
    <Container className="p-4">
      <h2 className="text-center mb-4 text-primary fw-bold">Customer Management</h2>

      {/* Add Customer Button (Only for Admin) */}
      {insideadmin && (
        <div className="mb-3">
          <Button variant="success" onClick={() => navigate("/customeradd")}>
            Add New Customer ➕
          </Button>
        </div>
      )}

      {/* Customers Table */}
      <Table striped bordered hover responsive className="shadow-sm text-center">
        <thead className="bg-dark text-white">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>
                <div className="d-flex justify-content-center gap-2">
                  <Button variant="info" onClick={() => navigate('/customerview')}>
                    <i className="fa-solid fa-eye"></i>
                  </Button>
                  <Button variant="warning" onClick={() => navigate('/customeredit')}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button>
                  <Button variant="danger">
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Customer;
