import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FlightBookingForm from './FlightBookingForm'
import ShowTicket from './ShowTicket'
import BimanTicket from './BimanTicket'
import SalamAir from './SalamAir'
import AirArabia from './AirArabia'
import TurkishAir from './TurkishAir'
import IndiGo from './IndiGo'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<FlightBookingForm/>} />
      <Route path='/confirmation' element={<ShowTicket/>} />
      <Route path='/biman' element={<BimanTicket/>} />
      <Route path='/salam' element={<SalamAir/>} />
      <Route path='/airarabia' element={<AirArabia/>} />
      <Route path='/turkish' element={<TurkishAir/>} />
      <Route path='/indigo' element={<IndiGo/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
