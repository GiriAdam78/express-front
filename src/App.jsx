import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './HomePage'
import ListGudang from './List'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/list' element={ListGudang}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
