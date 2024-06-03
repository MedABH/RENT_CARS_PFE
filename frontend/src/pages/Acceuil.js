import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Acceuil() {
    const moroccanCities = [
        'Agadir', 'Al Hoceima', 'Azrou', 'Beni Mellal', 'Berkane', 'Boujdour',
        'Bouznika', 'Casablanca', 'Chefchaouen', 'Dakhla', 'El Aioun', 'El Jadida',
        'Errachidia', 'Essaouira', 'Fes', 'Guelmim', 'Ifrane', 'Kenitra', 'Khemisset',
        'Khenifra', 'Khouribga', 'Laayoune', 'Larache', 'Marrakech', 'Meknes', 'Mohammedia',
        'Nador', 'Ouarzazate', 'Oujda', 'Rabat', 'Safi', 'Salé', 'Sefrou', 'Settat',
        'Sidi Kacem', 'Sidi Slimane', 'Skhirat', 'Tangier', 'Taroudant', 'Taza', 'Tétouan', 'Tiznit',
    ];

    const [formData, setFormData] = useState({
        luxury: false,
        offRoad: false,
        standard: false,
        lieu: '',
        datePrise: '',
        timePrise: '',
        dateDrop: '',
        timeDrop: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/results', { state: { formData } });
    };

    return(
        <div style={{marginTop:'', marginBottom:'', paddingBottom:''}}>
            <section data-bs-version="5.1" className="slider5 cid-sNBLwKVrvT" id="slider5-g">

            <div className="container-fluid">
                <div className="carousel slide" id="sOfLSe9R3d" data-ride="carousel" data-bs-ride="carousel" data-interval="3000" data-bs-interval="3000">
                    <div className="carousel-inner">
                        <div className="carousel-item slider-image item active">
                            <div className="item-wrapper">
                                <div className="mbr-overlay" style={{opacity: "0.5", backgroundColor: "rgb(38, 34, 33)"}}>
                                </div>
                                <img className="d-block w-100" src="images\carLux.jpg" alt="pic car"></img>
                                <div className="carousel-caption justify-content-center">
                                    <div className="row justify-content-center w-100">
                                        <div className="col-12 col-md-7 wrap">
                                            <h1 className="mbr-section-title mbr-fonts-style mbr-white w-100 display-1">LEAVE SOONER, DRIVE SLOWER, LIVE LONGER</h1>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item slider-image item">
                            <div className="item-wrapper">
                                <div className="mbr-overlay" style={{opacity: "0.5", backgroundColor: "rgb(38, 34, 33)"}}>
                                </div>
                                <img className="d-block w-100" src="images\carOffRoad.webp" alt="pic car"></img>
                                <div className="carousel-caption justify-content-center">
                                    <div className="row justify-content-center w-100">
                                        <div className="col-12 col-md-7 wrap">
                                            <h1 className="mbr-section-title mbr-fonts-style mbr-white w-100 display-1">LEAVE SOONER, DRIVE SLOWER, LIVE LONGER</h1>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item slider-image item">
                            <div className="item-wrapper">
                                <div className="mbr-overlay" style={{opacity: "0.5", backgroundColor: "rgb(38, 34, 33)"}}>
                                </div>
                                <img className="d-block w-100" src="images\carStandard.webp" alt="pic car"></img>
                                <div className="carousel-caption justify-content-center">
                                    <div className="row justify-content-center w-100">
                                        <div className="col-12 col-md-7 wrap">
                                            <h1 className="mbr-section-title mbr-fonts-style mbr-white w-100 display-1">LEAVE SOONER, DRIVE SLOWER, LIVE LONGER</h1>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a className="carousel-control-prev" role="button" data-slide="prev" data-bs-slide="prev" href="#sOfLSe9R3d">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" role="button" data-slide="next" data-bs-slide="next" href="#sOfLSe9R3d">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            </section>
        


            <div style={{}}>
            <div className="header1">
                <div className="formElem" style={{ width: '85%', height: '450px' }}>
                    <div className="reservation-item" style={{ color: 'white' }}>
                        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '', padding: '20px' }}>
                            <Row className="w-100" style={{ backgroundColor: 'rgba(18, 19, 18, 0.596)', backgroundPosition: 'center', marginTop: '5px' }}>
                                <Col>
                                    <Form onSubmit={handleSubmit} className="text-center" style={{ margin: '15px' }}>
                                        <Row className="align-items-center justify-content-center mb-3">
                                            <Col>
                                                <Form.Check
                                                    inline
                                                    label="LUXURY"
                                                    name="luxury"
                                                    type="checkbox"
                                                    checked={formData.luxury}
                                                    onChange={handleChange}
                                                    className="text-white"
                                                />
                                            </Col>
                                            <Col>
                                                <Form.Check
                                                    inline
                                                    label="OFF ROAD"
                                                    name="offRoad"
                                                    type="checkbox"
                                                    checked={formData.offRoad}
                                                    onChange={handleChange}
                                                    className="text-white"
                                                />
                                            </Col>
                                            <Col>
                                                <Form.Check
                                                    inline
                                                    label="STANDARD"
                                                    name="standard"
                                                    type="checkbox"
                                                    checked={formData.standard}
                                                    onChange={handleChange}
                                                    className="text-white"
                                                />
                                            </Col>
                                        </Row>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="text"
                                                name="lieu"
                                                placeholder="Pick-up location"
                                                value={formData.lieu}
                                                onChange={handleChange}
                                                style={{ margin: '10px', height: '35px' }}
                                            />
                                        </Form.Group>
                                        <Row className="encharge mb-3" style={{ marginRight: '50px', marginTop: '10px', width:'250px' }}>
                                            <Col className="d-flex flex-column align-items-center">
                                                <span className="centered-icon"><i className="far fa-arrow-alt-circle-up"></i></span>
                                                <strong>PICK-UP</strong>
                                                <br />
                                            </Col>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Control
                                                        type="date"
                                                        name="datePrise"
                                                        value={formData.datePrise}
                                                        onChange={handleChange}
                                                        style={{ height: '35px' }}
                                                    />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Select
                                                        name="timePrise"
                                                        value={formData.timePrise}
                                                        onChange={handleChange}
                                                        style={{ height: '45px' }}
                                                    >
                                                        {[...Array(24)].map((_, hour) => (
                                                            [...Array(2)].map((_, half) => (
                                                                <option key={`${hour}:${half * 30}`} value={`${hour.toString().padStart(2, '0')}:${half * 30 === 0 ? '00' : '30'}`}>
                                                                    {`${hour.toString().padStart(2, '0')}:${half * 30 === 0 ? '00' : '30'}`}
                                                                </option>
                                                            ))
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="encharge mb-3" style={{width:'250px' }}>
                                            <Col className="d-flex flex-column align-items-center">
                                                <span className="centered-icon"><i className="far fa-arrow-alt-circle-down"></i></span>
                                                <strong>DROP-OFF</strong>
                                                <br />
                                            </Col>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Control
                                                        type="date"
                                                        name="dateDrop"
                                                        value={formData.dateDrop}
                                                        onChange={handleChange}
                                                        style={{ height: '35px' }}
                                                    />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Select
                                                        name="timeDrop"
                                                        value={formData.timeDrop}
                                                        onChange={handleChange}
                                                        style={{ height: '45px' }}
                                                    >
                                                        {[...Array(24)].map((_, hour) => (
                                                            [...Array(2)].map((_, half) => (
                                                                <option key={`${hour}:${half * 30}`} value={`${hour.toString().padStart(2, '0')}:${half * 30 === 0 ? '00' : '30'}`}>
                                                                    {`${hour.toString().padStart(2, '0')}:${half * 30 === 0 ? '00' : '30'}`}
                                                                </option>
                                                            ))
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="encharge mb-2">
                                            <Col className="d-flex flex-column align-items-center" style={{ marginLeft: '80px', height: '' }}>
                                                <span><i className="fas fa-car"></i></span>
                                                <p style={{ fontSize: '15px' }}><br />EXPECT ADDITIONAL FEES<br /> IF RETURNED IN<br />ANOTHER CITY</p>
                                            </Col>
                                        </Row>
                                        <div className="d-flex justify-content-center">
                                            <Button type="submit" variant="danger" style={{ margin: '10px', height: '35px', width: '300px' }}>
                                                Search
                                            </Button>
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Acceuil;