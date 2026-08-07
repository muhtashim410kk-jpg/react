import { useEffect, useState } from "react"


function Clock({color}){

        const [time,settime]= useState()

      useEffect(()=>{

         setInterval(() => {
            
             settime(new Date().toLocaleTimeString())

         }, 1000);


      },[])

    return(
  
        <h1 style={{color:color,backgroundColor:"black",width:"200px",marginLeft:"850px"}}  >{time}</h1>
         

    )

}

export default Clock