import RegisterForm from '../../features/RegisterForm/RegisterForm';
import { Row, Col } from 'react-bootstrap';

const Register = () => {
  return (
    <Row>
      <Col className="mx-auto">
        <RegisterForm />
      </Col>
    </Row>
  );
};

export default Register;