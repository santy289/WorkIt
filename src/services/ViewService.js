const API_URL = 'https://workit-api.herokuapp.com/';
export const viewUserService = async () => {
  try {
    const response = await fetch(`${API_URL}api/service`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const viewClientRequest = async () => {
  try {
    const response = await fetch(`${API_URL}/clientrequest/`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
