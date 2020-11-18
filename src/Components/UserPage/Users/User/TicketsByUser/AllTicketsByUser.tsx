import React from 'react';
import { AllTicketsByUserTypes } from '../../../../../Common/types';
import TicketsByUser from './TicketsByUser';

const AllTicketsByUser: React.FC<AllTicketsByUserTypes> = ({tickets, userId, unassignFromUser}) => {

    return (
        <div>
            {tickets && tickets.map(ticket =>
                !ticket.inTrash && <TicketsByUser key={ticket.id} ticket={ticket} userId={userId} unassignFromUser={unassignFromUser}/>)}
        </div>
    )
}

export default AllTicketsByUser;