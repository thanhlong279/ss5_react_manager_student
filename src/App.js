import './App.css';
import React from "react"
import StudentListFunc from "./component/student/StudentListFunc";
import StudentCreate from "./component/student/StudentCreate";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentEditFunc from "./component/student/StudentEditFunc";


function App() {
    return (
        <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <div className="navbar-nav">
                            <NavLink to="/student" className="nav-link" activeClassName="active">Danh sách</NavLink>
                            <NavLink to="/create" className="nav-link" activeClassName="active">Thêm mới</NavLink>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/create" element={<StudentCreate />} />
                    <Route path="/student" element={<StudentListFunc />} />
                    <Route path="/edit/:id" element={<StudentEditFunc/>} />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}


export default App;
