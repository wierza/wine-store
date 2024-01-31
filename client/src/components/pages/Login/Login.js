import LoginForm from '../../features/LoginForm/LoginForm';
import { Row, Col } from 'react-bootstrap';

const Login = () => {
  return (
    <Row>
      <Col className="mx-auto">
        <LoginForm />
      </Col>
    </Row>
  );
};

export default Login;