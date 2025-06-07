import axios from "axios";
import { useState } from "react";
const Insert=()=>{
  const[input,setInput]=useState({});
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(Values=>({...Values,[name]:value}))
    console.log(input)
  }
  const handleSubmit=async()=>{
    // console.log(input)
    let api="http://localhost:3000/student";
    const response=await axios.post(api,input);
    console.log(response.data)
    alert("Data Inserted")
  }

  return(
    <>
     <h3>Employee Records!!</h3>
    Employee name: <input type="text" name="name"  onChange={handleInput}/><br/><br/>
    Employee Number: <input type="text" name="number"  onChange={handleInput}/><br/><br/>
    Enter Designation: <input type="text" name="designation"  onChange={handleInput}/><br/><br/>
    Enter City: <input type="text" name="city"  onChange={handleInput}/><br/><br/>
    <button onClick={handleSubmit}>Save!!!</button>
    </>
  )
}
export default Insert;