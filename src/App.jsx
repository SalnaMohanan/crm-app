import './bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
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


function App() {

  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
        <Route path='/campaign' element={<Campaign/>}/>
        <Route path='/campadd' element={<Add/>}/>
        <Route path='/campview' element={<View/>}/>
        <Route path='/campedit' element={<Edit/>}/>
        <Route path='/lead' element={<Lead/>}/>
        <Route path='/leadadd' element={<Leadadd/>}/>
        <Route path='/leadview' element={<Leadview/>}/>
        <Route path='/leadedit' element={<Leadedit/>}/>
        <Route path='/followup' element={<Followup/>}/>
        <Route path='/followupadd' element={<Followadd/>}/>
        <Route path='/followupview' element={<Followview/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/customeradd' element={<Customeradd/>}/>
        <Route path='/customeredit' element={<Customeredit/>}/>
        <Route path='/customerview' element={<Customerview/>}/>

      </Routes>
    </>
  )
}

export default App
