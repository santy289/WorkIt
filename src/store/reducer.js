import {
  LOGIN_USER,
  SERVICE_BY_ID,
  SERVICE_BY_NAME,
  SERVICE_BY_USER,
  NEW_SERVICE,
  PATCH_SERVICE,
  CREATE_ACTIVE_SERVICE,
} from './types';

const initialState = {
  activeproducts: {
    status: '',
    paymentId: '',
    paymentType: '',
    sellerId: '',
    buyerId: '',
    serviceId: '',
  },

};

// eslint-disable-next-line default-param-last
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
      };
    case SERVICE_BY_ID:
      return {
        ...state,
        state,
      };
    case SERVICE_BY_NAME:
      return {
        ...state,
        state,
      };
    case SERVICE_BY_USER:
      return {
        ...state,
        state,
      };
    case NEW_SERVICE:
      return {
        ...state,
        state,
      };
    case PATCH_SERVICE:
      return {
        ...state,
        state,
      };
    case CREATE_ACTIVE_SERVICE:
      return {
        ...state,
        state,
      };
    default:
      return state;
  }
}
export default reducer;
