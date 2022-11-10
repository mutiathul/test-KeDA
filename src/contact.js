import { Space, Card, Row, Col, Button, Image, BackTop, Input } from 'antd';
import "../node_modules/antd/dist/antd"
import React, { Component } from 'react';
import "./contact.css"
import Logo from './ilustrasi.svg';


// import garis from "./garis.png"

class Contact extends Component {


    render() {
        const { Meta } = Card;
        const { TextArea } = Input;
        return (
            <div className="contact">

                <div>

                    <Card
                        style={{
                            width: '98%',
                            marginTop: 30,
                            marginLeft: 20,
                            marginBottom: 20,


                            height: 'auto',
                            borderRadius: '5px',
                            boxShadow: '2px 2px 3px #a4a4a4,-2px -2px 3px #000000',
                        }}


                    >
                        <div  style={{ display: 'flex', justifyContent: 'center', }}>
                            <Meta
                                style={{ fontWeight: 'bold', fontSize: '30px' }}
                                title={<div>
                                    <h2>Contact US</h2></div>}

                            />
                        </div>


                        <div>
                            <Row>
                                <Col span={12}>
                                    <div className='form'>
                                        <label>Nama</label>
                                        <Input />
                                    </div>
                                    <div className='form'>
                                        <label>Email</label>
                                        <Input />
                                    </div>
                                    <div className='form'>
                                        <label>No HP</label>
                                        <Input />
                                    </div>
                                    <div className='form'>

                                        <TextArea rows={4} />
                                    </div>
                                    <div>
                                    <Button type='primary' style={{ width: 400, height: 40, fontSize: 15 }}>
                                        Submit
                                    </Button>
                                    </div>
                                </Col>
                                <Col span={12}>
                                <img src={Logo} alt="" style={{height:'80%',width:'80%'}} />
                                </Col>
                            </Row>

                        </div>
                    </Card>
                </div>

            </div>
        );
    }
}

export default Contact;
