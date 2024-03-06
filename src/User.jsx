/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Use from "./Use";


export default function User() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <>
           {
            users.map(user => <Use user = {user} murgi = {"murgi"} ></Use> )
           }
            <h2>Usersssssss</h2>
        </>
    )                                       
}
{/* <Friend name = {user} ></Friend> */}