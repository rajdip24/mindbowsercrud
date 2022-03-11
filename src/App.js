import { Navigate, Routes } from "react-router";
import { BrowserRouter,Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import UpdateUser from "./components/Update";
import Update from "./components/Update";
// To handle invalid routing by user
function App() {
  return (
    <BrowserRouter> 
      <Navbar/>
      <Routes>
      {/* <Route exact path="/" element={<CodeForInterview/>}/> */}
      <Route exact path="/all" element={<AllUsers/>}/>
      <Route exact path="/add" element={<AddUser/>}/>
      <Route path="/404" element={<NotFound/>}/>
      <Route path="/update/:id" element={<UpdateUser/>}/>
      <Route path="*" element={<Navigate replace to="/404" />} />
      
      </Routes>
    </BrowserRouter>

  );
}

export default App;
// npm run json-server
// concurrently -we can use 2 commands at a time in terminal
// to start the server write npm run dev because we used the concurrent to store the data
// Instead of one server is off and another is on with the help of it we can use it to run both commands