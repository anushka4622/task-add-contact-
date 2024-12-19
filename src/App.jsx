import React, { useState } from 'react'

const App = () => {


  const [name, setname] = useState('')
  const [company, setcompany] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [isFavorite, setisFavorite] = useState(false)
  const [allUsers, setallUsers] = useState([])

  const submitHandler =(e)=>{
       e.preventDefault()

       const newUsers = [...allUsers,{name,company,phoneNumber,isFavorite}]
       setallUsers(newUsers)

       setname('')
       setcompany('')
       setphoneNumber('')
       setisFavorite(false)

  }
  
  const deleteHandler = (i)=>{
    
    const copyUsers = [...allUsers]
    copyUsers.splice(i,1)
    setallUsers(copyUsers)
  }

  return (
    <div className='p-3 flex w-full h-screen bg-gray-200'>
      <form onSubmit={(e)=>{submitHandler(e)}} className='p-5 w-[49%] bg-white rounded'>
        <h2 className='text-2xl font-semibold'>Add Contact</h2><br />

        <label className='text-xl font-normal'  >Name<span className='text-red-500'>*</span></label><br />
        <input onChange={(e)=>{setname(e.target.value)}} 
        value={name} 
        type="text" 
        placeholder='Enter name' 
        className='py-2 px-4 border-2 border-gray-300 text-[18px] w-full rounded mb-7 mt-2'          
        required 
        /><br />

        <label className='text-xl font-normal' >Company</label><br />
        <input onChange={(e)=>{setcompany(e.target.value)}}
        value={company}
        type="text"
        placeholder='Enter company'
        className='py-2 px-4 border-2 border-gray-300 text-[18px] w-full rounded mb-7 mt-2'  
            /><br />

        <label className='text-xl font-normal ' >Phone<span className='text-red-500'>*</span></label><br />
        <input onChange={(e)=>{setphoneNumber(e.target.value)}}
        value={phoneNumber}
        type="number" 
        placeholder='Enter phone number'
        className='py-2 px-4 border-2 border-gray-300 text-[18px] w-full rounded mb-3 mt-2'
        required/><br /><br />

        <input type="checkbox" checked={isFavorite} onChange={(e)=>{setisFavorite(e.target.checked)}}/><span className='ml-1'>Favourite </span> <br /><br />
        <button className='w-full rounded bg-blue-600 text-white py-3 px-4 text-xl'>Add Contact</button>
      </form>
      <div className='py-3 px-6 w-[49%] '>
        <h1 className='text-2xl font-semibold mb-5'>Contact List</h1>
        <div>
          {
            allUsers.map(function(elem,i){
              return <div key={i} className='w-full bg-white rounded p-5  text-left  mb-4 '>
                       <h1 className=' text-xl font-semibold mb-1'>{elem.name}</h1>
                       <h3 className='text-sm font-normal'>Company: {elem.company}</h3>
                       <h3 className='text-sm font-normal'>Phone: {elem.phoneNumber}</h3>
                       <div className='flex justify-between mt-2'>
                           { elem.isFavorite ? <div  className='p-2 px-4 text-white bg-orange-500  rounded-3xl text-sm mt-3'>Favourite</div> : <div></div> }
                           <button onClick={()=>{deleteHandler(i)}} className='py-2 px-3 text-white bg-red-500  rounded text-sm mt-3'>Delete</button>
                       </div>

                     </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
