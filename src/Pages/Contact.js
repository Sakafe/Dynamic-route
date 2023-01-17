import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
        <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloremque quas quam quod tenetur reiciendis vel cupiditate, aliquam ea quia expedita ducimus culpa molestias iste quos cumque voluptate accusantium? Placeat?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in nostrum iste nam unde quaerat beatae dolorem deleniti! Beatae, voluptate! Omnis quia quas neque molestiae deleniti, sed dignissimos, id quaerat, nostrum architecto fuga tenetur. Porro, exercitationem sit voluptates et minima suscipit consequatur qui pariatur, repudiandae labore aspernatur inventore quas! Cumque!</p>
        <button onClick={() =>{
          navigate ('/')
        }}>Go-to-Home</button>
    </div>
  )
}
