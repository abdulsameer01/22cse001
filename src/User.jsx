import React from 'react'

function User(props) {
    const userdetails={name:"abdul",age:20,phone:456545116};
  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {userdetails.name}</p>
      <p>Age: {userdetails.age}</p>
      <p>Phone: {userdetails.phone}</p>
    </div>
  )
}

export default User