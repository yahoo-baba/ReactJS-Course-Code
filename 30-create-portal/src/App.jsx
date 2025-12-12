// import { createPortal } from "react-dom"
import { useState } from "react"
import Modal from "./Modal"
// import PortalTest from "./PortalTest"

function App() {
  const [open, setOpen] = useState(false)

  return (
    
     <div style={{padding:"30px"}}>
      <h1>App Component</h1>
      {/* <PortalTest /> */}
      {/* { createPortal(<h1>Portal</h1>, document.body)} */}

      <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
          <h2>Hello from Modal</h2>
          <p>This is a simple modal without context.</p>
      </Modal>
     </div>
    
  )
}

export default App
