import { Store } from "./../Components/Store/store";
export type TicketType = {
    id: number,
    title: string,
    createdAt: Date,
    deleted?: boolean,
    inTrash?: boolean
}

export type UserType = {
    id: number,
    tickets: Array<TicketType>,
    name: string,
    deleted?: boolean,
    inTrash?: boolean
}

export type HeaderPropsType = {
    isUserPage: Store["isUserPage"]
}

export type UsersPagePropsType = {
    isUserPage: Store["isUserPage"],
    getUsers: Store["getUsers"],
    setUserPage: Store["setUserPage"],
    createNewUser: Store["createNewUser"],
    users: Store["users"],
    deleteUser: Store["deleteUser"],
    moveToTrash: Store["moveToTrash"],
    updateUser: Store["updateUser"],
    unassignFromUser: Store["unassignFromUser"],
    
}

export type UsersPropsType = {
    isUserPage: Store["isUserPage"],
    users?: Store["users"],
    user?: UserType,
    restore?: Store["restoreUserFromRecycleBin"],
    deleteUser: Store["deleteUser"],
    moveToTrash: Store["moveToTrash"],
    updateUser: Store["updateUser"],
    unassignFromUser?: Store["unassignFromUser"],
}

export type AllTicketsByUserTypes = {
    tickets: Array<TicketType>, 
    userId: number,
    unassignFromUser: Store["unassignFromUser"],
}

export type TicketsByUserType = {
    key: number,
    ticket: TicketType,
    userId: number,
    unassignFromUser: Store["unassignFromUser"],
}

export type NewUserPageType = {
    createNewUser: Store["createNewUser"],
}

export type TicketsPageType = {
    getUsers: Store["getUsers"],
    getTickets: Store["getTickets"],
    getUserNames: Store["getUserNames"], 
    setUserPage: Store["setUserPage"], 
    users: Store["users"], 
    createNewTicket: Store["createNewTicket"], 
    tickets: Store["tickets"], 
    deleteTicket: Store["deleteTicket"], 
    moveToTrashTicket: Store["moveToTrashTicket"], 
    userNames: Store["userNames"], 
    updateTicket: Store["updateTicket"]
}
export type TicketsType = {
    tickets: Store["tickets"], 
    deleteTicket: Store["deleteTicket"], 
    moveToTrash: Store["moveToTrashTicket"], 
    userNames: Store["userNames"], 
    updateTicket: Store["updateTicket"]
    isTicketPage: boolean,
    restore?: Store["restoreTicketFromRecycleBin"],
}

export type TicketPropsType = {
    ticket: TicketType, 
    deleteTicket: Store["deleteTicket"], 
    moveToTrash: Store["moveToTrashTicket"], 
    userNames: Store["userNames"], 
    updateTicket: Store["updateTicket"],
    restore?: Store["restoreTicketFromRecycleBin"],
    isTicketPage: boolean,

}

export type AssignToUserSelectType = {
    ticketId: number
}

export type NewTicketsPageType = {
    createNewTicket: Store["createNewTicket"], 
}
