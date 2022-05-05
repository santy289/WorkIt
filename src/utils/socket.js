import io from 'socket.io-client';

const socket = io('https://workit-api.herokuapp.com');

export default socket;
