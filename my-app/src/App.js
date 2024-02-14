import { useState } from 'react'
import './App.css';
import AddMenu from './AddMenu';
import ParticipantList from './ParticipantList';

function App() {
  const [participants, setParticipants] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  return (
    <div className="App">
      <header>
        <h1>Coffee Crisis</h1>
        <p className='description'>Can't decide who should pay? Allow us to help!</p>
      </header>
      <div className='buttons'>
        <button
          className='add-button'
          onClick={() => setShowAdd(true)}
        ></button>
        <button className='pay-button'></button>
      </div>
      {showAdd && <AddMenu setShow={setShowAdd} addParticipant={(info) => setParticipants([...participants, info])} />}
      <ParticipantList participants={participants} removeParticipant={(info) => {
        setParticipants(participants.filter((curr) => (curr['name'] !== info['name'] 
                                      && curr['budget'] !== info['budget']
                                      && curr['drinkPrice'] !== info['drinkPrice']
                                      && curr['timesPaid'] !== info['timesPaid'])))}}/>
    </div>
  );
}

export default App;
