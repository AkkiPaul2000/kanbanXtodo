"use client"
import React, { useState } from 'react'
import './todo.css'

function TodoList() {
  const [list,setList]=useState([])
  const [toggle, setToggle] = useState(false);
  const [inp,setInp]=useState("")
  function onDel(i){
    list.splice(i,1)
    setToggle(!toggle)
   
  }
  return (
    <div className="flex min-h-screen justify-center  box1 items-center">
      <div className='' style={{border:'1px solid black'}}>
        <div className='flex m-12 flex-col'>
        <center><div className='items-center justify-center' style={{width:'25rem',border:'1px solid black'}}>
        <span style={{height:40,flex:1,color:'#52c234',fontWeight:'bolder',fontSize:25}}>TodoList :</span> 
        <div className='flex m-5'>
          <input style={{flex:3,color:"black",margin:'0px 20px',borderRadius:5,textAlign:'center'}} name="myInput" value={inp}  onChange={(e)=>(setInp(e.target.value))} />
          <button className=' bg-red-300 text-sm p-2' style={{flex:1,backgroundColor:'#52c234' ,borderRadius:5}} 
          onClick={()=>{
            if(inp)
            list.push(inp)
            setInp("")
          }}
          >Add me</button>
        </div>
        </div>
        </center>
        <div style={{border:' ',display:'flex' ,flexDirection:'column', justifyContent:'space-around' ,height:'48vh'}}>
          
        {list.map((l,i)=>
        
        <div className='flex justify-center items-center ' 
        style={{ backgroundColor:'#52c234 ',border:'',cursor:'pointer',borderRadius:10,height:'50px',width:'700px'}} 
        onClick={()=>onDel(i)}>
        {l}</div>)}
        </div>
        </div>
        </div>
    </div>
  )
}
export default TodoList