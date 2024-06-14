import React,{useEffect,useState}from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'

function Home() {
    const [todos,setTodo]=useState([]);
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
    <div>
      <div>
        <h1>Book List</h1>
        <Link to='/List/create'>
          <MdOutlineAddBox></MdOutlineAddBox>
        </Link>
        <div>
          <table className=''>
            <thead>
              <tr>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {
                todos.map((todo,index)=>{
                    <tr key={todo._id}>
                    <td>
                      {index+1}
                    </td>
                    <td>
                      {todo.Title}
                      </td>
                      <Link to={`/List/details/${todo._id}`}>
                        <BsInfoCircle className=''></BsInfoCircle>
                      </Link>
                      <Link to={`/List/edit/${todo._id}`}>
                        <AiOutlineEdit className=''></AiOutlineEdit>
                      </Link>
                      <Link to={`/List/details/${todo._id}`}>
                        <AiOutlineEdit className=''></AiOutlineEdit>
                      </Link>


                    </tr>
                })
              }
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default Home