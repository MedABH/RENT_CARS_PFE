import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {jwtDecode} from "jwt-decode"; // Assurez-vous que jwt-decode est correctement installé

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userData = jwtDecode(token);
      setUser(userData.user); // Accédez à la propriété 'user' du payload du token JWT
    }
  }, []);

  return (
    <Container className="mt-5">
      <h1>Account Information</h1>
      <Row>
        <Col md={6}>
          {user && (
            <>
              {user.typeAccount === 'client' ? (
                <>
                  <p><strong>Full Name:</strong> {user.fullName}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone Number:</strong> {user.numberPhone}</p>
                </>
              ) : user.typeAccount === 'entreprise' ? (
                <>
                  <p><strong>Agency Name:</strong> {user.nameagence}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone Number:</strong> {user.numberPhone}</p>
                  <p><strong>Phone Number (Fix):</strong> {user.numberPhoneFix}</p>
                  <p><strong>City:</strong> {user.city}</p>
                  <p><strong>Address:</strong> {user.address}</p>
                </>
              ) : (
                <p>Unknown account type</p>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
