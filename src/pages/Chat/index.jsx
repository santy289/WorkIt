/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import socket from '../../utils/socket';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { editPurchasedServices, getChat } from '../../services';
import './chat.scss';

const userName = localStorage.getItem('userName');
function Chat() {
  const { id } = useParams();
  const [body, setBody] = useState('');
  const [chat, setChat] = useState([]);
  console.log('Chat', chat);
  const messagesEndRef = useRef(null);

  async function firstChatInfo() {
    const response = await getChat(id);
    setChat(response);
  }
  function onHandleChange(e) {
    const { value } = e.target;
    setBody(value);
  }
  function onSubmit(e) {
    const info = {
      message: body,
      date: new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }),
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
  function onSubmitkey(e) {
    // eslint-disable-next-line eqeqeq
    if (e.charCode == 13) {
      const info = {
        message: body,
        date: new Date().toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        }),
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
  }
  useEffect(
    () => {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    },
    [chat],
  );
  useEffect(() => {
    firstChatInfo();
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    socket.on('Message:create', async (data) => {
      setChat(data);
    });
    return () => socket.off('Message:create');
  }, []);
  return (
    <div>
      <Header />
      <div className="chat-title__container">
        <h1 className="chat-title">Chat</h1>
      </div>
      <div className="chat-container">
        <div id="chat-feed'" className="chat-containet__chatarea">
          {chat.map((item) => (
            <div id="scroll-container" key={`${item.message}${item.date}${userName}`} className={item.userName === userName ? 'chat-message__send' : 'chat-message__recieved'}>
              <p id="user" className="chat-message__user">{`${item.userName} dice: `}</p>
              <p id="messages" className="chat-message__message">{`${item.message}`}</p>
              <p id="date" className="chat-message__date">{`${item.date}`}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-inputs__container">
          <input className="chat-inputs__textarea" id="chat" type="text" name="Chat" placeholder="Mensaje" onChange={onHandleChange} onKeyPress={onSubmitkey} />
          <input className="chat-inputs__button" type="submit" value="Enviar" onClick={onSubmit} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Chat;
