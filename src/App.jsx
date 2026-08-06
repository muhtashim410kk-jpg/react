import { useState } from "react"

   function Checkbox(){

       const [skills,setskills]=useState([]);    
       
      function handleskills (Event){

           console.log(Event.target.value,Event.target.checked)
             
           if(Event.target.checked){
             
               setskills([...skills,Event.target.value])
           }else{
            setskills(skills.filter((item)=>item!=Event.target.value))
           }
       }

     return(

        <div>
                 <h1>Select your skills</h1>
    <input  onChange={handleskills}  type="checkbox" id="php" value="Php"  /> PHP   
    <label htmlFor="php"></label> 
    <br />
    <input    onChange={handleskills}  type="checkbox" id="java" value="Java" /> Java
    <label htmlFor="java"></label>
    <br />  
    <input   onChange={handleskills}  type="checkbox" id="rubi" value="Rubi"  />Rubi 
    <label htmlFor="rubi"></label>
              
              <h1> {skills.toString()}  </h1>

        </div>

     )


   }

   export default Checkbox