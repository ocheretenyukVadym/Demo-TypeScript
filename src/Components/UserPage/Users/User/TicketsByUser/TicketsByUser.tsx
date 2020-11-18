import React from 'react';
import { TicketsByUserType } from '../../../../../Common/types';
import './TicketsByUser.scss'

const TicketsByUser: React.FC<TicketsByUserType> = ({ticket, userId, unassignFromUser}) => {

    const unassignAction = () => unassignFromUser(ticket.id);

    return(
        <div>
            <div className="ticket">
                        <p>{ticket.title}</p>
                        <button className="delete-btn" onClick={unassignAction}>🢂</button>
            </div>
        </div>
    )
}

export default  TicketsByUser;