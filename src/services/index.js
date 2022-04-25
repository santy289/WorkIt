const API_URL = 'http://localhost:8080';

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

export async function getServiceByName(name) {
  try {
    const response = await fetch(`${API_URL}/api/service/${name}`);
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
    return response.json();
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
      },
      body: JSON.stringify(service),
    });
    return response.json();
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
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUserById(id) {
  try {
    const response = await fetch(`${API_URL}/api/user/${id}`);
    return response.json();
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
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}
