
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './Login';
// import Registration from './SingleUser/Page/Registration';
// import './style.css'
// import NavBar from './NavBar';
// import User from './SingleUser/Page/User';
// function App() {
//   return (
//     <div className="App">

//       {/*  single User  */}
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/user" element={<User />} />

//         </Routes>

//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



// ------------------- Multiple User ---------------

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.css'
import Registration from './MultipleUser/Registration';
import User from './MultipleUser/User';
import NavBar from './NavBar';
import Login from './MultipleUser/Login';
import DaskBord from './MultipleUser/DaskBord';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dask" element={<DaskBord />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;