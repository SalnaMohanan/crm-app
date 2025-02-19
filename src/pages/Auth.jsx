import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Auth = ({insideRegister}) => {

    // store user data link username email and p/w
    const [inputData,setInputData]=useState({
      username:'',email:'',password:''
     })
     console.log(inputData);
      
    //  register button cliked
  
    const handleRegister =(e)=>{
      e.preventDefault()
      console.log("Inside handleRegister");
      if(inputData.username && inputData.email && inputData.password){
        alert("make api call")
      }else{
        alert("Please fill the form completly")
      }
      
    }

  return (
    <> 
    <div className='container d-flex justify-content-center align-items-center vh-100 '>
      <div className='shadow card p-2 bg-dark ' style={{width:'400px'}}>
        <h5 className='text-center'>CRM</h5>
        <h6 className='text-center'> Sign {insideRegister?"up":"in"} to your Account</h6>
              {
                insideRegister &&
                  <FloatingLabel controlId="floatingUserName" label="UserName">
                  <Form.Control onChange={e=>setInputData({...inputData,username:e.target.value})} type="text" placeholder="Username" />
                </FloatingLabel>
              }
              <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3 mt-3"
      >
        <Form.Control onChange={e=>setInputData({...inputData,email:e.target.value})} type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control onChange={e=>setInputData({...inputData,password:e.target.value})} type="password" placeholder="Password" />
      </FloatingLabel>

      {
        insideRegister ?
        <div className='m-3'>
        <button onClick={handleRegister}  className='btn btn-warning mb-2'>Register</button>
        <p>Already A user? please click here to <Link to={'/login'} className='link-warning'>Login</Link></p>
        </div>
        :
        <div>
          <button className='btn btn-warning m-3 text-center'>Login</button>
          <p>Already A user? please click here to <Link to={'/register'} className='link-warning'>Register</Link></p>

        </div>
      }
            </div>
      </div>
    
</>
  )
}

export default Auth