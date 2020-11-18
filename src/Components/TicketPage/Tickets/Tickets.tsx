import React  from 'react';
import { TicketsType } from '../../../Common/types';
import Ticket from './Ticket/Ticket';
import './Tickets.scss';

const Tickets: React.FC<TicketsType> = ({tickets, deleteTicket, moveToTrash, restore, isTicketPage, userNames, updateTicket}) => {
    return (
        <div>
            {tickets && 
                tickets.map(ticket => {
                    return (
                        <Ticket key={ticket.id}
                                ticket={ticket}
                                deleteTicket={deleteTicket}
                                moveToTrash={moveToTrash}
                                isTicketPage={true}
                                userNames={userNames}
                                updateTicket={updateTicket}
                                restore={restore}
                        />
                    )
                })
            }
        </div>
    )
}

export default Tickets;