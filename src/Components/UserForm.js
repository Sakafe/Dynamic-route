import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './UserForm.css'
const UserForm = ({handleSubmitData,btnText}) => {
    const [user, setUser] = useState({
        username : '',
        email : '',
    })
    const handleChange = (e) => {
      const selectedField = e.target.name ;
      const selectedValue = e.target.value ;

      setUser(prevState =>{
        return {...prevState, [selectedField]: selectedValue}
      })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSubmitData(user);
        setUser({
            username : '',
            email : '', 
        })
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className="field-group">
           <label htmlFor="username">User Name : </label>
           <input type="username" id='username' name='username' value={user.username} onChange={handleChange} required/>
        </div>
        <div className="field-group">
           <label htmlFor="email">Email : </label>
           <input type="email" id='email' name='email' value={user.email} onChange={handleChange} required/>
        </div>
        <button type='submit' className='btn'>{btnText}</button>
    </form>
  )
}

UserForm.propTypes = {}

export default UserForm