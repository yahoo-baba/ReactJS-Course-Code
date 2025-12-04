import { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"
const Home = lazy(() => import("./Home"))
const About = lazy(() => import("./About"))
const Contact = lazy(() => import("./Contact"))
const Products = lazy(() => import("./Products"))
const Phone = lazy(() => import("./Phone"))
const Laptop = lazy(() => import("./Laptop"))
// import Home from "./Home"
// import About from "./About"
// import Contact from "./Contact"
// import Products from "./Products"
// import Phone from "./Phone"
// import Laptop from "./Laptop"

function App() {

  function User(){
    console.log(useParams())
    const { id } = useParams()
    return <h2>User Profile for ID: {id}</h2>
  }

  function NotFound(){
    return <h2>404 - Page Not Found</h2>
  }

  return (
    <BrowserRouter>
      <h1>React Router Example</h1>

      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> | 
        <Link to="/user/10">User</Link> | 
        <Link to="/products">Products</Link> 
      </nav>

      <Suspense fallback={<h2>Loading Page...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/products" element={<Products />}>
              <Route path="phone" element={<Phone />} />
              <Route path="laptop" element={<Laptop />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App



