import React from "react";

function Members(prop){
    return(
        <div>
            <h1> members pass function from props</h1>
            <button onClick={()=>prop.data()}>call data function</button>
            </div>
    )
}
export default Members