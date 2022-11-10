import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import Header from './Header';
import About from './about';
import Contact from './contact';
import { Col, Row, Button, BackTop, Modal, Form, Input, message } from 'antd';
import { useRef, useState, Fragment } from "react";
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import Price from './price';

function App() {
  const about = useRef(null);
  const price = useRef(null);
  const contact = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <BackTop />
      <Modal title="Login"
        //   title="Login"
        //   centered={true}
        visible={isModalOpen}
        // isOpen={this.openLogin}
        width={400}
        footer={false}
        // onOk={false}
        onCancel={handleCancel}
        //closable={true}
        style={{ verticalAlign: 'right' }}
      >
        <Fragment>

          <Form
            autoComplete="true"
          >
            <Form.Item
              name="email"

              allowClear

              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
              <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email"
                type="email"



              />
            </Form.Item>
            <Form.Item
              name="password"

              allowClear



              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"

              />
            </Form.Item>
            <Form.Item>
              <div>

                <Button type="primary" style={{ marginRight: 10 }}>
                  Log in
                </Button>

              </div>
            </Form.Item>
          </Form>

        </Fragment>
      </Modal>
      <div className="header">

        <div className="header__logo">
          <h2 className="header__text">HOME</h2>
        </div>

        <div className="header__kosong"></div>

        <div className="header__nav">
          <a onClick={() => scrollToSection(about)} className="link" type='primary'>ABOUT</a>
          <a onClick={() => scrollToSection(price)} className="link">PRICE</a>
          <a onClick={() => scrollToSection(contact)} className="link">CONTACT</a>
          <Button onClick={showModal} className="nav__login" >Login</Button>

        </div>

      </div>

      <div ref={about} className="about">
        <About />
      </div>
      <div ref={price} className="price">
        <Price />
      </div>
      <div ref={contact} className="contact">
        <Contact />
      </div>
    </div>

  );
}

export default App;
