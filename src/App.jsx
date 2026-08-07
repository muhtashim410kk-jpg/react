import { useState } from "react"
import Clock from "./clock"


   function App(){
 
            const [color,setcolor]=useState("green") 

        return(
            
          <div>

            <h1 style={{backgroundColor:"gray",textAlign:"center"}}  >Digital clock in React js</h1>
             
            <select  style={{marginLeft:"900px",padding:"10px"}}    onChange={(event)=>setcolor(event.target.value)} >
   
                <option   value="red" >RED</option>
                <option value="blue" >Blue</option>
                <option value="green">Green</option>
                <option value="orange">Orange</option>

            </select>

             <Clock  color={color} />
          </div>
        )
   

   }

   export default App