
//Here why they used logo "import logo from './logo.svg';"  .coz this import logo we using this page,that why 
// imort statement assign in to a varible - logo
import logo from './logo.svg';
import './App.css'; // here you can't see any  varible , this one is a difference between them. (app.css entirly using this page not like a logo import (which using only in a particular situv))
import Random from './components/Random';
//imort class based component here 
import Output from './components/Output';
//import usestate 
import { useState } from 'react';
//import Counterapp component
import Counterapp from './components/Counterapp';


function App() { 
  //function based component
/////////////////////////////////////////////////////   js code   ///////////////////////////////////////////////////////////////////
//create a state
// sytax:  const [state-name,function-name to update the state] = useState(initial-value)
const [user,setUser] = useState('')
// console.log(user);
const resetUser = ()=>{
  // continal rendenring 
  if(user){
  alert(`username updated as ${user} `)

  }else{
    alert(`please enter valid input`)
  }
}
 
//counter state
const [count, setCount] = useState(6)
console.log(`This is count ${count}`);
//counter incrementing function that i pass to counter component 
const incrementCounter =()=>{
  console.log('incrementCounter function called');
  setCount(count+1)
}
//counter decrementing function that i pass to counter component 
const decrementCounter =()=>{
  console.log('decrementCounter function called');
  setCount(count-1)
}
//counter reseting function that i pass to counter component 

const resetCounter =()=>{
  console.log('decrementCounter function called');
  setCount(0)
}

//create a array 

const userDetails = [

{username:"max",age:12},
{username:"johb",age:22},
{username:"shahana",age:42},
{username:"tony",age:16},
{username:"athira",age:12},
{username:"lechu",age:12},
{username:"antony",age:52},
{username:"tome",age:13},
{username:"jerry",age:12},
{username:"aswin",age:32},
{username:"shamil",age:62},
{username:"menu",age:15},


]

////////////////////////////////// /////   inside return use html code ////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="container ">
    <h1 className="text-danger mt-4 text-center">ReactJs</h1>
    <h2>Components in React</h2>
    <ul >
      <li>Functional Based /stateless Components:<br />
      {/* sharing user data from parent (app.js) to child ( here it is random.js) */}

     Example:<Random username={user}  isStatus='true' />
                               {/* here why we don't using {} ,coz true is not a value in javascript */}
      </li>
      <li >Class Based /stateful Components:<br />
     Example:<Output />
      </li>
    </ul>
    <h5>State:Used to store data inside a Compoenets and it can be shared with other components as well </h5>
    <h3>React Hooks</h3>
    <ul>
      <li>UseState : To generate state inside functinal components</li>
    </ul>

    {/* Table from useDetails array */}
     
     <div className="text-center d-flex justify-content-center ">
      <table className='border w-50'>
        <thead className='border'>
          <tr >
            <th className='border'>No</th>
            <th className='border'>Username</th>
            <th className='border'>Age</th>
          </tr>
        </thead>
        <tbody >
         {
          // map( ) of javascript is much more suitable here .coz in map we also add index  value
          //usually after in call back function we {} to write the value or anything .. but here we used parathesis()
          //coz while using {} you have to return the value also .() much more easy .
          //map return array
         userDetails.map((item,index)=>(
          <tr className='border'>
            <td  className='border'>{index+1}</td>
          <td  className='border'>{item.username}</td>
          <td  className='border'>{item.age}</td>
          </tr>
         ))
        }
        </tbody>
      </table>
     </div>

    {/* State updation example */}
    <h4 className='text-center m-3'>State updation example</h4>
    <div className='d-flex justify-content-center border p-3 rounded'>
      {/* Here changed value of input field assign to user state using its updating function  */}
      <input onChange={(e=>setUser(e.target.value))} style={{'maxWidth':'30rem'}} type="text" className="form-control" placeholder='Enter your name here' />&nbsp;&nbsp;
      {/* while clicking the button alert user state value  */}
      <button onClick={resetUser} className="btn btn-primary">Submit</button>
    </div>
    {/* passing function from parent to child this function as state */}
    <Counterapp onclickedAction={incrementCounter} counterIncrementedvalue={count} counterDecrementedValue = {decrementCounter} counterResetValue={resetCounter} />
    </div>
  );
  }

export default App;
