import Login from "./components/login/Login";

import './components/General.css'
import { AuthProvider } from "./context/Auth";

function App() {
  return (
    
    <AuthProvider>
      <div className="App">
        <Login/>
      </div>
    </AuthProvider>
    
  );
}

export default App;
