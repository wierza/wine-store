// import fetch from 'node-fetch'; // Zakładam, że używasz Node.js

import { API_URL } from '../config';

// Selectors
export const getUser = ({ user }) => (user ? user.data : null);
export const getUserError = ({ user }) => user.error;

// Action Types
const reducerName = 'users';
const createActionName = (name) => `app/${reducerName}/${name}`;

const LOG_IN = createActionName('LOG_IN');
const LOG_OUT = createActionName('LOG_OUT');
const SET_ERROR = createActionName('SET_ERROR');
const GET_FULL_USER = createActionName('GET_FULL_USER');

// Action Creators
export const logIn = (user) => ({ type: LOG_IN, payload: user });
export const logOut = () => ({ type: LOG_OUT });
export const setError = (payload) => ({ type: SET_ERROR, payload });
export const getFullUser = (user) => ({ type: GET_FULL_USER, payload: user });

// Thunks
export const loadLoggedUser = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(`${API_URL}/auth/user`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let data = await response.json();
      dispatch(logIn({ login: data.email }));
    } catch (e) {
      dispatch(setError(e.message));
    }
  };
};

export const loadFullUser = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(`${API_URL}/auth/user`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let data = await response.json();
      dispatch(getFullUser(data));
    } catch (e) {
      dispatch(setError(e.message));
    }
  };
};

const initialState = {
  data: null,
  error: null,
};

// Reducer
const usersReducer = (statePart = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...statePart, data: action.payload, error: null };
    case LOG_OUT:
      return { ...statePart, data: null, error: null };
    case GET_FULL_USER:
      return { ...statePart, data: action.payload, error: null };
    case SET_ERROR:
      return { ...statePart, error: action.payload };
    default:
      return statePart;
  }
};

export default usersReducer;
