//import styles from './Login.module.scss'
import { Alert, Spinner, Button, Form, Container } from 'react-bootstrap';
import { useState } from 'react';
import { API_URL } from '../../../config';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../../redux/usersRedux';
import { useNavigate } from "react-router-dom";
import { getUser } from '../../../redux/usersRedux';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null); //null, 'loading', 'success', 'serverError', 'clientError'

  const handleSubmit = e => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    };

    setStatus('loading');
    fetch(`${API_URL}/auth/login`, options)
      
      .then(res => {
        if(res.status === 201) {
          setStatus('success');
          return res.json();
        } else if (res.status === 400) {
          setStatus('clientError');
        } else {
          setStatus('serverError');
        }
      })
      .then(data => {
        dispatch(logIn({ data }));
        setTimeout(() => { navigate('/') }, 500);
      })
      .catch(err => {
        setStatus('serverError');
      })
  };
  return (
    <Container className='col-12 col-sm-3 mx-auto min-vh-100'>
      <h1 className='m-3 d-flex justify-content-center text-primary'>Login</h1>
      <Form onSubmit={handleSubmit}> 

        {status === 'success' && (
          <Alert variant='success'>
            <Alert.Heading>Succes!</Alert.Heading>
            <p>You have been successfully logined in!</p>
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
            <Alert.Heading>Incorrect data</Alert.Heading>
            <p>Login or password are incorrect...</p>
          </Alert>
        )}

        {status === 'loading' && (
          <Spinner animation='border' role='status' className='block mx-auto'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        )}

        <Form.Group className='mb-3' controlId='formLogin'>
          <Form.Label className='text-primary'>Login</Form.Label>
          <Form.Control 
            type='text' 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder='Enter email' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formPassword'>
          <Form.Label className='text-primary'>Password</Form.Label>
          <Form.Control 
            type='password' 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder='Enter password' />
        </Form.Group>


        <Button variant='primary' type='submit' >
          Log in
        </Button>

      </Form>
    </Container>
  );
};

export default LoginForm;