import React from 'react'
import { AppState } from './Global'
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
  const { user } = React.useContext(AppState)
   const user_token = JSON.parse(localStorage.getItem('authToken'))
  console.log(user)
  return (
      <div>
          {user_token?.isAdmin  === true? children : <Navigate to='/login'/>}
    </div>
  )
}

export default PrivateRoute