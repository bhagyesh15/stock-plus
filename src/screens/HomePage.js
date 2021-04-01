import React from 'react';
import NavigationBar from '../components/Navigationbar';
import {Container, Row,Col} from 'react-bootstrap';

import SP from '../components/StockPlus';
import StockCard from '../components/StockCard';

function HomePage(props) {
    return (
        <div>
            <NavigationBar/>
            <div className="container" style={{
                // backgroundColor : `gray`
            }}>
                <h2>Build up your financial game with</h2>
                <h1 className="h1"><SP size="h1" /></h1>
                <p>
                    Learn about all the stcoks listed on National Stock Exchange of India (NSE) and also view the impact of the pandemic.
                    <br/>
                    The website allows you to go through the data of 1600+ stocks and 50 Indexes of NSE.
                </p>

                {/* Grid */}
                <Container>
                    <Row>
                        <Col className="border p-3" md={6} xs={12}>
                            <h3>Top Gainers</h3>
                            <Row>
                                   <StockCard/>
                                   <StockCard/>
                            </Row>
                            <br/>
                            <Row>
                                   <StockCard/>
                                   <StockCard/>
                            </Row>

                        </Col>
                        <Col className="border p-3"  md={6} xs={12}>
                            <h3>Top Losers</h3>
                            <Row>
                                   <StockCard/>
                                   <StockCard/>
                            </Row>
                            <br/>
                            <Row>
                                   <StockCard/>
                                   <StockCard/>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="border p-3" md={6} xs={12}>
                            <h3>Active By Value</h3>
                            <Row>
                                   <StockCard/>
                                   <StockCard/>
                            </Row>
                            <br/>
                            <Row>
                                   <StockCard/>
                                   <StockCard/>
                            </Row>
                        </Col>
                        <Col className="border p-3" md={6} xs={12}>
                            <h3>Active By Volume</h3>
                            <Row>
                                   <StockCard/>
                                   <StockCard/>
                            </Row>
                            <br/>
                            <Row>
                                   <StockCard/>
                                   <StockCard/>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <br/>
            </div>
        </div>
    );
}

export default HomePage;