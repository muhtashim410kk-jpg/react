 import { useState } from "react";


 function App(){

    const [count,setcount]=useState(0)

    return(
                
           <div>
              <button onClick={()=>setcount(count+1)} >Increment</button>
              <h1>{count}</h1>
              {
               count==0? <h1>muhtashim0</h1>
               :count==1? <h1>muhtashim1</h1>
               :count==2? <h1>muhtashim2</h1>
               :count==3? <h1>muhtashim3</h1>
               :count==4? <h1>muhtashim4</h1>
               :null
                             
              }

           </div>


    )

 }

 export default App