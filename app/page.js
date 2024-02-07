
"use client"
import React ,{useState} from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler=(e)=>{
      e.preventDefault()
      // console.log(title);
      // console.log(desc);
      setmainTask([...mainTask,{title,desc}])
      settitle("")
      setdesc("")
      console.log(mainTask);
    }

     const deleteHandler=(i)=>{
        let copytask=[...mainTask]
        copytask.splice(i,1)
        setmainTask(copytask)
     }


    let rendertask=<h2>No task Available</h2>

    if(mainTask.length>0)
    {
      rendertask=mainTask.map((t,i)=>{
        return (
          <li key={i} className='flex items-center justify-between mb-8'>
            <div className='flex items-center justify-between mb-5 w-2/3'>
              <h5 className='text-2xl font-semibold'>{t.title}</h5>
              <p className='text-lg font-medium'>{t.desc}</p>
             </div>
             <button 
             onClick={()=>{
                deleteHandler(i)
             }}
             className='bg-red-400 px-4 py-2 rounded font-bold'>Delete</button>
          </li>
        )
      })

    }


  return (
    <>
    <h1 className='bg-black col text-white p-5 text-5xl font-medium text-center'>My to-do list</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className='text-2xl border-zinc-800 rounded border-2 m-8 px-4 py-2' placeholder='Enter the task' value={title} onChange={(e)=>{
        settitle(e.target.value);
      }}/>
      <input type="text" className='text-2xl border-zinc-800 rounded border-2 m-8 px-4 py-2' placeholder='Enter the description' value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }} />
      <button className='bg-black text-white rounded px-4 py-3 text-2xl font-bold border-gray-50 m-5'>Add task</button>
    </form>
    <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {rendertask}
        </ul>
      </div>
    </>
  )
}

export default page