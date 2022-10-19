import Login from "./components/login/Login";

import './components/General.css'
import { AuthProvider } from "./context/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup/SignUp";

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Login/>}/>  
            <Route path='/create-accout' element={<SignUp/>}/>  
          </Routes>
        </div>
      </BrowserRouter>
      
    </AuthProvider>
    
  );
}

export default App;
