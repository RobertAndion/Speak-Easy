import '../Css/components.css';

function LeftSidebar() {
  const nameExamples = ['Robert', 'Jordan', 'Bian'];
  return (
    <div className="left-sidebar">
      <div id='left-sidebar-header'> Friends List </div>
      <div id='left-sidebar-body'>
        {
          nameExamples.map(friend => (
            <div id='left-sidebar-friend-item' key={{ friend }}>{friend}</div>
          ))
        }
      </div>
    </div>
  );
}

export default LeftSidebar;
