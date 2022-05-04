/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import socket from '../../utils/socket';
import Header from '../../components/Header/Header';
import { editPurchasedServices, getInfoBuyer } from '../../services';
import './chat.scss';

const userName = localStorage.getItem('userName');
function Chat() {
  const { id } = useParams();
  const [body, setBody] = useState('');
  const [chat, setChat] = useState([]);

  function onHandleChange(e) {
    const { value } = e.target;
    setBody(value);
  }
  function onSubmit(e) {
    const info = {
      message: body,
      id,
      userName,
    };
    if (info.message !== '') {
      e.preventDefault();
      editPurchasedServices(info);
      document.getElementById('chat').value = '';
      setBody('');
    }
  }
  useEffect(() => {
    socket.on('Message:create', async (data) => {
      if (!data) {
        const result = await getInfoBuyer(id);
        console.log(result);
        setChat(result.chat);
      }
      setChat(data);
    });
    return () => socket.off('Message:create');
  }, []);
  return (
    <div>
      <Header />
      <div className="chat-container">
        <div className="chat-title__container">
          <h1 className="chat-title">Chat</h1>
        </div>
        <div className="chat-containet__chatarea">
          { chat.map((item) => (
            <scroll-container key={`${item.id}${userName}`} class={item.userName === userName ? 'chat-message__send' : 'chat-message__recieved'}>
              <scroll-page id="messages" class="chat-message__user">{`${item.userName} dice: `}</scroll-page>
              <scroll-page id="messages" class="chat-message__message">{`${item.message}`}</scroll-page>
            </scroll-container>
          ))}
        </div>
        <div className="chat-inputs__container">
          <input className="chat-inputs__textarea" id="chat" type="text" name="Chat" placeholder="Mensaje" onChange={onHandleChange} />
          <input className="chat-inputs__button" type="submit" value="Enviar" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
