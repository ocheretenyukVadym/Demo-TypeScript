import React, { useState } from 'react';
import AllTicketsByUser from './TicketsByUser/AllTicketsByUser';
import './User.scss';
import restoreImage from '../../../../Assets/restore.png'
import { UsersPropsType } from '../../../../Common/types';

const User:  React.FC<UsersPropsType> = ({user, updateUser, isUserPage, moveToTrash, deleteUser, restore, unassignFromUser}) => {
    let tempUser = user? user : {id: 0, name:'', tickets:Array<any> ()};

    const [isViewChanges, setIsViewChanges] = useState(false);
    const [inputValue, setInputValue] = useState(tempUser.name);
    const [isShowTickets, setIsShowTickets] = useState(false);

    const clickUpdateUser = () => setIsViewChanges(true);
    const handlerChange = (e: any) => setInputValue(e.target.value);
    const moveToRecycleBin = () => moveToTrash(tempUser.id);
    const moveToDeletedUsers = () => deleteUser(tempUser.id);
    const restoreFromTrash = () => {/*restore(tempUser.id)*/};

    const isPresentTickets = () => {
        let tmp = tempUser.tickets.filter(t => !t.inTrash )
        return tmp.length != 0;
    }

    const showTicketslist = () => {isShowTickets? setIsShowTickets(false) : setIsShowTickets(true)}
    const saveUser = () => {
        let newUser = {...tempUser};
        newUser.name = inputValue;
        updateUser(newUser);
        setIsViewChanges(false);
        setInputValue(tempUser.name);
    }

    return (
        <div>
            {!isViewChanges ?
                <>
                <div className="user-container">
                    {isUserPage ? "" :
                        <img className="restore-button" onClick={restoreFromTrash}
                        src = {restoreImage}
                        />
                    }
                    {isUserPage && isPresentTickets() && <span onClick={showTicketslist}>🎫</span>}
                        <p className="user-name" onClick={showTicketslist}>
                            {tempUser.name}
                        </p>
                        
                        {isUserPage && <span className="delete-btn" onClick={clickUpdateUser}>🖊️</span>}
                        {isUserPage ?
                            <button className="delete-btn" onClick={moveToRecycleBin}>❌</button> :
                            <button className="delete-btn" onClick={moveToDeletedUsers}>❌</button>}
                </div>

                {isShowTickets && 
                    <AllTicketsByUser tickets={tempUser.tickets} userId={tempUser.id} 
                        unassignFromUser={unassignFromUser? unassignFromUser : () => {}}/>}
                </>
            :
                <div className="user-container">
                    <input className="update-input" value={inputValue} onChange={e => handlerChange(e)}/>
                    <button className="save-btn" onClick={saveUser}>save</button>
                </div>}
        </div>

    )
}

export default User;