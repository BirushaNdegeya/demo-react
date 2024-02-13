import React from "react";
import ReactDOM from 'react-dom/client';


const App = () => {
   return (
      <React.Fragment>
         <Home />
      </React.Fragment>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);