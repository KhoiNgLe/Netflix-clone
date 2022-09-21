import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        
      </AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
