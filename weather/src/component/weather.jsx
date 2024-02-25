import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap'
import React, { useState } from 'react';
const API_KEY = 'd8d640a04baf48b6a1f25947242502';

export default function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [error, setError] = useState('');

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
            if (!response.ok) {
                throw new Error('Weather data not found');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchWeatherData();
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Weather App</h1>

            
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formCity">
                            <Form.Control
                                type="text"
                                placeholder="Enter city name"
                                value={city}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="success" type="submit" block>
                            Get Weather
                        </Button>
                    </Form>
                </Col>
            </Row>
            {error && (
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Alert variant="danger" className="mt-3">
                            {error}
                        </Alert>
                    </Col>
                </Row>
            )}
            {weatherData && (
                <Row className="justify-content-center mt-4">
                    <Col md={6}>
                        <div className="text-center">
                            <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
                            <p>Temperature: {weatherData.current.temp_c}°C</p>
                            <p>Condition: {weatherData.current.condition.text}</p>
                            <img src={weatherData.current.condition.icon} alt="Weather icon" />
                        </div>
                    </Col>
                </Row>
            )}
        </Container>
    )
}

