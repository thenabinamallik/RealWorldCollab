import React from 'react'
import Avatar from 'react-avatar'

const User = ({username}) => {
  return (
    <div className="mb-1 flex items-center">
      <Avatar name={username.toString()} size="30px" round="50%" />
      <span className="ml-2">{username}</span>
    </div>
  )
}

export default User