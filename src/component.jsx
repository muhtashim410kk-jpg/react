import { useState } from "react";

function Counter(){

       const [count,setcount] = useState(0);
       const [decrease,setdecrease]=useState(10);
       const [fruit,setfruit] = useState("Apple")
       function add(){
          setcount(count+1)
       }
        
       function decreament(){
          setdecrease(decrease-1)
       }

       function changefruitname(){
          setfruit("Banana")
       }
       
 return(

     <div>
           <h1> Counter : {count}     </h1>
           <h1>Reverse Counter {decrease}</h1>
           <h1>Fruit : {fruit}</h1>
           <button  onClick={add}  >click to add</button>
           <button onClick={decreament}   > Click to remove </button>
           <button onClick={changefruitname}  >Click to change Fruit</button>

     </div>

 )


}

export default Counter
