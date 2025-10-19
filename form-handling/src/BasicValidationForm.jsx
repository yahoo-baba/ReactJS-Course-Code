
import { useState } from "react";

function BasicValidationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name || !email){
      setError("Please fill all fields!");
    }else{
      setError("")
      console.log("Form Submitted : ", {name, email})
      alert("Form Submitted Successfully!");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Basic Validation Form</h2>

      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input 
        type="email" 
        placeholder="Enter your email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      {error && <p style={{ color: "red"}}>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );

}

export default BasicValidationForm