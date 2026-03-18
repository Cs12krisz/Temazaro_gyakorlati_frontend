
import { Route, Routes } from 'react-router-dom'
import Hangszerek from './pages/Hangszerek'
import './App.css'
import UjHangszer from './pages/UjHangszer'
import EgyHangszer from './pages/EgyHangszer'

function App() {
  return(
    <Routes>
      <Route index element={<Hangszerek/>}></Route>
      <Route path='/ujhangszer' element={<UjHangszer/>}></Route>
      <Route path='/hangszer/:id' element={<EgyHangszer/>}></Route>
    </Routes>
  )
  
}

export default App
