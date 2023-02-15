import React from "react";

function Product(props){
    console.log(props)
    return(
        <div >
            <h1> {props.name}</h1>
            <h1>age {props.email}</h1>
            
            </div>
    )
}
export default Product