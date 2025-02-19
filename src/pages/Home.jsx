import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import homegif from '../assets/homegif.gif'
import crm1 from '../assets/crm1.svg'
import crm2 from '../assets/crm2.svg'
import crm3 from '../assets/crm3.svg'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Header/>
    <h1 style={{fontSize:'70px',}} className='text-center m-5'>Small Business CRM App</h1>
      <div style={{width:'100%',height:"100vh" }}>
        <div className='row d-flex justify-content-center align-items-center m-5'>
          <div className='col-lg-6 '>
          <p style={{fontSize:'20px'}}> At every phase of your business, firsts are always special: your first business idea, your very first customer, the first paycheck you received, and so on. Along those lines, let us introduce you to Bigin, your business's first CRM solution. It's everything your small business needs—simple to use, minimal by design, and affordable for businesses that are just starting out on their path to growth and success.</p>
          <Link to={'/login'} className='btn btn-warning'>START TO EXPLORE</Link>

          </div>
          <div className='col-lg-6'>
            <img src={homegif} alt="no img" width={'500px'}/>
          </div>
        </div>

        {/* sub section */}
      <h3 className='m-5 text-center'>A Sales CRM your Team will Love</h3>
      <div style={{width:'100%'}} className='row p-5 d-flex justify-content-center align-items-center'>
        <div className='col-md-4 col-12'>
          <Card style={{ width: '18rem',height:'350px' }}>
            <Card.Img height={'160px'}  variant="top" src={crm1} />
            <Card.Body>
            <Card.Title>Easy to Use CRM</Card.Title>
            <Card.Text>
              Sales CRM is built to be easy to use, even for CRM beginners.Just sign up and get going!
            </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-4 col-12'>
          <Card style={{ width: '18rem' ,height:'350px' }}>
            <Card.Img height={'160px'} variant="top" src={crm2} />
            <Card.Body>
            <Card.Title>Expert Help</Card.Title>
            <Card.Text>
              CRM offers FREE business expertise to help you make the most of it with timely support to address any issues you may have.
            </Card.Text>
            </Card.Body>
          </Card>
        </div>


        <div className='col-md-4 col-12'>
          <Card style={{ width: '18rem' ,height:'350px' }}>
      <Card.Img height={'160px'}  variant="top" src={crm3} />
      <Card.Body>
        <Card.Title>Secure Technology</Card.Title>
        <Card.Text>
        Sales CRM is built on a solid
technology stack, so your data is
in good hands - safe & available
at all times.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>
        <hr style={{ border: "2ox solid #ddd", margin: "20px 0", }} />

        <Footer/>   
   
     </div>
 
    </>
  )
}

export default Home