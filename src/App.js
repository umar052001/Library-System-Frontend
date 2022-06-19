import { Navbar } from "./components/Navbar";
import { Navbar2 } from "./components/Navbar2";
import { Header } from "./components/Header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import Admin from "./components/admin/Admin";
import Student from "./components/student/Student";
import Issue from "./components/admin/Issue";
function App() {
  const [SignIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  const [student, setStudent] = useState([])
  const [reqBook, setReqBook] = useState("")
  console.log(student)
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <div>
      {isSignedIn ? <Navbar2 setIsSignedIn={setIsSignedIn} /> : <Navbar />}

      <Routes>
        <Route path="/adminpanel" element={<Admin />} />
        <Route path="/studentpanel" element={<Student setStudent={setStudent} setReqBook={setReqBook} SignIn={SignIn}/>} />
        <Route path="/issuebooks" element={<Issue student={student} reqBook={reqBook}/>} />
        <Route
          path="/admin"
          element={
            isSignedIn ? (
              <Navigate to="/adminpanel" />
            ) : (
              <Header
                user="Admin"
                setSignIn={setSignIn}
                SignIn={SignIn}
                setIsSignedIn={setIsSignedIn}
              />
            )
          }
        />
        <Route
          path="/"
          element={
            isSignedIn ? (
              <Navigate to="/studentpanel" />
            ) : (
              <Header
                user="Student"
                setSignIn={setSignIn}
                SignIn={SignIn}
                setIsSignedIn={setIsSignedIn}
              />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
