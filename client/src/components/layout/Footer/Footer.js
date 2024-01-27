import { Container, Row, Col }  from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG, faInstagram, faLinkedinIn, faGithub }from '@fortawesome/free-brands-svg-icons';
import '../../../styles/settings.scss';

const Footer = () => {
    return (
        <footer className='text-center'style={{background: '#0d6efd'}}>
            <Container className='p-4' >
                <section className='mb-5 d-flex justify-content-center'>
                    <div className='mx-3'>
                        <a href='/'>
                            <FontAwesomeIcon icon={faFacebookF} style={{color: '$color-white'}} size="lg"/>
                        </a>
                    </div>
                    <div className='mx-3'>
                        <a href='/'>
                            <FontAwesomeIcon icon={faTwitter}  style={{color: '$color-white'}} size="lg"/>
                        </a>
                    </div>
                    <div className='mx-3'>
                        <a href='/'>
                            <FontAwesomeIcon icon={faGooglePlusG}  style={{color: '$color-white'}} size="lg"/>
                        </a>
                    </div>
                    <div className='mx-3'>
                        <a href='/'>
                        <FontAwesomeIcon icon={faInstagram} style={{color: '$color-white'}} size="lg"/>
                        </a>
                    </div>
                    <div className='mx-3'>
                        <a href='/'>
                        <FontAwesomeIcon icon={faLinkedinIn} style={{color: '$color-white'}} size="lg"/>
                        </a>
                    </div>
                    <div className='mx-3'>
                        <a href='/'>
                        <FontAwesomeIcon icon={faGithub} style={{color: '$color-white'}} size="lg"/>
                        </a>
                    </div>
                </section>

                <section>
                    <Row d-flex className= 'd-flex justify-content-center'>
                        <Col lg= '3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase text-white'>Store</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white text-decoration-none'>
                                        Register for free
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white text-decoration-none'>
                                        Login
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase text-white'>Help</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-uppercase text-white text-decoration-none'>
                                        Faq
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white text-decoration-none'>
                                        Delivery
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase text-white'>Info</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white text-decoration-none'>
                                        About us
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white text-decoration-none'>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </section>
                
            </Container>

            <div className='text-center text-primary p-2' style={{ backgroundColor: '#ffffff' }}>
            © 2024 Copyright: WineStore.app
            </div>
        </footer>
    )
  }
  
  export default Footer;