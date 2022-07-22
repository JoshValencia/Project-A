import {useAuth0} from '@auth0/auth0-react'
import React from 'react'
import Button from "react-bootstrap/Button"

function LoginButton() {
    const {loginWithPopup, isAuthenticated} = useAuth0();

  return (
    !isAuthenticated &&(
        <Button onClick={() => loginWithPopup()}>
            Sign In
        </Button>
    )
  )
}

export default LoginButton