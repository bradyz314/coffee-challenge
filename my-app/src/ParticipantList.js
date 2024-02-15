function ParticipantList({participants, removeParticipant, total}) {
    return (
        <div className='participant-list'>
            <h3>Participants</h3>
            <h5>{`Total: $${Number(total).toFixed(2)}`}</h5>
            <ul>
                {participants.map((info, idx) => (
                    <li 
                        key={idx}
                        onClick={() => removeParticipant(info)}
                    >
                        {`${info['name']} has $${Number(info['budget']).toFixed(2)}. 
                        Their drink costs $${Number(info['drinkPrice']).toFixed(2)}. 
                        They have paid ${info['timesPaid']} times in the past.`}
                    </li>))
                }
            </ul>
        </div>
    )
}

export default ParticipantList;