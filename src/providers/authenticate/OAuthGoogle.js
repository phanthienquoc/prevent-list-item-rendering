import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'

const GoogleAuthContext = React.createContext()

export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    clientId: "368180729958-hlhlc76humleo299q01t31ng1u3p4cnk.apps.googleusercontent.com", // Your clientID from Google.
  })
  console.log(googleAuth)

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)