import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'


const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className='d-flex justify-content-evenly'>
      <h5 className='text-warning'>Profile</h5>
      <button onClick={()=>setOpen(!open)} className='btn '><i className='fa-solid fa-chevron-down'></i></button>
    </div>
    <Collapse in={open}>
        <div  id="example-collapse-text" className='row container-fluid align-itmes-center justify-content-center shadow p-2 rounded'>
          <label className='text-center' >
            <input type="file" style={{display:'none'}} />
                     </label>
         <div className='mb-2 w-100'>
          <input type="text" placeholder='user Contact' className='form-control' />
         </div>
         <div className='mb-2 w-100'>
          <input type="text" placeholder='User email' className='form-control' />
         </div>
         <div className='d-grid w-100'>
          <button className='btn btn-warning'>Update Profile</button>
         </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile