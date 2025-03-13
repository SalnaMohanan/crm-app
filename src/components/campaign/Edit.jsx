
import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const EditCampaign = ({insideadmin}) => {
  const { id } = useParams(); // Get campaign ID from URL
  const navigate = useNavigate();

  const [campaign, setCampaign] = useState({
    name: "",
    type: "",
    beginDate: "",
    endDate: "",
    status: "",
    description: "",
    image: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch campaign details when the component loads
  useEffect(() => {
    if (!id) return;

    const fetchCampaign = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/campaigns/${id}`);
        setCampaign(response.data);
      } catch (error) {
        console.error("Error fetching campaign:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  // Validate form before submission
  const validateForm = () => {
    let newErrors = {};

    if (!campaign.name.trim()) newErrors.name = "Campaign name is required.";
    if (!campaign.type.trim()) newErrors.type = "Campaign type is required.";
    if (!campaign.beginDate) newErrors.beginDate = "Begin date is required.";
    if (!campaign.endDate) newErrors.endDate = "End date is required.";
    else if (new Date(campaign.endDate) < new Date(campaign.beginDate))
      newErrors.endDate = "End date cannot be before begin date.";
    if (!campaign.status) newErrors.status = "Please select a status.";
    if (!campaign.description.trim()) newErrors.description = "Description is required.";

    if (campaign.image) {
      const validURL = /^(http|https):\/\/[^ "]+$/;
      if (!validURL.test(campaign.image)) newErrors.image = "Enter a valid image URL.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaign({ ...campaign, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      console.log("Submitting campaign data:", campaign); // Debugging
      const response = await axios.put(`http://localhost:3000/campaigns/${id}`, campaign);
      console.log("API Response:", response.data); // Debugging
      alert("Campaign updated successfully!");
      navigate(insideadmin ?  "/campaign":"/user/campaign") 
       } catch (error) {
      console.error("Error updating campaign:", error.response?.data || error.message);
      alert("Failed to update campaign.");
    }
  };

  return (
    <Container className="p-4">
      <h2 className="text-center mb-4 text-primary fw-bold">✏️ Edit Campaign</h2>
      <Card className="shadow-lg border-0 rounded-4 p-4">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <Form onSubmit={handleSubmit}>
            {/* Campaign Name & Type */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold">Campaign Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={campaign.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold">Campaign Type</Form.Label>
                  <Form.Control
                    type="text"
                    name="type"
                    value={campaign.type}
                    onChange={handleChange}
                    isInvalid={!!errors.type}
                  />
                  <Form.Control.Feedback type="invalid">{errors.type}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Dates */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold">Begin Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="beginDate"
                    value={campaign.beginDate}
                    onChange={handleChange}
                    isInvalid={!!errors.beginDate}
                  />
                  <Form.Control.Feedback type="invalid">{errors.beginDate}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold">End Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    value={campaign.endDate}
                    onChange={handleChange}
                    isInvalid={!!errors.endDate}
                  />
                  <Form.Control.Feedback type="invalid">{errors.endDate}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Status */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold">Status</Form.Label>
                  <Form.Select
                    name="status"
                    value={campaign.status}
                    onChange={handleChange}
                    isInvalid={!!errors.status}
                  >
                    <option value="">Select Status</option>
                    <option value="Active">Active</option>
                    <option value="Planned">Planned</option>
                    <option value="Completed">Completed</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">{errors.status}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Description */}
            <Row className="mb-3">
              <Col>
                <Form.Group>
                  <Form.Label className="fw-bold">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={campaign.description}
                    onChange={handleChange}
                    isInvalid={!!errors.description}
                  />
                  <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Image Upload */}
            <Row className="mb-4">
              <Col>
                <Form.Group>
                  <Form.Label className="fw-bold">Campaign Image</Form.Label>
                  <Form.Control
                    type="text"
                    name="image"
                    value={campaign.image}
                    onChange={handleChange}
                    isInvalid={!!errors.image}
                  />
                  <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
                  <div className="mt-3 text-center">
                    {campaign.image && (
                      <img
                        src={campaign.image}
                        alt="Campaign"
                        className="img-fluid rounded"
                        style={{ maxWidth: "100%", height: "250px", objectFit: "cover" }}
                      />
                    )}
                  </div>
                </Form.Group>
              </Col>
            </Row>

            {/* Buttons */}
            <Row className="mt-3 d-flex justify-content-center">
              <Col md={4}>
                <Button variant="primary" type="submit" className="w-100">
                  Save Changes
                </Button>
              </Col>
              <Col md={4}>
                <Button variant="secondary" className="w-100" onClick={() => navigate(insideadmin ?  "/campaign":"/user/campaign")}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Card>
    </Container>
  );
};

export default EditCampaign;
