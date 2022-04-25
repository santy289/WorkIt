export const URL = 'http://localhost:8080';

export const postPayment = async (_id, title, price) => {
  try {
    const response = await fetch(`${URL}/payments`, {
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
