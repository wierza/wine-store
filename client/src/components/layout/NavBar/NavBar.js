import styles from './NavBar.module.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineGlass,  faUser, faShoppingBasket, }from '@fortawesome/free-solid-svg-icons';
import { getUser } from '../../../redux/usersRedux';
import { useSelector } from 'react-redux';

const NavBar = () => {

  const user = useSelector(getUser);

    return (
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className={styles.brand} href="/"><FontAwesomeIcon icon={faWineGlass} /><span>Wine Store</span> </Navbar.Brand>
          <Nav className="ms-auto">
            {!user && (<Nav.Link href='/login'><FontAwesomeIcon className={styles.user}icon={faUser} /><span>Login</span></Nav.Link>)}
            {!user && (<Nav.Link href='/register'>Register</Nav.Link>)}
            {user && (<div className={'mt-2 text-white'}><FontAwesomeIcon className={styles.user}icon={faUser} />{user.email}</div>)}
            {user && (<Nav.Link href='/orders'>Orders</Nav.Link>)}
            {user && (<Nav.Link href='/logout'>Log out</Nav.Link>)}
            <Nav.Link href={user ? '/cart' : '/login'}><FontAwesomeIcon icon={faShoppingBasket} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
  
  export default NavBar;