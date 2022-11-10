import React, { Component } from 'react';
import './Header.css';
import { Col, Row, Button } from 'antd';

class Header extends Component {
    constructor(props) {
        super(props);
        //this.elScroll = utilizeScroll();
      }
    //   componentDidMount() {
    //     this.elScroll.executeScroll();
    //   }
    
    render() {
        return (
            
                <div className="header">

                    <div className="header__logo">
                        {/* <Icon className="header__icon" icon={shareable} size='10%' /> */}
                        <h2 className="header__text">HOME</h2>
                    </div>

                    <div className="header__kosong"></div>

                    <div className="header__nav">
                        <a className="nav__about" type='primary'>ABOUT</a>
                        <a className="nav__price">PRICE</a>
                        <a  href='/contact.js' className="nav__contact">CONTACT</a>
                        <Button className="nav__login" >Login</Button>
                     
                    </div>

                </div>
        );
    }
}

export default Header;
