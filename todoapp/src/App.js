import React,{useState} from 'react'
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';





function App() {
  const[todos,setTodos]=useState(["Todo App with Firebase"])
  const [text, setText] = useState("")

// Add Element in a List
  const Add=()=>{

  }
  // Update Element in a List
  const update=()=>{

  }
  
  // Delete Element in a List

  const Delete=()=>{
// Delete All Element in a List
  }
  const DeleteAll=()=>{

  }
  return (
    <div>
    <h1 className='Todo_Header'>☑ TODO APP</h1>
    <form>
      <Paper elevation={5} className="Add_Todo">
        <TextField className = "Text_Field" label = "Enter Todos" value ={text} onChange={(e)=>setText(e.target.value)}><br/></TextField>
        <Button type = "submit" variant='contained' color='Primary' onClick={(Add)}>Add</Button>
        <Button  variant='contained' color='Primary' onClick={(DeleteAll)}>DeleteAll</Button>

      </Paper>
    </form>
    {todos.map((data,i)=>{
  return<p>{i+1}.{data} </p>
    })
    
    }
    
    </div>
  );
}

export default App;
