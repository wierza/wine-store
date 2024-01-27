import styles from './NavBar.module.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineGlass,  faUser, faShoppingBasket, }from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className={styles.brand} href="/"><FontAwesomeIcon icon={faWineGlass} /><span>Wine Store</span> </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home"><FontAwesomeIcon className={styles.user}icon={faUser} /><span>Login</span></Nav.Link>
            <Nav.Link href="#features">Register</Nav.Link>
            <Nav.Link href="#pricing"><FontAwesomeIcon icon={faShoppingBasket} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
  
  export default NavBar;