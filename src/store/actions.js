import {
  LOGIN_USER,
  SERVICE_BY_ID,
  SERVICE_BY_NAME,
  SERVICE_BY_USER,
  NEW_SERVICE,
  PATCH_SERVICE,
  REMOVE_SERVICE,
  GET_ALL,
  CREATE_ACTIVE_SERVICE,
} from './types';

import {
  allUsers,
  getServiceById,
  getServiceByQuery,
  getServiceByUser,
  createService,
  updateService,
  deleteService,
  createPurchasedServices,
} from '../services';

export const loginUser = (user) => ({ type: LOGIN_USER, payload: user });
export const getall = (all) => ({ type: GET_ALL, payload: all });
export const serviceById = (id) => ({ type: SERVICE_BY_ID, payload: id });
export const queryFinder = (name) => ({ type: SERVICE_BY_NAME, payload: name });
export const serviceByUser = (user) => ({ type: SERVICE_BY_USER, payload: user });
export const newService = (service) => ({ type: NEW_SERVICE, payload: service });
export const patchService = (service) => ({ type: PATCH_SERVICE, payload: service });
export const removeService = (id) => ({ type: REMOVE_SERVICE, payload: id });
export const createActiveService = (data) => ({ type: CREATE_ACTIVE_SERVICE, payload: data });

export const allusers = () => async (dispatch) => {
  try {
    const getAllUsers = await allUsers();
    dispatch(getall(getAllUsers));
  } catch (error) {
    throw new Error(error);
  }
};

export const findById = (id) => async (dispatch) => {
  try {
    const service = await getServiceById(id);
    dispatch(serviceById(service));
  } catch (error) {
    throw new Error(error);
  }
};

export const findByQuery = (query) => async (dispatch) => {
  try {
    const service = await getServiceByQuery(query);
    dispatch(queryFinder(service));
  } catch (error) {
    throw new Error(error);
  }
};

export const findByUser = (user) => async (dispatch) => {
  try {
    const service = await getServiceByUser(user);
    dispatch(serviceByUser(service));
  } catch (error) {
    throw new Error(error);
  }
};

export const buildService = (info) => async (dispatch) => {
  try {
    const service = await createService(info);
    dispatch(newService(service));
  } catch (error) {
    throw new Error(error);
  }
};

export const modifyService = (service) => async (dispatch) => {
  try {
    const updatedService = await updateService(service);
    dispatch(patchService(updatedService));
  } catch (error) {
    throw new Error(error);
  }
};

export const remove = (id) => async (dispatch) => {
  try {
    await deleteService(id);
    dispatch(removeService(id));
  } catch (error) {
    throw new Error(error);
  }
};

export const createActiveServices = (data) => async (dispatch) => {
  try {
    const service = await createPurchasedServices(data);
    dispatch(createActiveService(service));
  } catch (error) {
    throw new Error(error);
  }
};
