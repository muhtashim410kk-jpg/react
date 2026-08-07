// import { useState } from "react";

// function Useffect(){

//   const [counter,setcounter]=useState(0)

//   function oncecall(){
//     console.log("muhtashim");
    
//   }

//   oncecall();  

// return(

//   <div>
//     {/* so jb bhi hum counter pr click kr rahe hain to ye function again and again call ho raha ha
//     yani agar function ma koi zyda code hota ya hum zyda chezein kr rahe hote to pehle wo function
//     bhi call hona tha sara code run hona tha to performance low ho jani thi to hum chahte hain ke function
//     aik bari call ho to uske lia hum useeffect ka use krein ge   agar hum dependency array ko khali chor dein ge
//     to aik bar run hoga or agar usme state ki value dalien ge to tb run hoga jb state change hogi just tb
//     function run hoga */}
//              <button onClick={()=>setcounter(counter+1)} >Counter:{counter}</button>
//         <h1>Muhtashim</h1>

//   </div>
// )




// }
 
// export default Useffect



import { useEffect, useState } from "react";

function Useffect(){

  const [counter,setcounter]=useState(0)
  const [data,setdata]=useState(0)

  useEffect(()=>{


 oncecall();
// ab humne useeffect ki dependancy array may data dala ha to ab function ki call data pr depend kre gi
// jb data pr click hoga function again and again call hoga but counter ko humne ni dala to us pr click
// se call ni hoga


  },[data])

  function oncecall(){
    console.log("muhtashim");
    
  }
 

return(

  <div>
             <button onClick={()=>setdata(data+1)} >Data:{data}</button>
             <button onClick={()=>setcounter(counter+1)} >Counter:{counter}</button>
        <h1>Muhtashim</h1>

  </div>
)




}
 
export default Useffect