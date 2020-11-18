import React, {useState} from 'react';
import AssignToUserSelect from './AssignToUserSelect';
import './Ticket.scss';
import restoreImage from '../../../../Assets/restore.png'
import { TicketPropsType } from '../../../../Common/types';

const Ticket: React.FC<TicketPropsType> = ({ticket, updateTicket, isTicketPage, moveToTrash, userNames, deleteTicket, restore}) => {
    const [isViewChanges, setIsViewChanges] = useState(false);
    const [inputValue, setInputValue] = useState(ticket.title);
    let date = ticket.createdAt? new Date(ticket.createdAt) : new Date();
    function convertDate(date: Date) {
        return (`${date.getHours()}:${date.getMinutes()}  ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`);
    }

    const clickUpdateTicket = () => setIsViewChanges(true);
    const handlerChange = (e: any) => setInputValue(e.target.value);
    const moveToRecycleBin = () => moveToTrash(ticket.id);
    const moveToDeletedTickets = () => deleteTicket(ticket.id);
    const restoreFromTrash = () => restore? restore(ticket.id) : () => {};
    const getUserName = () => userNames.get(ticket.id) ? userNames.get(ticket.id) : '';
    const saveTicket = () => {
        let newTicket = { ...ticket };
        newTicket.title = inputValue;
        updateTicket(newTicket);
        setIsViewChanges(false);
        setInputValue(ticket.title);
    }

    return (
        <div>
            {!isViewChanges ?
                <div className="ticket-container">
                    {isTicketPage ? "" :
                        <img className="restore-button" onClick={restoreFromTrash}
                            src = {restoreImage}
                        />
                    }
                    <p>{ticket.title}</p>
                    <p id="atDate">{convertDate(date)}</p>


                    {isTicketPage && <p className="username">{getUserName()}</p>}

                    {isTicketPage && <span className="delete-btn" onClick={clickUpdateTicket}>🖊️</span>}


                        {isTicketPage ?
                            <button className="delete-btn" onClick={moveToRecycleBin}>❌</button> :
                            <button className="delete-btn" onClick={moveToDeletedTickets}>❌</button>}
                </div>
                :
                <div className="ticket-container">

                    <input className="update-input" value={inputValue} onChange={e => handlerChange(e)}/>
                    <AssignToUserSelect ticketId={ticket.id}/>

                    <button className="save-btn" onClick={saveTicket}>save</button>
                </div>
            }
        </div>
    )
}

export default Ticket;
