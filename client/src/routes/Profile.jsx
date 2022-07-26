import {useAuth0} from '@auth0/auth0-react'
import React from 'react'

function Profile() {
    const {user} = useAuth0();

  return (
      <article className='column'>
          {user?.picture && <img src={user.picture} alt={user?.name} />}
          <h2>{user?.name}</h2>
          <h5>User ID: {user.sub.split("|")[1]}</h5>
          <ul>
              {Object.keys(user).map((objKey,i)=> <li key={i}>{objKey}:{user[objKey]}</li>)}
          </ul>
      </article>
  )
}

export default Profile