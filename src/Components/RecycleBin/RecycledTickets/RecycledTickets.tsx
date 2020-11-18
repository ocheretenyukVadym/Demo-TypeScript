import {inject, observer, useObserver} from 'mobx-react';
import React from 'react'
import { useEffect } from 'react';
import { useRootStore } from '../../Store/RootStateContext';
import Tickets from '../../TicketPage/Tickets/Tickets';

const RecycledTickets = () =>  {
    const { nodesStore } = useRootStore();

    useEffect(() => nodesStore.getDeletedTickets(),[])

        return useObserver( () => (
            <div className="recycled-tickets">
                <Tickets tickets={nodesStore.deletedTickets}
                         deleteTicket={nodesStore.deleteTicket}
                         moveToTrash={nodesStore.moveToTrashTicket}
                         isTicketPage={false}
                         restore={nodesStore.restoreTicketFromRecycleBin}
                         userNames={nodesStore.userNames}
                         updateTicket={nodesStore.updateTicket}/>
            </div>
        ))
    }

export default RecycledTickets;