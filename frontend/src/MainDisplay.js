import './App.css';
import ChatWindow from './components/ChatWindow';
import LeftSidebar from './components/LeftSidebar.js';

function MainDisplay() {
  return (
    <div className="application-container">
      <div className='application-title'> Speak Easy </div>
      <LeftSidebar />
      <ChatWindow />
    </div>

  );
}

export default MainDisplay;
