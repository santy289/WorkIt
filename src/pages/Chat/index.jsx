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
  function scroll() {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(scrollToBottom, [scroll]);
  }
  useEffect(() => {
    firstChatInfo();
    socket.on('Message:create', async (data) => {
      setChat(data);
      scroll();
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
            <div id="scroll-container" key={`${item.id}${userName}`} className={item.userName === userName ? 'chat-message__send' : 'chat-message__recieved'}>
              <p id="messages" className="chat-message__user">{`${item.userName} dice: `}</p>
              <p id="messages" className="chat-message__message">{`${item.message}`}</p>
            </div>
          ))}
        </div>
        <div className="chat-inputs__container">
          <input className="chat-inputs__textarea" id="chat" type="text" name="Chat" placeholder="Mensaje" onChange={onHandleChange} />
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
