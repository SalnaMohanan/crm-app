import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CampaignTable = () => {
    
  const campaigns = [
    {  name: "", type: "", beginDate: "", endDate: "", status: "" },

  ];

  

  return (

    <>
     <Container className="p-4">
     <div className="p-1"><Link to='/dashboard'><i class="fa-solid fa-arrow-left"></i></Link></div>
     <h1 className="text-center m-3">CAMPAIGN</h1>
      <Link to='/campadd'> 
      <Button   className="btn btn-success mb-3" style={{ width: "200px" }}>
          Add New Campaign ➕ 
        </Button></Link>
        <Table striped bordered hover responsive className="text-center shadow-sm p-3 bg-white rounded" style={{ color: "black" }}>
          <thead className="bg-dark text-white">
            <tr>
              <th>#</th>
              <th>Campaign Name</th>
              <th>Campaign Type</th>
              <th>Proposed Begin Date</th>
              <th>Proposed End Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign, index) => (
              <tr key={campaign.id}>
                <td>{index + 1}</td>
                <td>{campaign.name}</td>
                <td>{campaign.type}</td>
                <td>{campaign.beginDate}</td>
                <td>{campaign.endDate}</td>
                <td>{campaign.status}</td>
                <td>
                  <div style={{ display: 'flex', gap: '20px' }}>
                   <Link to='/campview'> <Button className="btn btn-dark">
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
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default CampaignTable;
