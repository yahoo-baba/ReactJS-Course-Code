import { useState } from "react";

function MultiInputForm() {
  const [formData, setFormData] = useState({
                                    name: "",
                                    email: "",
                                    age: ""
                                  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Multiple Input Form</h2>

      <input 
        name="name" 
        type="text" 
        placeholder="Name" 
        value={formData.name}
        onChange={handleChange}
      />
      <br />

      <input 
        name="email" 
        type="email" 
        placeholder="Email" 
        value={formData.email}
        onChange={handleChange}
      />
      <br />

      <input 
        name="age" 
        type="number" 
        placeholder="Age"
        value={formData.age}
        onChange={handleChange} 
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );

}

export default MultiInputForm