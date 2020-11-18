import React from 'react'
import Users from "../../UserPage/Users/Users";
import {useObserver} from "mobx-react";
import { useEffect } from 'react';
import { useRootStore } from '../../Store/RootStateContext';

const RecycledUsers = () => {
    const { nodesStore } = useRootStore();
    useEffect(() => nodesStore.getDeletedUsers(), [])

        return useObserver(() => (
            <div className="recycled-users">
                <Users users={nodesStore.deletedUsers}
                       deleteUser={nodesStore.deleteUser}
                       moveToTrash={nodesStore.moveToTrash}
                       isUserPage={false}
                       restore={nodesStore.restoreUserFromRecycleBin}
                       updateUser={nodesStore.updateUser}/>
            </div>
        ))
    }


export default RecycledUsers;