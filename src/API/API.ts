import { TicketType, UserType } from "./../Common/types";
import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://localhost:8765/api/',
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    },
    
});

export const userAPI = {
    getUsers(): Promise<Array<UserType>> {
        return instance.get(`users`)
            .then(response => {
                return response.data})},

    addUser(data: string): Promise<string> {
        return instance.post(`users`, {name: data})
            .then(response => {
                return response.data});},

    updateUser(user: UserType): Promise<string> {
        return instance.put(`users`, user)
            .then(response => {
                return response.data});},

    deleteUser(id: number): Promise<string> {
        return instance.delete(`users?id=${id}`)
        .then(response => {
            return response.data});},
    
    moveToTrash(id: number): Promise<string> {
        return instance.post(`users/moveToTrash/${id}`,{})
            .then(response => {
                return response.data});},

    getDeletedUsers(): Promise<Array<UserType>>{
        return instance.get(`users/allInTrash`)    
        .then(response => {
            return response.data});},

    restoreFromRecycleBin(id: number): Promise<string> {
        return instance.post(`users/restore/${id}`,{})
            .then(response => {
                return response.data});},
    getUserByTicketId(ticketId: number): Promise<string> {
        return instance.get(`users/byTicketId/${ticketId}`)
            .then(responce => {
                return responce.data});},
}

export const ticketAPI = {
    getTickets(): Promise<Array<TicketType>> {
        return instance.get(`tickets`)
            .then(response => {
                return response.data});},

    addTicket(data: string): Promise<string> {
        return instance.post(`tickets`, {title: data})
            .then(response => {
                return response.data});},

    updateTicket(ticket: {}): Promise<TicketType> {
        return instance.put(`tickets`, ticket)
            .then(response => {
                return response.data});},

    deleteTicket(id: number): Promise<string> {
        return instance.delete(`tickets/${id}`)
            .then(response => {
                return response.data});},

    getDeletedTickets(): Promise<Array<TicketType>> {
        return instance.get(`tickets/allInTrash`) 
            .then(response => {
                return response.data});},

    moveToTrash(id: number): Promise<string> {
        return instance.post(`tickets/moveToTrash/${id}`,{})
            .then(response => {
                return response.data});},

    restoreFromRecycleBin(id: number): Promise<string> {
        return instance.post(`tickets/restore/${id}`,{})
            .then(response => {
                return response.data});},

    assignToUser(userId: number, ticketId: number): Promise<string> {
        return instance.post(`tickets/assign?ticketId=${ticketId}&toUserId=${userId}`) 
            .then(response => {
                return response.data});},
    
    unassignFromUser(id: number): Promise<string> {
        return instance.post(`tickets/unassign/${id}`) 
            .then(response => {
                return response.data});},
} 
