import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';



const MainLayout =({children}) => {
    return (
        <div>
            <NavBar />
            <Container className='min-vh-100'>
                {children}
            </Container>
            <Footer />
        </div>
    );
};


export default MainLayout;