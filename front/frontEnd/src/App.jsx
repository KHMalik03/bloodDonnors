import Layout from "./Layout"
import DonnorDisplay from "./DonnorsDisplay"
import DonnorUpdate from "./DonnorUpdate"
import DonnorCreate from "./DonnorCreate"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >

          <Route index element={<DonnorDisplay />} />
          <Route path="/:id/update" element={<DonnorUpdate />} />
          <Route path="/create" element={<DonnorCreate />} />
          
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
