import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; // Assurez-vous que jwt-decode est installé

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate(); // Initialisez le hook useNavigate

    useEffect(() => {
        // Check if a token is stored in localStorage
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
            const userData = jwtDecode(token); // Decode the token to get user data
            setUser(userData.user); // Assuming user data is stored under 'user'
        }
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/users/login", {
                email: formData.email,
                password: formData.password
            });
            const token = response.data.token; // Assuming token is returned from server
            // Store the token securely in local storage
            localStorage.setItem("token", token);
            setIsLoggedIn(true); // Update login state
            const userData = jwtDecode(token); // Decode the token to get user data
            setUser(userData.user); // Assuming user data is stored under 'user'
            handleClose();
            navigate('/');
        } catch (error) {
            console.error('Login Error:', error);
            // Handle login error (e.g., show error message)
        }
    };

    const handleLogout = () => {
        // Clear the token from local storage
        localStorage.removeItem("token");
        setIsLoggedIn(false); // Update login state
        setUser(null); // Clear user data
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div style={{ position: 'relative', zIndex: 1000 }} className="container">
            <noscript>
                <iframe title="idk" src="http://www.googletagmanager.com/ns.html?id=GTM-PFK425" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
            </noscript>

            <section data-bs-version="5.1" className="menu menu2 cid-sMzMR0CkOY" id="menu2-0">
                <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg" style={{ backgroundColor: 'black' }}>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="left-menu">
                            <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                                <li className="nav-item">
                                    <Link className="nav-link link text-white text-primary display-4" to="/Map" aria-expanded="false">MAP</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link link text-white text-primary display-4" to="/Lux" aria-expanded="false">LUXURY</Link></li>
                            </ul>
                        </div>
                        <div className="brand-container">
                            <div className="navbar-brand">
                                <span className="navbar-caption-wrap"><Link className="navbar-caption text-white text-primary display-2" to="/">E-LOCATION</Link></span>
                            </div>
                        </div>
                        <div className="right-menu">
                            <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                                <li className="nav-item"><Link className="nav-link link text-white show text-primary display-4" to="/Populaire" aria-expanded="false" data-bs-auto-close="outside">POPULAIRE<div className="line-animation"></div></Link></li>
                                <li className="nav-item"><Link className="nav-link link text-white show text-primary display-4" to="/About" aria-expanded="false" data-bs-auto-close="outside">ABOUT<div className="line-animation"></div></Link></li>
                            </ul>
                        </div>

                        {isLoggedIn ? (
                            <>
                                {user && user.typeAccount === 'entreprise' && (
                                    <Button variant="success" style={{ width: '150px' }} className="btn-custom"><Link to='/AddCar' className="text-white">Add Car</Link></Button>
                                )}
                                <Button variant="danger" style={{ width: '150px' }} className="btn-custom"><Link to='/Account' className="text-white">Account</Link></Button>
                                <Button variant="danger" style={{ width: '150px' }} onClick={handleLogout} className="btn-custom">Logout</Button>
                            </>
                        ) : (
                            <>
                                <Button variant="danger" style={{ width: '150px' }} className="btn-custom"><Link to='/SignUp' className="text-white">Sign up</Link></Button>

                                <Button variant="danger" style={{ width: '150px' }} onClick={handleShow} className="btn-custom">Login</Button>
                                <Modal show={show} onHide={handleClose} centered>
                                    <Container>
                                        <Modal.Header closeButton>
                                            <img style={{ width: '70px', marginLeft: '180px' }} src="images\logo eLocation.png" alt="logo" />
                                        </Modal.Header>
                                        <Modal.Body style={{ marginTop: '10px' }}>
                                            <p style={{ fontSize: '13px', textAlign: 'center' }}>Please enter your email address and your password.</p>
                                            <Form style={{ marginTop: '30px' }}>
                                                <Form.Group className="mb-4 mt-4" controlId="exampleForm.ControlInput1">
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email*"
                                                        autoFocus
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-4 mt-4" controlId="exampleForm.ControlInput1">
                                                    <Form.Control
                                                        type="password"
                                                        name="password"
                                                        placeholder="Password*"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                    </Container>
                                    <Modal.Footer style={{ marginTop: '20px' }} className="justify-content-center">
                                        <Button style={{ width: '150px' }} variant="primary" onClick={handleLogin}>
                                            Login
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>
                        )}
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{}}>
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </nav>
            </section>
            <br />
            <br />
            <br />
        </div>
    );
}

export default Header;
