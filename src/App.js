import logo from './logo.svg';
import './App.css';
import Headers from './Components/Header';
import { useState } from 'react';
import Product from './Components/product';
import Video from './Components/Rcomponents/Video';
import Members from './Components/members';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Fields from './Components/Rcomponents/fields';
import GetAxios from './Components/Rcomponents/Getaxios';

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
//   function update(e){
//     // e.stopPropagation();
//     setName(name+1)
//     // setName(name-1)
//   }
//   function dec (){
//     setName(name -1 )
//   }
//   console.log("+")
//   return(
//     <div>
//        <h1>{name}</h1>
//       <button onClick={update}>update</button>
//       <button onClick={dec}>dec</button>
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

// if else condition in react
// function App (){
// //   function getData(){
// //     alert("pass function from props")
// //   }
//   return(
//     <div>
//       <>
//       Ghytrrddd  
//       </>
// <Headers data={getData} />
// <Headers data={getData} />
// <Headers data={getData} />

// <Members data={getData} />
//     </div>
//   )
// }
function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("")
  // const [data,setData] = useState([]);

  // const addData=()=>{
  //  setData([...data, {name, email}]);
  //  setName("");
  //  setEmail("");
  // }

  return (
    // <div>
    //   <Headers />
    //   <div className='form'>
    //     <Stack direction="row" spacing={2}>
    //       <TextField value={name} 
    //         onChange={(e)=>setName(e.target.value)}
    //         id="outlined-basic" label="Name" variant="outlined" />
    //       <TextField value={email}
    //       onChange={(e)=>setEmail(e.target.value)}
    //        id="outlined-basic" label="Email" variant="outlined" />
    //       <Button onClick={addData} variant="contained" color="success"><AddIcon /></Button>
    //     </Stack>
    //   </div>

    //   {/* Data */}
    //     <div className='data'>
    //        <div className='data-val'>
    //            <h4>Name</h4>
    //            <h4>Email</h4>
    //            <h4>Remove</h4>
    //         </div>
    //         {
    //           data.map((element,index)=>{
    //             return(
    //               <Fields key={index} name={element.name} email={element.email} index={index} />
    //           )
    //           })
    //         }
    //      </div>
    // </div>
    <div>
      <h1>hwhwh</h1>
      {/* <Product /> */}
      <Headers />
      <GetAxios />

    </div>  
  )
}
export default App;
