import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'

const SideBar = () => {
  return (
    <>
    
    <aside className='bg-primary-t text-dark  d-flex flex-column justify-content-center align-items-center'  >
    <img width={'100px'} height={'100px'} className='rounded-circle center m-3' src="https://cdn3.iconfinder.com/data/icons/user-group-black/100/user-upload-512.png" alt="" />
    <Profile/>
    
        <br />
        
        <Link to={'/campaign'}  className="text-black fw-semibold" style={{ textDecoration: "none" }}>Campaign
        </Link><br />
        <Link to={'/lead'} className="text-black fw-semibold" style={{ textDecoration: "none" }}>Lead
        </Link><br />
        <Link to={'/followup'} className="text-black fw-semibold" style={{ textDecoration: "none" }}>Follow-up
        </Link><br />
        <Link to={'/customer'} className="text-black fw-semibold" style={{ textDecoration: "none" }}>Customer
        </Link>

    </aside>
    </>
  )
}

export default SideBar