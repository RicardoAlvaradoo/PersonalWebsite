
import  {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact.jsx"
import Work from "./pages/Work"
import Resume from "./pages/Work"

function App(){


return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/Work" element={<Work />}/>
      <Route path="/Resume" element={<Resume />}/>
      <Route path="/Contact" element={<Contact/>}/>
    
      
     </Routes>
    </BrowserRouter>
)
}
export default App;