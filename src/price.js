import { Space, Card, Row, Col, Button, Image } from 'antd';
import "antd/dist/antd"
import React, { Component } from 'react';
import "./price.css"

class Price extends Component {
    render() {
        const { Meta } = Card;
        return (
            <div className="price">
                <div >
                    <Row gutter={16} style={{
                        marginTop: -1,
                    }}>
                        <Col span={8}>
                            <Card
                                style={{
                                    width: '98%',
                                    marginTop: 30,
                                    marginLeft: 20,
                                    marginBottom: 20,


                                    height: 'auto',
                                    borderRadius: '0px',
                                    boxShadow: '2px 2px 5px #a4a4a4,-2px -2px 5px #000000',
                                }}

                                actions={[
                                    <Button type='primary' style={{ width: 400, height: 40, fontSize: 15 }}>
                                        Pesan Sekarang
                                    </Button>
                                ]}
                            >
                                <div className='packet' style={{ display: 'flex', justifyContent: 'center', }}>
                                    <Meta
                                        style={{ fontWeight: 'bold', fontSize: '30px' }}
                                        title={<div>
                                            <h2 className='title'>Tier 1 /Basic</h2>
                                            <div className='price'>
                                                <h2 >$29.9</h2>
                                            </div>

                                        </div>}

                                    />
                                </div>
                                <div >
                                    <Meta
                                        style={{ fontWeight: 'bold', marginTop: 10, fontSize: 15 }}

                                        description={<div>
                                            <Row>Mencatat barang masuk</Row>
                                            <Row>Mencatat barang keluar</Row>
                                            <Row>Mencatat Hasil Keuntungan</Row>
                                        </div>}
                                    />
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                style={{
                                    width: '98%',
                                    marginTop: 30,
                                    marginBottom: 20,
                                    marginLeft: 10,
                                    marginBottom: 20,


                                    height: 'auto',
                                    borderRadius: '0px',
                                    boxShadow: '2px 2px 9px #a4a4a4,-2px -2px 9px #000000',
                                }}

                                actions={[
                                    <Button type='primary' style={{ width: 400, height: 40, fontSize: 15 }}>
                                        Pesan Sekarang
                                    </Button>
                                ]}
                            >
                                <div className='packet' style={{ display: 'flex', justifyContent: 'center', }}>
                                    <Meta
                                        style={{ fontWeight: 'bold', fontSize: '30px' }}
                                        title={<div>
                                            <h2 className='title'>Tier 2 /Bussiness</h2>
                                            <div className='price'>
                                                <h2 >$59.9</h2>
                                            </div>

                                        </div>}


                                    />
                                </div>
                                <div >
                                    <Meta
                                        style={{ fontWeight: 'bold', marginTop: 10, fontSize: 15 }}

                                        description={<div>

                                            <Row>Mencatat barang masuk dan keluar</Row>
                                            <Row>Mencatat keuntungan</Row>
                                            <Row>Dapat menganalisa hasil penjualan dengan CHART</Row>
                                            <Row>Support 7x24 Jam</Row>
                                        </div>}
                                    />
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                style={{
                                    width: '98%',
                                    marginTop: 30,
                                    marginBottom: 20,


                                    height: 'auto',
                                    borderRadius: '0px',
                                    boxShadow: '2px 2px 5px #a4a4a4,-2px -2px 5px #000000',
                                }}

                                actions={[
                                    <Button type='primary' style={{ width: 400, height: 40, fontSize: 15 }}>
                                        Pesan Sekarang
                                    </Button>
                                ]}
                            >
                                <div className='packet' style={{ display: 'flex', justifyContent: 'center', }}>
                                    <Meta
                                        style={{ fontWeight: 'bold', fontSize: '30px' }}
                                        title={<div>
                                            <h2 className='title'>TIER 3 / Entrepreneur</h2>
                                            <div className='price'>
                                                <h2 >$99.9</h2>
                                            </div>

                                        </div>}


                                    />
                                </div>
                                <div >
                                    <Meta
                                        style={{ fontWeight: 'bold', marginTop: 10, fontSize: 15 }}

                                        description={<div>

                                            <Row>Mencatat barang masuk dan keluar</Row>
                                            <Row>Mencatat keuntungan</Row>
                                            <Row>Dapat menganalisa hasil penjualan dengan CHART</Row>
                                            <Row>Support 7x24 Jam</Row>
                                            <Row>Export data ke Excel</Row>
                                            <Row>AI Prediksi penghasilan</Row>
                                        </div>}
                                    />
                                </div>


                            </Card>
                        </Col>
                    </Row>
                </div>


            </div>
        );
    }
}

export default Price;
