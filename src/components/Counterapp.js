import { useState } from "react";
    //destruturing props and getting the values 
//onclikedAction is the incrementing function ,counterIncrementedvalue this the updated value of counter,
//counterDecrementedValue this the decrementing function , counterResetValue this the reset function 
function Counterapp({onclickedAction,counterIncrementedvalue ,counterDecrementedValue ,counterResetValue}) {
    //////////// javascript code ////////////////////

  return (
    <div ><h2 className='text-info mt-3 text-center'>Counterapp</h2>
    <div className='d-flex align-items-center flex-column'>
                                      {/*this is the updated value of counter while clicking each button .this 
                                      updated passing changes in setcounter function =which is the function 
                                      to updated state  */}
        <h3 className='fs-1'>{counterIncrementedvalue}</h3>
        <div >
        {/* calling each function during onclick event */}
            <button onClick={onclickedAction} className="btn btn-primary">Increment</button>&nbsp;&nbsp;
            <button onClick={counterResetValue} className="btn btn-success">Reset</button>&nbsp;&nbsp;
            <button onClick={counterDecrementedValue}  className="btn btn-danger">Decrement</button>

        </div>
       
    </div>
    </div>
    
  )
}

export default Counterapp