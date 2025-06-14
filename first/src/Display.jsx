import { useState,useEffect } from "react";
import axios from "axios";
const Display=()=>{
  const[mydata,setMydata]=useState([]);
  const loadData=async()=>{
    let api="http://localhost:3000/student";
    const response=await axios.get(api)
    console.log(response.data);
    setMydata(response.data)
  }
  useEffect(()=>{
    loadData();
  },[])
  
  let sno=0;
  const ans=mydata.map((key)=>{
    sno++;
    return(
      <>
       <tr>
        <td>{sno}</td>
        <td>{key.name}</td>
        <td>{key.empno}</td>
        <td>{key.designation}</td>
        <td>{key.salary}</td>
        
       </tr>
      </>
    )
  })
    return(
        <>
          <h3>Our data</h3>
          <hr />
          <table border="1" width="500px">
            <tr>
              <th>Sno</th>
              <th>Name</th>
              <th>Empno</th>
              <th>Designation</th>
              <th>salary</th>
              
            </tr>
            {ans}
          </table>
        </>
    )
}
export default Display;