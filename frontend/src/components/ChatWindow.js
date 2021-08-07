import '../Css/components.css';

function ChatWindow() {
    const messageExample = ['Example Message', 'Another Example Message'];
  return (
    <div className="chat-window">
      <div id='chat-window-header'> Messages with name here</div>
      <div id='chat-window-body'>
        {
          messageExample.map(message => (
            <div id='chat-window-message-item' key={{ message }}>{message}</div>
          ))
        }
      </div>
      <div id="chat-window-input"> Enter text here eventually</div>
    </div>
  );
}

export default ChatWindow;