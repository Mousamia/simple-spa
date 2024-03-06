/* eslint-disable react/prop-types */

import { useState } from "react";

/* eslint-disable no-unused-vars */
export default function Use({murgi, user}) {
    console.log(murgi);
    console.log(user);
    const [mad, setMad] = useState(false)
    const style = {
        border: '2px solid red',
        padding: '8px',
        backgroundColor: 'green',
        
      };

      const handleToggle = () => {
        setMad(!mad);

      }
    return (<>
        <h2>{user.name}</h2>
        <h2>{user.address.city}</h2>
        <h2>{user.email}</h2>
        <button onClick={handleToggle} style={style}>Mad</button>
        {
            mad ? 
            `<h3> mone rong</h3>` : "No rong"
        }
    </>)
}