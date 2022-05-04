import {
  LOGIN_USER,
  SERVICE_BY_ID,
  SERVICE_BY_QUERY,
  SERVICE_BY_USER,
  NEW_SERVICE,
  PATCH_SERVICE,
  CREATE_ACTIVE_SERVICE,
  GET_INFO_BUYER,
  GET_ALL_SERVICES,
  SERVICE_BY_TITLE,
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
  ofertservice: [{
    title: '',
    tags: [],
    username: '',
    userId: '',
    cost: '',
    description: '',
    image: '',
    _id: '',
  }],
  userprofile: {
    username: '',
    name: '',
    last: '',
    email: '',
    country: '',
    city: '',
    address: '',
    imageprofile: '',
  },
  infoBuyer: [{
    purchasedId: '',
    buyerId: '',
    name: '',
    last: '',
    username: '',
    title: '',
    imageprofile: '',
  }],
  services: [{
    title: '',
    tags: [],
    username: '',
    userId: '',
    cost: '',
    description: '',
    image: '',
    _id: '',
  }],
  servicebytitle: [{
    title: '',
    tags: [],
    username: '',
    userId: '',
    cost: '',
    description: '',
    image: '',
    _id: '',
  }],
};

// eslint-disable-next-line default-param-last
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userprofile: action.payload,
      };
    case SERVICE_BY_ID:
      return {
        ...state,
        state,
      };
    case SERVICE_BY_QUERY:
      return {
        ...state,
        ofertservice: action.payload,
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
        activeproducts: action.payload,
      };
    case GET_INFO_BUYER:
      return {
        ...state,
        infoBuyer: action.payload,
      };

    case GET_ALL_SERVICES:
      return {
        ...state,
        services: action.payload,
      };

    case SERVICE_BY_TITLE:
      return {
        ...state,
        servicebytitle: action.payload,
      };

    default:
      return state;
  }
}
export default reducer;
