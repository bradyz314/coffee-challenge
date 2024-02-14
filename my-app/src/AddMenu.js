import { useState } from "react"; 

function AddMenu({setShow, addParticipant}) {
    const [name, setName] = useState('');
    const [budget, setBudget] = useState(0);
    const [drinkPrice, setDrinkPrice] = useState(0);
    const [timesPaid, setTimesPaid] = useState(0);
    return (
        <div className='menu-background'>
            <div className='menu'>
                <h4>Add Participant</h4>
                <h6
                    className='menu-item'
                >
                    Name
                </h6>
                <input
                    type='text'
                    value={name}
                    spellCheck={false}
                    onChange={(e) => setName(e.target.value)}
                />
                <h6
                    className='menu-item'
                >
                    Budget
                </h6>
                <input
                    type="number"
                    min="0"
                    step="0.01"
                    onChange={(e) => setBudget(Math.max(0, e.target.value).toFixed(2))}
                />
                <h6
                    className='menu-item'
                >
                    Drink Price
                </h6>
                <input
                    type="number"
                    min="0"
                    step="0.01"
                    onChange={(e) => setDrinkPrice(Math.max(0, e.target.value).toFixed(2))}
                />
                <h6
                    className='menu-item'
                >
                    Times Paid
                </h6>
                <input
                    type="number"
                    min="0"
                    step="1"
                    onChange={(e) => setTimesPaid(Math.max(0, e.target.value))}
                />
                <div className='buttons'>
                    <button
                        className='text-button'
                        onClick={() => {
                            addParticipant({
                                name,
                                budget,
                                drinkPrice,
                                timesPaid
                            });
                            setShow(false);
                    }}
                    >
                        Add
                    </button>
                    <button
                        onClick={() => setShow(false)}
                        className='text-button'
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )

}

export default AddMenu;