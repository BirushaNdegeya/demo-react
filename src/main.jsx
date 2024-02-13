import React from "react";
import ReactDOM from 'react-dom/client';
import Home, { Button } from "./Home";

const App = () => {
   return (
      <React.Fragment>
         <Home />
         <Button />
      </React.Fragment>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);