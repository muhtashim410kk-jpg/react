import { useState } from "react"


function Handlinginput(){
        
          const [name,setname]= useState("");
          const [email,setemail] = useState(""); 
          const [Password,setpassword]=useState(""); 
   
 return(

         <div style={{backgroundColor:"gray"}}   > 
                     <h1 style={{textAlign:"center"}} >SIMPLE FORM</h1>
                      
 <input  style={{margin:"12px", marginLeft:"800px"  }} onChange={(event)=> setname(event.target.value)} type="text" placeholder="Enterusername" id="username" value={name} />Username
            <label htmlFor="username"></label>
      <br />
<input   style={{margin:"12px" , marginLeft:"800px" }} onChange={(event)=> setemail(event.target.value)} type="text" placeholder="Enteremail" id="Email" value={email} />Email
            <label htmlFor="Email"></label>

 <input   style={{margin:"12px" , marginLeft:"800px" }} onChange={(event)=> setpassword(event.target.value)} type="text" placeholder="Enterpassword" id="Password" value={Password} />Password
            <label htmlFor="Password"></label>       

  <h1  style={{marginLeft:"800px"}} >  Name:  {name}   </h1>          
  <h1  style={{marginLeft:"800px"}} >   Email:  {email}   </h1> 
  <h1  style={{marginLeft:"800px"}} >   Password:  {Password}   </h1>    

           <button style={{marginLeft:"870px" , backgroundColor:"white", padding:"12px" }} >SUBMIT FORM</button>      

         </div>
        

 )





}
export default Handlinginput