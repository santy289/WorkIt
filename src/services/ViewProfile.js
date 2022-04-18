const API_URL = 'https://workit-api.herokuapp.com';
const viewUser = async (id) => {
  try {
    const response = await fetch(`${API_URL}/users/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default viewUser;
