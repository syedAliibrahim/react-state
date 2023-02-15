import logo from './logo.svg';
import './App.css';
import Headers from './Components/Header';
import { useState } from 'react';
import Product from './Components/product';
import Video from './Components/Rcomponents/Video';

// function App() {

  //
  //JSX
  // const name=<h1>ali</h1>
  // const age=<h1>454</h1>
  //  const email=<h1>ali@kjkj.com</h1>
  //  const user =(
  //   <div>
  //     {name}{age}{email}
  //   </div>
  //  )

  // return (
  //   <div className="jsx">
// {/* {user}
// {user} */}
//       {/* <Headers/>
// //     </div>
// //   );
// // } */}
// its just javascript function
// const GetName=()=>{
//   return"javascript function"
// }
// react component
// const ReactComponent =()=>{
//   return <h3> ReactComponent</h3>
// }

//click event 
// function App (){
//   let data="salman"
//   function apple (){
//     data="dff";
//     alert(data)
//   }
//   console.log("---")
//   return(
//     <div>
//   <h1>{data}</h1>
//   <button onClick={apple}>mee</button>
//   </div>
//  )
// }


/////state 
// function App(){
//   const [name,setName]=useState(0)
//   function update(){
//     setName(name+1)
//     // setName(name-1)
//   }
//   console.log("+")
//   return(
//     <div>
//        <h1>{name}</h1>
//       <button onClick={update}>update</button>
//       {/* <button onClick={update}>-update</button> */}
//       </div>
//   )
// }

/////props
// function App (){
//   // const [sname,setSname]=useState("SSS")
//   return(
//     <div>
//       <Product name="asd" email="as@gmail" />
//       <Product name="agggsd" email="as@gmail"/>


//       {/* <Product name={sname} />
//       <button onClick={()=>{setSname("Zzz")}}>props UPDATE DInimick</button> */}
//     </div>
//   )

////// get input box value
// function App (){
//   const [data,setData]=useState(null)
//   const [print,setPrint]=useState(false)
//   function getData(value){
//    console.log(value.target.value)
//    setData(value.target.value)
//   }
//   return(
//     <div>
//    <h1>get input box</h1>
//    <input type="" onChange={getData}/>
//    <h2>{data}</h2>
//    <button onClick={()=>setPrint(true)}>print Data</button>
//    <h1>{print?
//     <h2>{data}</h2>:null
//   }</h1>
//     </div>
//   )
// }
function App (){
  return(
    <div>
      <>
      Ghytrrddd
      </>
  
<Video />

    </div>
  )
}
export default App;
