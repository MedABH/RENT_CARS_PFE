// AgenceProfile.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AgenceProfile = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Agence Profile</Card.Title>
                            <Card.Text>
                                <strong>Agence Name:</strong> ABC Corp
                            </Card.Text>
                            <Card.Text>
                                <strong>Email:</strong> contact@abccorp.com
                            </Card.Text>
                            <Card.Text>
                                <strong>Phone Number:</strong> 987-654-3210
                            </Card.Text>
                            <Card.Text>
                                <strong>Address:</strong> 123 Business St, City, Country
                            </Card.Text>
                            {/* Add more fields as necessary */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AgenceProfile;
