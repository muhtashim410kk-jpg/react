
function Jsxhandling() {

    const muhtashim = "2026";
    let x = 10;
    let y = 20;

    return (

        <div>

            <h1>Learning JSX  {muhtashim}  </h1>
            {/* to jsx me hume aise getelemetbyid ka inner text ye krdo bhi ni krna prta direct variable bana kr use krlo */}
            <h1> {10 + 30 + 40}  </h1>
            <h2> {x * y}     </h2>
            {/* or isme hum direct button bana kr kr skty hain function run hume get
 element by idni banana pre ga or na alag se function */}

             <button onClick={()=>alert("Danger is ahead")} >Alert </button> 
          





        </div>

    )


}

export default Jsxhandling
