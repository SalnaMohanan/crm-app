import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LeadTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if customer was added from location state
  const isConverted = location.state?.converted || false;

  const handleConvert = () => {
    navigate("/customeradd", { state: { fromLead: true } });
  }; 
  const leads = [
    {
      
      name: "",
      email: "",
      phone: "",
      source: "",
      status: "",
      assignedTo: "",
    }
  ];

  return (
    <Container className="p-4">
      <div className="p-1"><Link to='/dashboard'><i class="fa-solid fa-arrow-left"></i></Link></div>

      <h2 className="text-center mb-4 text-primary fw-bold"> Lead Management</h2>

      {/* Add Lead Button */}
      <div className=" mb-3">
        <Button variant="success" onClick={() => navigate("/leadadd")}>
          Add New Lead ➕ 
        </Button>
      </div>

      {/* Leads Table */}
      <Table striped bordered hover responsive className="shadow-sm text-center">
        <thead className="bg-dark text-white">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Source</th>
            <th>Status</th>
            <th>Assigned To</th>
            <th>Actions</th>
            <th>Convert to customer</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
            <tr key={lead.id}>
              <td>{index + 1}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.source}</td>
              <td>
                <span
                  className={`badge ${
                    lead.status === "New"
                      ? "bg-primary"
                      : lead.status === "Contacted"
                      ? "bg-warning"
                      : lead.status === "Qualified"
                      ? "bg-success"
                      : "bg-secondary"
                  }`}
                >
                  {lead.status}
                </span>
              </td>
              <td>{lead.assignedTo}</td>
              <td>
                <div className="d-flex justify-content-center gap-2">
                  <Button variant="info" onClick={() => navigate('/leadview')}>
                    <i className="fa-solid fa-eye"></i>
                  </Button>
                  <Button variant="warning" onClick={() => navigate('/leadedit')}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button>
                  <Button variant="danger">
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                </div>
              </td>
              <td>
              <div className="text-center mt-3">
      {isConverted ? (
        <Button variant="success" disabled>
          Converted
        </Button>
      ) : (
        <Button variant="primary" onClick={handleConvert}>
          Convert to Customer
        </Button>
      )}
    </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default LeadTable;
