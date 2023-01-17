import React, { useEffect, useState } from 'react'
import { useParams, useLocation  } from 'react-router-dom'
import { blogData } from '../FakeData';
export const Blog2 = () => {
  const {name} = useParams();
  // const [bodyData, setBodyData] = useState('');
  const location = useLocation();
  //   console.log(location);
  // useEffect(()=>{
  // const blogsData = blogData.filter((blog)=> blog.name === name);
  // setBodyData(blogsData[0].body)
  // },[]);
  return (
    <div>
      <h1>{name} Page</h1>
      {/* <p>{bodyData.slice(0,800)}</p> */}
      <p>{location.state.body.slice(0,800)}</p>
    </div>
  )
}
