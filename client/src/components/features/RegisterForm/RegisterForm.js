
import { Alert, Button, Form, Spinner, Container } from 'react-bootstrap';
import { useState } from 'react';
import { API_URL } from '../../../config';
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState(null); // null, "success", "error", "emailError"
    const [registerData, setRegisterData] = useState({
      email: '',
      password: '',
      passwordRepeat: '',
    });
  
    const handleSubmit = e => {
      e.preventDefault();
      const options = {
        method: 'POST',
        body: JSON.stringify(registerData),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      setStatus('loading');
      fetch(`${API_URL}/auth/register`, options)
        .then(res => {
          if(res.status === 201) {
            setStatus('success');
            setRegisterData({ email: '', password: '', passwordRepeat: '' });
            setTimeout(() => {
              navigate('/');
            }, 5000);
          } else if (res.status === 409) {
            setStatus('emailError');
          } else {
            setStatus('serverError');
          }
        })
        .catch(err => {
          setStatus('error');
        })
    };

  return (
    <Container className= 'min-vh-100 col-12 col-sm-3 mx-auto'>
      <h1 className='m-3 d-flex justify-content-center text-primary'>Register</h1>
      <Form onSubmit={handleSubmit}> 

        {status === 'success' && (
          <Alert variant='success'>
            <Alert.Heading>Succes!</Alert.Heading>
            <p>You have been successfully registered! You can now log in.</p>
          </Alert>
        )}

        {status === 'serverError' && (
          <Alert variant='danger'>
            <Alert.Heading>Something went wrong...</Alert.Heading>
            <p>Unexpected error... Try again!</p>
          </Alert>
        )}

        {status === 'clientError' && (
          <Alert variant='danger'>
            <Alert.Heading>No enough data</Alert.Heading>
            <p>You have to fill all the fields.</p>
          </Alert>
        )}

        {status === 'loginEror' && (
          <Alert variant='warning'>
            <Alert.Heading>Login alredy in use</Alert.Heading>
            <p>You have to use other login.</p>
          </Alert>
        )}

        {status === 'loading' && (
          <Spinner animation='border' role='status' className='block mx-auto'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        )}

        <Form.Group className='mb-3' controlId='email'>
          <Form.Label className='text-primary'>Login</Form.Label>
          <Form.Control 
            type='email' 
            value={registerData.email} 
            onChange={e => setRegisterData({...registerData, email: e.target.value})} 
            placeholder='Enter email' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='password'>
          <Form.Label className='text-primary'>Password</Form.Label>
          <Form.Control 
            type='password' 
            value={registerData.password} 
            onChange={e => setRegisterData({...registerData, password: e.target.value})} 
            placeholder='Enter password' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='confirmPassword'>
          <Form.Label className='text-primary'>Confirm password</Form.Label>
          <Form.Control 
            type='password' 
            value={registerData.passwordRepeat}
            onChange={e => setRegisterData({...registerData, passwordRepeat: e.target.value})} 
            placeholder='Confirm password' />
        </Form.Group>

        <Button variant='primary' type='submit' >
          Submit
        </Button>

      </Form>
    </ Container>
  );
};

export default RegisterForm;