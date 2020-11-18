import {inject, observer} from 'mobx-react';
import React, {useEffect} from 'react';
import { TicketsPageType } from '../../Common/types';
import NewTicketPage from './NewTicketPage/NewTicketPage';
import Tickets from './Tickets/Tickets';

const TicketPageContainer: React.FC<TicketsPageType> = ({getUsers,getTickets,getUserNames, setUserPage, users,createNewTicket, tickets,
                deleteTicket, moveToTrashTicket, userNames, updateTicket}) => {

    useEffect(() => {
        getUsers();
        getTickets();
        getUserNames();
        setUserPage(false);
    }, []);

     return users ? (
        <div className="container">
            <NewTicketPage
                createNewTicket={createNewTicket}
            />
            <Tickets tickets={tickets}
                     deleteTicket={deleteTicket}
                     moveToTrash={moveToTrashTicket}
                     isTicketPage={true}
                     userNames={userNames}
                     updateTicket={updateTicket}/>

        </div>
    ) : (<div></div>)
}

export default TicketPageContainer;