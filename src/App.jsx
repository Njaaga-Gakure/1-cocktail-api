import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Navbar } from "./components"
import { Home, About, SingleCocktail, Error} from "./pages"

function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Error />} />
      <Route path='/cocktail/:id' element={<SingleCocktail />} />
    </Routes>
   </Router>
  )
}

export default App
