import React,{useEffect,useState}from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'

function Home() {
    const [todo,setTodo]=useState([]);
    const [loading,setLoading]=useState(false);
    
    useEffect(()=>{
        setLoading(true);
        axios
            .get('http://localhost:5555/List')
            .then((Response)=>{
                setTodo(Response.data.data)
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error)
                setLoading(false);
            })
    },[]);


  return (
    <div>Home</div>
  )
}

export default Home