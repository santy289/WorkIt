import axios from 'axios';

const API_URL = 'https://workit-api.herokuapp.com';

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};

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

export async function createService(formData) {
  try {
    const response = axios.postForm(`${API_URL}/api/service`, formData, config);
    return response;
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

export async function createUser(formData) {
  try {
    const response = axios.postForm(`${API_URL}/api/user`, formData);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateService(id, formData) {
  try {
    const response = axios.patchForm(`${API_URL}/api/service/${id}`, formData, config);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateUser(id, formData) {
  try {
    const response = axios.patchForm(`${API_URL}/api/user/${id}`, formData, config);
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

export const editPurchasedServices = async (info) => {
  try {
    const response = await fetch(`${API_URL}/chat/${info.id}`, {
      method: 'PATCH',
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

export const getChat = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/purchased/${id}`);
    const data = await response.json();
    const { chat } = data;
    return chat;
  } catch (err) {
    return err;
  }
};

export const searchByServiceTitle = async (query) => {
  try {
    const response = await fetch(`${API_URL}/api/service/search=title/${query}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const searchBoughtServices = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/purchased/searchbought/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const searchServiceByUserId = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/service/search=seller/${id}`);
    console.log(response, 'response');
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const updatePurchasedById = async (id, body) => {
  try {
    const response = await fetch(`${API_URL}/api/purchased/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (err) {
    return err;
  }
};
