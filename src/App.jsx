
   function Loopjsx(){
             
     let userdata =[

      {
        "Id":123,
        "Name":"muhtashim",
        "Class":"bs-it",
        "roll no":123

      },
         {
        "Id":123,
        "Name":"tooba",
        "Class":"bs-it",
        "roll no":123

      },
         {
        "Id":123,
        "Name":"anas",
        "Class":"bs-it",
        "roll no":123

      },
         {
        "Id":123,
        "Name":"asad",
        "Class":"bs-it",
        "roll no":123

      },



     ]     

    return(

   <div>

                <h1>LOOP with jsx Data</h1>
         <table border="1">

       <thead>

           <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Class</td>
            <td>Roll no</td>
            
           </tr>

       </thead>

       <tbody>

            {
              userdata.map((user)=>{

          return(
                   <tr>
            <td>{user.Id}</td>
            <td>{user.Name}</td>
            <td>{user.Class}</td>
            <td>{user["roll no"]}</td>
            
           </tr>
          )

              })
            }


       </tbody>


         </table>

     
   </div>        

    )

   }

   export default Loopjsx