import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Followup= () => {
    
  const followup = [
    {  contactname: "abc", type: "", Date: "",  status: "" },
  ];

  

  return (


    <>

      <Container className="p-4">
      <div className="p-1"><Link to='/dashboard'><i class="fa-solid fa-arrow-left"></i></Link></div>
      <h1 className="text-center m-3">FOLLOW-UP</h1>
      <Link to='/followupadd'> 
      <Button   className="btn btn-success mb-3" style={{ width: "200px" }}>
          Add New Follow-up ➕ 
        </Button></Link>
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
            {followup.map((followup, index) => (
              <tr key={followup.id}>
                <td>{index + 1}</td>
                <td><Link to='/followupview'> {followup.contactname}</Link></td>
                <td>{followup.type}</td>
                <td>{followup.Date}</td>
                <td>{followup.status}</td>
                {/* <td>
                  <div style={{ display: 'flex', gap: '20px' }}>
                   <Link to='/followupview'> <Button className="btn btn-dark">
                      <i className="fa-regular fa-eye"></i>
                    </Button></Link>
                    <Link to='/campedit'> 
                    <Button className="btn btn-info">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button></Link>
                   
                     <Button className="btn btn-danger">
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Followup;
