export const URL = 'http://localhost:8080';

export const postPayment = async (_id, title, price) => {
  try {
    fetch(`${URL}/payments`, {
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
  } catch (err) {
    console.log(err);
  }
};
