import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config';
import { logOut } from '../../../redux/usersRedux';
import { updateDiscount } from '../../../redux/cartRedux';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      method: 'DELETE',
      credentials: 'include',
    };

    fetch(`${API_URL}/auth/logout`, options).then(() => {
      dispatch(logOut());
      dispatch(updateDiscount(0));

      navigate('/');
    });
  }, [dispatch, navigate]);
  return null;
};

export default Logout;