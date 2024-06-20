import express from 'express'
const router = express.Router();
import {Todo} from '../models/Todomodel.js'



router.post('/',async(request,response)=>{
    try{
        if(
            !request.body.Title
        ){
            return response.status(400).send({
                message:'this feild should fill'
            })
        }
        const newTodo={
            Title:request.body.Title
        }
        const todo=await Todo.create(newTodo);

        return response.status(201).send(todo);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message})
    }
})

router.get('/',async(request,response)=>{
    try{
        const todos=await Todo.find({});
        return response.status(200).json({
            count:todos.length,
            data:todos
        })

    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message})
    }
});
router.get('/:id',async(request,response)=>{
    try{

        const {id} =request.params;
        const todos=await Todo.findById(id);
        return response.status(200).json(todos)
        

    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message})
    }
});
router.put('/:id',async(request,response)=>{
    try{
        if(!request.body.Title){
            return response.status(400).send({
                message:'send Title'
            });
        }

        const {id}=request.params;
        const result=await Todo.findByIdAndUpdate(id,request.body)

        if(!result){
            return response.status(404).json({message:'Item not found'})
        }
        return response.status(404).json({message:'item update sucessfully'})

    }
    catch{
        console.log(error.message);
        response.status(500).send({message:error.message})
    }
})
router.delete('/:id',async(request,response)=>{
    try{

        const {id}=request.params;
        const result = await Todo.findByIdAndDelete(id)

        if(!result){
            return response.status(404).json({message:'Title not found'})
        }

        return response.status(200).send({message:'book deleted successfully'})

    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message})
    }
})

export default router;
