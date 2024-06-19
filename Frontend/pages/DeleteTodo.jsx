import React from 'react'
import { useState} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'


function DeleteTodo() {

const [loading,setLoading]=useState(false)
const navigate=useNavigate();
const {id}=useParams();


const handleDeleteTodo =()=>{
  setLoading(true);
    axios
      .delete(`http://localhost:5556/List/${id}`)
      .then(()=>{
        setLoading(false)
        navigate('/')
      })
      .catch((error)=>{
        setLoading(false)
        alert('an error happend. please check on console')
        console.log(error);
      })
      
}


  return (
    <div>DeleteTodo</div>
  )
}

export default DeleteTodo