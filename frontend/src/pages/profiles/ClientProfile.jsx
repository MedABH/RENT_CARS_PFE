// ClientProfile.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ClientProfile = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Client Profile</Card.Title>
                            <Card.Text>
                                <strong>Full Name:</strong> John Doe
                            </Card.Text>
                            <Card.Text>
                                <strong>Email:</strong> john.doe@example.com
                            </Card.Text>
                            <Card.Text>
                                <strong>Phone Number:</strong> 123-456-7890
                            </Card.Text>
                            {/* Add more fields as necessary */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ClientProfile;
