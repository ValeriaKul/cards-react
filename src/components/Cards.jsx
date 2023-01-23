import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrashCan,
  } from "@fortawesome/free-solid-svg-icons";

export default function Cards ({users, deleteUser}) {

  return (
   <>
    {users.map(user => {
        return (
            <React.Fragment key={user.id}>
                <div className='user'>
                    <p className='name'>Name: <b>{user.name}</b></p>
                    <p className='username'>Username: <b>{user.username}</b></p>
                    <p className='email'>email: <b>{user.email}</b></p>
                    <p className='phone'>Phone: <b>{user.phone}</b></p>
                    <span
                        title='Delete'
                        onClick={(e)=> deleteUser(user.id)}>
                        <FontAwesomeIcon icon={faTrashCan}/>
                    </span>
                </div>
               
            </React.Fragment>
        )
    })}
   </>
  )
}
