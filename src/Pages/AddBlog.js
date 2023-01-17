import React, { useState,useEffect } from 'react'
import UserForm from '../Components/UserForm';
const url = 'https://jsonplaceholder.typicode.com/users';
export const AddBlog = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getAllUsers = () =>{
    fetch (url)
    .then(res =>{
      if (!res.ok){
        throw Error('Could not fetch');
      }
      return res.json();
    })
    .then (data =>{
      setUsers(data)
    })
    .catch(err =>{
      setError(err.message);
    })
    .finally(() =>{
      setLoading(false);
    })
  }
  useEffect(() => {
    getAllUsers()
    
  }, [])
// delete user from API
// const handleDelete = (id) =>{
//   fetch (url + `/${id}`,{
//     method : 'DELETE'
//   }).then((res) =>{
//     res.json().then((data) =>{
//       console.log(data)
//     })
//   })
// }
  const handleDelete = (id) => {
    fetch(url + `/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not delete");
        }
        getAllUsers();
      })
      .catch((err) => {
        setError(err.message);
      });
  };
   const addUser = (user) =>{
    fetch(url , {
      method: "POST",
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(user),
    })
      .then((res) => {
        if (res.status === 200) {
          getAllUsers();
        }else{
          throw Error("could not create new user !");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
    console.log(user)
   }
  return (
    <div>
        <h1>Users Management App</h1>
        {loading && <h2>Loading.....</h2>}
        {error && <h2>{error}</h2>}
        <UserForm btnText='Add-user' handleSubmitData = {addUser}/>
        <section>
          {users && users.map((user) =>{
            const {id,name,username,email,phone} = user;
            return(
              <article key={id}>
                <h2>{id}</h2>
                <p>{name}</p>
                <p>{username}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <button className='btn'>Edit</button>
                <button className='btn' onClick={() =>{handleDelete(id);}}>Delete</button>
              </article>
            )
          })}
        </section>
    </div>
  )
}
