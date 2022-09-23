import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
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
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/account' element={<Account />}></Route>
      </Routes>
    </div>
  );
}

export default App;
