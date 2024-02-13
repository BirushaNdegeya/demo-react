import React, { useState } from "react";

const Home = () => {
   let count = 0;

   const handleIncrement = () => {
      count += 1;
      console.log(count);
   }

   const handleDecrement = () => {
      count -= 1;
      console.log(count);
   }

   return (
      <>
         <h1>Count : {count}</h1>
         <button onClick={handleIncrement}>Increment</button>
         <button onClick={handleDecrement}>Decrement</button>
      </>
   );
};

export default Home;