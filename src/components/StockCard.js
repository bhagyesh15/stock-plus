import React from 'react';
import {Col, Card} from 'react-bootstrap';


function StockCard(props) {
    return (
        <Col>
            <Card className="md-6">
                <Card.Body>
                    <Card.Title className="font-weight-light text-left"><p className="h4 font-weight-light">SYMBOL</p></Card.Title>
                    <Card.Subtitle className="text-left font-weight-light"><p className="h4 font-weight-light">1234.56</p>10.00</Card.Subtitle>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default StockCard;