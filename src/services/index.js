const API_URL = 'https://workit-api.herokuapp.com';

/* export async function loginService(loggininfo) {
  try {
    const response = await fetch(`${API_URL}/auth/local/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loggininfo),
    });
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
} */

export async function allUsers() {
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
        'Content-Type': 'application/json',
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