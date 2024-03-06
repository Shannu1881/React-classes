import React, { useState } from 'react';

function Class1(){

  const [count, setCount] = useState(0);

  var Increment = () =>{
    setCount(count + 5)
  }

  var Decrement = () =>{
    setCount( count - 5);
  }

  return(
    <>
      <p> {count} </p>

      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default Class1;