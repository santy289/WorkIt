export const URL = 'https://workit-api.herokuapp.com';

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
