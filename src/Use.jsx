/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function Use({murgi, user}) {
    console.log(murgi);
    console.log(user);
    return (<>
        <h2>{user.name}</h2>
        <h2>{user.address.city}</h2>
        <h2>{user.email}</h2>
    </>)
}