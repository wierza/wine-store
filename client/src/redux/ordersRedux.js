import { API_URL } from '../config';

// Actions
const createActionName = (name) => `app/orders/${name}`;

export const LOAD_ORDERS = createActionName('LOAD_ORDERS');
export const DELETE_ORDER = createActionName('DELETE_ORDER');
export const UPDATE_ORDER = createActionName('UPDATE_ORDER');
export const LOAD_SINGLE_ORDER = createActionName('LOAD_SINGLE_ORDER');
export const ERROR_ORDER = createActionName('ERROR');

export const loadOrders = (payload) => ({ type: LOAD_ORDERS, payload });
export const deleteOrder = (orderId) => ({
  type: DELETE_ORDER,
  payload: orderId,
});
export const updateOrder = (orderId, updatedData) => ({
  type: UPDATE_ORDER,
  payload: { orderId, updatedData },
});
export const loadSingleOrder = (payload) => ({
  type: LOAD_SINGLE_ORDER,
  payload,
});
export const setErrorOrder = (payload) => ({ type: ERROR_ORDER, payload });

// Thunks
export const loadOrdersRequest = () => async (dispatch) => {
  try {
    const res = await fetch(`${API_URL}/orders`);
    const data = await res.json();
    dispatch(loadOrders(data));
  } catch (e) {
    dispatch(setErrorOrder(e.message));
  }
};

export const deleteOrderRequest = (orderId) => async (dispatch) => {
  try {
    await fetch(`${API_URL}/orders/${orderId}`, { method: 'DELETE' });
    dispatch(deleteOrder(orderId));
  } catch (e) {
    dispatch(setErrorOrder(e.message));
  }
};

export const updateOrderRequest =
  (orderId, updatedData) => async (dispatch) => {
    try {
      await fetch(`${API_URL}/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      dispatch(updateOrder(orderId, updatedData));
    } catch (e) {
      dispatch(setErrorOrder(e.message));
    }
  };

export const loadOrderByIdRequest = (orderId) => async (dispatch) => {
  try {
    const res = await fetch(`${API_URL}/orders/${orderId}`);
    const data = await res.json();
    dispatch(loadSingleOrder(data));
  } catch (e) {
    dispatch(setErrorOrder(e.message));
  }
};

// Selectors
export const getOrders = ({ orders }) => {
  return orders.data;
};

export const getOrdersError = ({ orders }) => {
  return orders.error;
};

export const getOrderById = (state, orderId) => {
  if (!state.orders || !state.orders.data) return null;
  return state.orders.data.find((order) => order.id === orderId);
};

// Reducer
const initialState = {
  data: [],
  error: null,
};

const ordersReducer = (statePart = initialState, action) => {
  switch (action.type) {
    case LOAD_ORDERS:
      return { ...statePart, data: action.payload };
    case DELETE_ORDER:
      return {
        ...statePart,
        data: statePart.data.filter((order) => order.id !== action.payload),
      };
    case UPDATE_ORDER: {
      const updatedOrders = statePart.data.map((order) => {
        if (order.id === action.payload.orderId) {
          return {
            ...order,
            ...action.payload.updatedData,
          };
        }
        return order;
      });
      return {
        ...statePart,
        data: updatedOrders,
      };
    }
    case LOAD_SINGLE_ORDER: {
      const updatedData = statePart.data ? [...statePart.data] : [];
      const orderIndex = updatedData.findIndex(
        (order) => order.id === action.payload.id,
      );
      if (orderIndex !== -1) {
        updatedData[orderIndex] = action.payload;
      } else {
        updatedData.push(action.payload);
      }
      return { ...statePart, data: updatedData };
    }
    case ERROR_ORDER:
      return { ...statePart, error: action.payload };
    default:
      return statePart;
  }
};

export default ordersReducer;
