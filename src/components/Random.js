import React from 'react'
//data that we get as argument in this random function is props.props will a object .you easy get value by
 //destructuring

function Random({username ,isStatus}) {
  console.log(username);
  console.log(isStatus);
  // what ever you write outside of return it is javascript file
  // child only get data while sharing from parent through props .we place props as an argument of child function
  //props is an object type 
  return (
    <><b>Random Component</b>&nbsp;
    {/* {username?'Data from parent is :':'' } this command is the terinary operator ,
    Logic text = 'data from parent is' only have to when username has any value other than is not want to show */}
    {
      username?
      <span>
        -Data from parent is : {username} and its status is {isStatus}
      </span>:''
    }
    </>
  )
}

export default Random