import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const Campaign = ({ insideadmin }) => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/campaigns`);
      setCampaigns(response.data);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this campaign?")) return;
  
    try {
      const response = await axios.delete(`http://localhost:3000/campaigns/${id}`);
      console.log("Delete response:", response.data);
      setCampaigns((prev) => prev.filter((campaign) => campaign._id !== id));
      alert("Campaign deleted successfully!");
    } catch (error) {
      console.error("Delete failed:", error.response?.data || error.message);
      alert(`Failed to delete campaign: ${error.response?.data?.error || "Unknown error"}`);
    }
  };
  

  return (
    <Container className="p-4">
      <h2 className="text-center mb-4 text-primary fw-bold">Campaign</h2>

      {insideadmin && (
        <Link to="/campadd">
          <Button className="btn btn-success mb-3" style={{ width: "200px" }}>
            Add New Campaign ➕
          </Button>
        </Link>
      )}

      <Table striped bordered hover responsive className="text-center shadow-sm p-3 bg-white rounded">
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
          {campaigns.length > 0 ? (
            campaigns.map((campaign, index) => (
              <tr key={campaign._id}>
                <td>{index + 1}</td>
                <td>{campaign.name}</td>
                <td>{campaign.type}</td>
                <td>{new Date(campaign.beginDate).toLocaleDateString()}</td>
                <td>{new Date(campaign.endDate).toLocaleDateString()}</td>
                <td>{campaign.status}</td>
                <td>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Link to={`/campview/${campaign._id}`}>
                      <Button className="btn btn-info">
                        <i className="fa-regular fa-eye"></i>
                      </Button>
                    </Link>

                    {insideadmin && (
                      <>
                        <Link to={`/campedit/${campaign._id}`}>
                          <Button className="btn btn-warning">
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Button>
                        </Link>
                        <Button className="btn btn-danger" onClick={() => handleDelete(campaign._id)}>
                          <i className="fa-solid fa-trash"></i>
                        </Button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center text-muted">No campaigns found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Campaign;
