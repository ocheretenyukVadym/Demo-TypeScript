import React from 'react';
import './App.css';
import { useRootStore } from './Components/Store/RootStateContext';
import { useObserver } from 'mobx-react-lite';
import Header from './Components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import UserPageContainer from './Components/UserPage/UserPageContainer';
import TicketPageContainer from './Components/TicketPage/TicketPageContainer';
import RecycleBinContainer from './Components/RecycleBin/RecycleBinContainer';

const App = () => {
  const { nodesStore } = useRootStore();
  return useObserver(() => (
    <div className="App">
      <Header isUserPage={nodesStore.isUserPage} />
      <div className="content-container">
        <Switch>
          <Route exact path='/userPage'>
            <UserPageContainer
              isUserPage={nodesStore.isUserPage}
              getUsers={nodesStore.getUsers}
              setUserPage={nodesStore.setUserPage}
              createNewUser={nodesStore.createNewUser}
              users={nodesStore.users}
              deleteUser={nodesStore.deleteUser}
              moveToTrash={nodesStore.moveToTrash}
              updateUser={nodesStore.updateUser}
              unassignFromUser={nodesStore.unassignFromUser} />
          </Route>
          <Route path='/ticketPage'>
            <TicketPageContainer
              getUsers={nodesStore.getUsers}
              getTickets={nodesStore.getTickets}
              getUserNames={nodesStore.getUserNames}
              setUserPage={nodesStore.setUserPage}
              users={nodesStore.users}
              createNewTicket={nodesStore.createNewTicket}
              tickets={nodesStore.tickets}
              deleteTicket={nodesStore.deleteTicket}
              moveToTrashTicket={nodesStore.moveToTrashTicket}
              userNames={nodesStore.userNames}
              updateTicket={nodesStore.updateTicket} />
          </Route>
          <Route path='/recycleBin'><RecycleBinContainer  /></Route>
        </Switch>
      </div>
    </div>
  ));
}

export default App;