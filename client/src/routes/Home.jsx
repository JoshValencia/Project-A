import React from 'react'
import LoginButton from '../components/LoginButton'
import LogoutButton from '../components/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

export default function Home() {
    const {isLoading, error} = useAuth0();
  

    return (
      <main className='column'>
        <h1>Auth 0 Login</h1>
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading...</p>}
        {!error && !isLoading && (
          <>
            <LoginButton/>
            <LogoutButton/>
          </>
        )}
        
      </main>
    )
}
