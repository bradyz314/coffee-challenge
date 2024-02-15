import { useState } from 'react'
import './App.css';
import AddMenu from './components/AddMenu';
import ParticipantList from './components/ParticipantList';
import ResultScreen from './components/ResultScreen';

function App() {
  const [id, setId] = useState(0);
  const [participants, setParticipants] = useState([]);
  const [total, setTotal] = useState(0);
  const [showAdd, setShowAdd] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [chosen, setChosen] = useState('');
  // Compute a score using their budget, drinkPrice, and timesPaid.
  const computeScore = (info) => {
    return (0.25 * info['budget'] + 0.6 * info['drinkPrice']) / (info['timesPaid'] + 1);
  }
  // Function to choose the person to pay
  const choosePersonToPay = () => {
    // Filter out people whose budget cannot cover the total
    const canPay = participants.filter((info) => info['budget'] >= total);
    if (canPay.length === 0) {
      return null;
    } else {
      let person = '';
      let maxScore = -1;
      // For each person, compute a score. The person with the greatest score will pay. Ties are broken with a coin toss.
      for (let i = 0; i < canPay.length; i++) {
        const score = computeScore(canPay[i]);
        if (score >= maxScore) {
          const rand = Math.floor(Math.random() * 2);
          if (score > maxScore || rand === 1) {
            person = canPay[i]['name'];
          }
          maxScore = score; 
        } 
      }
      return person;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Coffee Crisis</h1>
        <p className='description'>Can't decide who should pay? Allow us to help!</p>
      </header>
      <div className='buttons'>
        <button
          className='add-button img-button'
          onClick={() => setShowAdd(true)}
        ></button>
        <button
          className='pay-button img-button'
          onClick={() => {
            setChosen(choosePersonToPay());
            setShowResult(true);
          }}
        ></button>
      </div>
      {showAdd && <AddMenu setShow={setShowAdd} addParticipant={(info) => {
        info['id'] = id;
        setId(id + 1);
        setParticipants([...participants, info]);
        setTotal(total + Number(info['drinkPrice']));
      }} />}
      {showResult && <ResultScreen setShow={() => setShowResult(false)} name={chosen}/>}
      <ParticipantList participants={participants} total={total} removeParticipant={(info) => {
        setParticipants(participants.filter((curr) => (curr['id'] !== info['id'])));
        setTotal(total - Number(info['drinkPrice']));
      }} />
    </div>
  );
}

export default App;
