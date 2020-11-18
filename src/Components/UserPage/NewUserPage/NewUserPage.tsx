import React, {useState} from 'react';
import './NewUserPage.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './Modal/ShowModal';
import { NewUserPageType } from '../../../Common/types';

const NewUserPage: React.FC<NewUserPageType> = ({ createNewUser }) => {
    const [name, setName] = useState("");

    const submitHandler = (name: string) => {
        createNewUser(name);
        setName("");
    }
    return(
      <App submitHandler = {submitHandler}
      createNewUser = {createNewUser}
      setName = {setName}
      name = {name}
      />
      
    )
  }

export default NewUserPage;