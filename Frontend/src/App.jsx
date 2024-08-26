import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import CreateTodo from '../pages/CreateTodo'
import EditTodo from '../pages/EditTodo'
import DeleteTodo from '../pages/DeleteTodo'
import StaffManagerProfile from '../pages/Test'
import Myleaves from '../pages/Test'
import ShowTodo from '../pages/ShowTodo'
import CustomerSupport from '../pages/Test'
import InquiryForm from '../pages/Test'
import TransportPage from '../pages/Test'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/List' element={<Home/>}></Route>
        <Route path='/List/create' element={<CreateTodo/>}></Route>
        <Route path='/List/details/:id' element={<ShowTodo/>}></Route>
        <Route path='/List/edit/:id' element={<EditTodo/>}></Route>
        <Route path='/List/delete/:id' element={<DeleteTodo/>}></Route>
        
        <Route path='/test' element={<TransportPage/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App