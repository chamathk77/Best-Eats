// import React from "react";


// function App() {
//   return (
//     <div>
//       <HomePage/>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Screens/HomePage/HomePage";
import AdminLogin from "./Screens/AdminLogin/AdminLogin";
// import About from './About';
// import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/adminLogin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
};

export default App;

