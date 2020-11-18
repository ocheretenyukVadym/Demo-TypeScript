import React, { useEffect } from 'react';
import { UsersPagePropsType } from '../../Common/types';
import NewUserPage from './NewUserPage/NewUserPage';
import Users from './Users/Users';

const UserPageContainer: React.FC<UsersPagePropsType> = 
        ({getUsers, setUserPage, createNewUser, users, deleteUser, moveToTrash, isUserPage, updateUser, unassignFromUser}) =>{

    useEffect(() => {
        debugger
        getUsers();
        setUserPage(true);
    },[]);

        return(
            <div className="container">
                <NewUserPage 
                    createNewUser={createNewUser} />

                <Users users={users} 
                        deleteUser={deleteUser} 
                        moveToTrash={moveToTrash} 
                        isUserPage={true} 
                        updateUser={updateUser}
                        unassignFromUser={unassignFromUser}/>
            </div>
        )
    }


export default UserPageContainer;