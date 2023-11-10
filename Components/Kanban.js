"use client"
import React from 'react'
import {useState} from 'react'

function Kanban() {
    const[todo,setTodo]=useState([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])
  const[force,setForce]=useState(false)
  function handkeClick(i1,i2){
    todo[(i1+1)%4].push(todo[i1][i2])
    todo[i1].splice(i2,1)
    setForce(!force)
  }
  return (
    <div className="min-h-screen flex  bg-blue-500 text-white">
      {todo.map((ar,i1)=><div className="flex-1 flex  items-center flex-col  " style={{border:'1px solid black'}}>yo
      <div className="flex flex-1 flex-col justify-around" style={{border:'1px solid black'}}>{ar.map((l,i2)=>

      <span className="flex justify-center  " style={{border:"1px solid white",backgroundColor:'red',alignItems:'center',width:300,height:50,cursor:"pointer"}}
      onClick={()=>handkeClick(i1,i2)}
      >
        {l}
        </span>)}
        </div>
      </div>)}
       </div>
  )
}

export default Kanban