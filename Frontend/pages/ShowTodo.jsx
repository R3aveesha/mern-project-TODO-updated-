import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import backbutton from '../src/components/backbutton';

const ShowTodo=()=>{

  const [todo,Settodo]=useState({});
  const[loading,setLoading]=useState(false)
  const{id}=useParams();


  useEffect(()=>{
    setLoading(true);
    axios
        .get(`http://localhost:5556/List/${id}`)
        .then((response)=>{
          Settodo(response.data);
          setLoading(false)
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        })

      },[])
  

  return (
    <div className='p-4'>
        <backbutton></backbutton>
        <h1 className='text-3xl my-4'></h1>
          {loading ?(
            <p>loading....</p>
          ):(
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
              <div className='my-4'>
                  <span className='text-xl mr-4 text-gray-500'>Id</span>
              </div>
            </div>

          )}
    </div>
  )
}

export default ShowTodo