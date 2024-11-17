import React, {useState} from 'react'
// import { SiMetrodemadrid } from 'react-icons/si';


const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [empName, setEmpName] = useState();
    const handleSubmit = ()=>{
        console.log(email,password, empName);
        
    }
  return (
    <>
    <h2>Register</h2>
    <form>
    <label>Email</label><br/>
    <input type='email' name='email' value={email} onChange={e=>setEmail(e.target.value)}/><br/>
    <label>Password</label><br/>
    <input type='password' name='password' value={password} onChange={e=>setPassword(e.target.value)}/><br/>
    <label>Employee Name</label><br/>
    <input type='text' name='empName' value={empName} onChange={e=>setEmpName(e.target.value)}/><br/>
    <button onClick={handleSubmit}> Register </button>
    </form>
      
    </>
  )
}

export default Register
