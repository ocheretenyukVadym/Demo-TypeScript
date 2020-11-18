import React from 'react';
import { UsersPropsType } from '../../../Common/types';
import User from './User/User';
import './Users.scss';


const Users: React.FC<UsersPropsType> = ({users, deleteUser, moveToTrash, isUserPage, updateUser, unassignFromUser}) => {
    return (
        <div>
            {users && 
                users.map(user => {
                    return (
                        <User key={user.id}
                              user={user} 
                              deleteUser={deleteUser}
                              moveToTrash={moveToTrash}
                              isUserPage={isUserPage}
                              updateUser={updateUser}
                              unassignFromUser={unassignFromUser}
                        />
                    )
                })
            }
        </div>
    )
}

export default Users;