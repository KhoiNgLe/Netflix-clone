import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        
      </AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}/>
        <Route path='/login' element={<ProtectedRoute><Login /></ProtectedRoute>}></Route>
        <Route path='/signup' element={<ProtectedRoute><Signup /></ProtectedRoute>}></Route>
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
