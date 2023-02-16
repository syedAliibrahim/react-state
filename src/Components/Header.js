import React from "react";

function Headers(prophh){
    return(
        <div>
            <h1>pass function from props</h1>
            <button onClick={()=>prophh.data()}>call data function</button>
            </div>
    )
}
export default Headers