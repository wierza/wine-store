import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => (
  <Container>
    <NavBar />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;