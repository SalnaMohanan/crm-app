import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Followup = ({ insideadmin }) => {
  const followup = [
    { contactname: "abc", type: "Email", Date: "2025-03-10", status: "Pending" },
  ];

  return (
    <>
      <Container className="p-4">
        <h1 className="text-center mb-4 text-primary fw-bold">Follow-Up</h1>

        {/* Add New Follow-up Button (Only for Users) */}
        {!insideadmin && (
          <Link to='/followupadd'>
            <Button className="btn btn-success mb-3" style={{ width: "200px" }}>
              Add New Follow-up ➕
            </Button>
          </Link>
        )}

        <Table striped bordered hover responsive className="text-center shadow-sm p-3 bg-white rounded" style={{ color: "black" }}>
          <thead className="bg-dark text-white">
            <tr>
              <th>#</th>
              <th>Contact Name</th>
              <th>Type</th>
              <th>Date</th>
              <th>Status</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {followup.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <Link to='/followupview'>{item.contactname}</Link>
                </td>
                <td>{item.type}</td>
                <td>{item.Date}</td>
                <td>{item.status}</td>
                {/* For Users: No additional actions */}
                {/* Admin actions can be added here if needed */}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Followup;
