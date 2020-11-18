import React, { useState } from 'react';
import RecycledUsers from "./RecycledUsers/RecycledUsers";
import RecycledTickets from "./RecycledTickets/RecycledTickets";
import './RecycleBinContainer.scss'

const RecycleBinContainer = () => {
    const [selected, setSelected] = useState(true);
    

    const clickOnUsers = () => {
        setSelected(true);
    }

    const clickOnTickets = () => {
        setSelected(false);
    }

    return (
        <div className="recycle-bin-container">
            <div className="top-switches">
                <div className="switch-block">
                    <div className="switch-toggle">

                        <input id='radio1' name="switch" type="radio" onChange={() => {}} checked={selected}  />
                        <label htmlFor='radio1t' onClick={clickOnUsers}>Users</label>

                        <input id="radio2"  name="switch" type="radio" onChange={() => {}} checked={!selected}/>
                        <label htmlFor="radio2" onClick={clickOnTickets}>Tickets</label>
                    </div>
                </div>
            </div>
 
            {selected && <RecycledUsers />}
            {!selected && <RecycledTickets />}
        </div>
    )
}

export default RecycleBinContainer;