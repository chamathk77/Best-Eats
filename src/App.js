// import React from "react";

// function App() {
//   return (
//     <div>
//       <HomePage/>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Screens/HomePage/HomePage";
import AdminLogin from "./Screens/AdminLogin/AdminLogin";
import { Provider } from "react-redux";
import store from "../src/Redux/store/store";
// import About from './About';
// import Contact from './Contact';

import LoginPage from "./Screens/LogInScreen/LogInScreen";
import SignupPage from "./Screens/SignUpScreen/SignUpScreen";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/homepage" element={<HomePage />} />

          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/adminLogin" element={<AdminLogin />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
