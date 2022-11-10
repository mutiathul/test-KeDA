import { Space, Card, Row, Col, Button, Image } from 'antd';
import "antd/dist/antd"
import React, { Component } from 'react';
import "./about.css"

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="about__slide" >
                    <Row className="slide__row">
                        <Col xs={{
                            span: 5,
                            offset: 1,
                        }}
                            xxl={{
                                span: 8,
                                offset: 1,
                            }}>

                        </Col>
                        <Col className="slide__col1" xs={{
                            span: 12,
                            offset: 1,
                        }}
                            xxl={{
                                span: 16,
                                offset: 1,
                            }}>
                            <h3 className="about__h2title">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.

                            </h3>
                        </Col>
                    </Row>

                </div>
             
            </div>
        );
    }
}

export default About;
