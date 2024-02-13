import React, { useState } from "react";

const Home = () => {
   const [count, setCount] = useState(0);

   const handleIncrement = () => {
      setCount(count + 1);
   }

   const handleDecrement = () => {
      setCount(count - 1);
   }

   return (
      <>
         <h1>Count : {count}</h1>
         <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
         </div>
      </>
   );
};

export default Home;