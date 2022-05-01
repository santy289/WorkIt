import axios from 'axios';

const API_URL = 'https://workit-api.herokuapp.com';

export const allUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  const data = await response.json();
  return data;
};

export async function loginService(loggininfo) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(loggininfo),
  };
  try {
    const response = await fetch(`${API_URL}/auth/local/login`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function allService() {
  try {
    const response = await fetch(`${API_URL}/api/service`);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export async function getServiceById(id) {
  try {
    const response = await fetch(`${API_URL}/api/service/${id}`);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export async function getServiceByQuery(query) {
  try {
    const response = await fetch(`${API_URL}/api/service/search/${query}`);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export async function getServiceByUser(user) {
  try {
    const response = await fetch(`${API_URL}/api/service/${user}`);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export async function createService(service) {
  try {
    const response = await fetch(`${API_URL}/api/service`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(service),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateService(service) {
  try {
    const response = await fetch(`${API_URL}/api/service/${service.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(service),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteService(id) {
  try {
    const response = await fetch(`${API_URL}/api/service/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUserById(id) {
  try {
    const response = await fetch(`${API_URL}/api/user/${id}`);
    const user = await response.json();
    return user;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createUser(data) {
  try {
    const response = await fetch(`${API_URL}/api/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const user = await response.json();
    return user;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateUser(id, formData) {
  try {
    const response = axios.patchForm(`${API_URL}/api/user/${id}`, formData);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export const postPayment = async (_id, title, price) => {
  try {
    const response = await fetch(`${API_URL}/payments`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        _id,
        title,
        price,
      }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const createPurchasedServices = async (info) => {
  try {
    const response = await fetch(`${API_URL}/api/purchased`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(info),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const getInfoBuyer = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/purchased/search/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
