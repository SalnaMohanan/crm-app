import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/icon.png'

const Footer = () => {
  return (
    
    <div  style={{height:'300px'}} className='mt-5 container w-100 '>
        <div className='d-flex justify-content-between'>
             {/* intro */}
             <div style={{height:'400px'}}>
                <h5> <img src={icon} alt=""  style={{width:'30px'}}/>
                 crm</h5>
                <p>Lorem, ipsum dolor sit amet  adipisicing . <br/> Sapiente dolores dignissimos, quibusdam <br /> est voluptates maxime voluptatibus, </p>
            </div>
            {/* links */}
            <div className="d-flex flex-column">
                <h5>Likes</h5>
                <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home page</Link>
                <Link to={'/login'} style={{textDecoration:'none'}}>login page</Link>


            </div>
            {/* guide */}
            <div className="d-flex flex-column">
                <h5>Guides</h5>
                <a href="" style={{textDecoration:'none' }}>Rect</a>
                <a href="" style={{textDecoration:'none'}}>Rect Bootstrap</a>
                <a href="" style={{textDecoration:'none'}}>Rect Router</a>

            </div>
            {/* contacts */}

            <div className="d-flex flex-column">
                <h5>Contacts us</h5>
                <div className='d-flex '>
                    <input type="text" placeholder="enter your name "  className=" form-control me-2"/>
                    <button className="btn btn-info"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <a href="" style={{textDecoration:'none'}}><i class="fa-brands fa-twitter"></i></a>
                    <a href="" style={{textDecoration:'none'}}><i class="fa-brands fa-linkedin-in"></i></a>

                    <a href="" style={{textDecoration:'none'}}><i class="fa-brands fa-facebook"></i></a>
                    <a href="" style={{textDecoration:'none'}}><i class="fa-brands fa-instagram"></i></a>
                    <a href="" style={{textDecoration:'none'}}><i class="fa-solid fa-phone"></i></a>

                </div>

            </div>


        </div>
    </div>
  )
}

export default Footer