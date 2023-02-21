import { useEffect, useState } from "react"

function Headers(){
    // Conditionally Run useEffect Hook In React 
    let [cont,setCont ]=useState(0)

    // useEffect(() =>{
    //     console.log("hhhh")
    // },[])

    useEffect(() =>{
        console.log("hhhh")
    },[cont])
    return(
   <div className="header">

    <h1>Reading keeping {cont}</h1>
    <button onClick={()=>setCont(cont +1)}>call </button>
   </div>

        // <div>
        //     <h1>pass function from props</h1>
        //     <button onClick={()=>prophh.data()}>call data function</button>
        //     </div>
    )
}
export default Headers