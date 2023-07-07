import React from "react";

function StaffRow({user}) {
    
    
    return (
    
    <tr>
    <td><img src={user.picture.thumbnail} alt= 'Staff Member'/></td>
    <td>
        <a href="email:{user.email}">
        {user.name.first}&nbsp;
        {user.name.last}</a>
    </td>
    <td>{user.phone}</td>
    <td>{user.location.city}</td>
    </tr>
    )
}

export default StaffRow;