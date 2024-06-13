import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import CreateTodo from '../pages/CreateTodo'
import EditTodo from '../pages/EditTodo'
import DeleteTodo from '../pages/DeleteTodo'
import ShowTodo from '../pages/ShowTodo'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/List' element={<Home/>}></Route>
        <Route path='/List/create' element={<CreateTodo/>}></Route>
        <Route path='/List/details/:id' element={<ShowTodo/>}></Route>
        <Route path='/List/edit/:id' element={<EditTodo/>}></Route>
        <Route path='/List/delete/:id' element={<DeleteTodo/>}></Route>
      </Routes>
    </div>
  )
}

export default App