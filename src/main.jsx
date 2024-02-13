import React from 'react';
import ReactDOM from 'react-dom';

function Main () {
   return (
      <main>
         <h1>Hello Birusha</h1>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo autem perferendis sequi eveniet quas quaerat blanditiis fugiat, ducimus dicta dolores. Nemo corrupti cum minus quas alias ipsa praesentium voluptate laudantium!</p>
         <button>Contact Me</button>
      </main>
   );
};

ReactDOM.render(Main(), document.getElementById('root'));