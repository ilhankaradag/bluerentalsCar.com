import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const CustomerServiceCard = ({ title, description, icon }) => {
  return (
    <Card className="customer-service-card">
      <Card.Body>
        <Row className="g-2">
          <Col md={2}>{icon}</Col>
          <Col md={10}>
            <h3>{title}</h3>
            <p>{description}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default CustomerServiceCard
