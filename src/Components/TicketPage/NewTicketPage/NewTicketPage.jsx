import React, { useState } from 'react';
import './NewTicketPage.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './Modal/ShowModalTicket';

const NewTicketPage = ({ createNewTicket }) => {
  const [input, setInput ,] = useState("");
  const submitHandler = (input) => {
      createNewTicket(input);
      setInput("");
  }
  return(
    <App submitHandler = {submitHandler}
    createNewTicket = {createNewTicket}
    setInput = {setInput}
    input = {input}
    />
    
  )
}

export default NewTicketPage;