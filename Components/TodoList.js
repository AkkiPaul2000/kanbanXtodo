"use client"
import React, { useState } from 'react'
import './todo.css'
import { FaCircle } from "react-icons/fa6";

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
      <div className='' style={{boxShadow: ' 0px 8px 15px rgba(0, 0, 0, 0.4)',borderRadius:45}}>
        <div className='flex m-12 flex-col'>
        <center><div className='items-center justify-center' style={{width:'35rem',border:'1px solid black'}}>
        <span style={{height:40,flex:1,color:'#52c234',fontWeight:'bolder',fontSize:35}}>TodoList :</span> 
        <div className='flex m-5'>
          <input style={{flex:3,color:"black",margin:'0px 20px',borderRadius:5,textAlign:'center'}}  name="myInput" value={inp}  onChange={(e)=>(setInp(e.target.value))} />
          <button className='but text-sm p-2' 
          onClick={()=>{
            if(inp)
            list.push(inp)
            setInp("")
          }}
          >Add me</button>
        </div>
        </div>
        </center>
        <div style={{border:' ',display:'flex' ,flexDirection:'column', justifyContent:'space-around',alignItems:'center' ,height:'48vh'}}>
        {list.map((l,i)=>
        <div className='flex  items-center ' 
        style={{ backgroundColor:'#52c234 ',border:'',cursor:'pointer',borderRadius:10,height:'50px',width:'500px',boxShadow:'0px 8px 15px rgba(0, 0, 0, 0.4)'}} 
        onClick={()=>onDel(i)}>
          <span style={{marginLeft:10}}><FaCircle /></span>
        <span className='flex-1 text-center'>{l}</span></div>)}
        </div>
        </div>
        </div>
    </div>
  )
}
export default TodoList