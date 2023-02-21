import React from "react";
import './product.css'


function Product() {
function getformData(e)
{
    e.preventDefault()
}
    return (
        <div >
            <form onSubmit={getformData}>
                <input type="text" placeholder="enter name" />
                <select name="" id="">
                    <option>Select option</option>
                    <option>bb</option>
                    <option>cc</option>
                </select> <br/> <br />
                <input type="text" /> 
                <button onClick={()=>{}}>add product</button>
            </form>
        </div>
    )
}
export default Product