import './bootstrap.min.css'
import './App.css'
import Home from './pages/Home'
import AdminDashboard from './pages/AdminDashboard'
import UserDashboard from './pages/UserDashboard'

import { Route, Routes } from 'react-router-dom'
import Campaign from './pages/Campaign'
import Add from './components/campaign/Add'
import View from './components/campaign/View'
import Edit from './components/campaign/Edit'
import Lead from './pages/Lead'
import Leadadd from './components/lead/Leadadd'
import Leadview from './components/lead/Leadview'
import Leadedit from './components/lead/Leadedit'
import Followadd from './components/followup/Followadd'
import Followup from './pages/Followup'
import Followview from './components/followup/Followview'
import Customer from './pages/Customer'
import Customeradd from './components/customer/Customeradd'
import Customeredit from './components/customer/Customeredit'
import Customerview from './components/customer/Customerview'
import FeaturesPricing from './components/FeaturesPricing'
import Contact from './components/Contact'
import Auth from './pages/Auth'


function App() {

  return (
    <>
      {/* <Header/> */}
<Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/features-pricing" element={<FeaturesPricing />} />

        <Route path='/admindashboard' element={<AdminDashboard insideadmin={true}/>}/>
        <Route path='/userdashboard' element={<UserDashboard />}/>

        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>

        <Route path='/campaign' element={<Campaign insideadmin={true}/>}/>
        <Route path="/user/campaign" element={<Campaign insideadmin={false} />}/> 

        <Route path='/lead' element={<Lead insideadmin={true}/>}/>
        <Route path="/user/lead" element={<Lead insideadmin={false}/>}/>

        <Route path='/followup' element={<Followup insideadmin={true}/>}/>
        <Route path='/user/followup' element={<Followup insideadmin={false}/>}/>

        <Route path='/customer' element={<Customer insideadmin={true}/>}/>
        <Route path='/user/customer' element={<Customer insideadmin={false}/>}/>

        <Route path='/campadd' element={<Add/>}/>

       


        <Route path="/campview/:id" element={<View insideadmin={true} />} />
<Route path="/campview/:id" element={<View insideadmin={false} />} />





        <Route path='/campedit/:id' element={<Edit insideadmin={true}/>}/>
        <Route path='/campedit/:id' element={<Edit insideadmin={false}/>}/>

        <Route path='/leadadd' element={<Leadadd/>}/>
        <Route path='/leadadd' element={<Leadadd/>}/>

        <Route path='/leadview' element={<Leadview insideadmin={true}/>}/>
        <Route path='/leadview' element={<Leadview/>}/>

        <Route path='/leadedit' element={<Leadedit/>}/>
        <Route path='/leadedit' element={<Leadedit/>}/>


        <Route path='/followupadd' element={<Followadd/>}/>
        <Route path='/followupview' element={<Followview insideadmin={true}/>}/>
        <Route path='/followupview' element={<Followview/>}/>

        
        <Route path='/customeradd' element={<Customeradd/>}/>
        <Route path='/customeredit' element={<Customeredit insideadmin={true}/>}/>
        <Route path='/user/customeredit' element={<Customeredit insideadmin={false}/>}/>

        <Route path='/customerview' element={<Customerview insideadmin={true}/>}/>
        <Route path='/user/customerview' element={<Customerview insideadmin={false}/>}/>

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
