import React, { useEffect } from "react";
import Navbar from "./Layouts/Navbar";
import Navbar2 from "./Layouts/Navbar2";
import NavbarSignedIn from "./Layouts/NavbarLoggedIn";
import Index from "./Routes/Index";
import Footer from "./Layouts/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import ForgotPassword from "./components/ForgotPassword";
import ConfirmPassword from "./components/ConfirmPassword";
import About from "./Routes/About";
import SchoolApplication from "./components/SchoolApplication";
import SchoolTransaction from "./components/SchoolTransaction";
import SchoolDashboard from "./components/SchoolDashboard";
import FacilitatorStudentLogs from "./components/FacilitatorStudentLogs";
import FacilitatorStudentLogs2 from "./components/FacilitatorStudentLogs2";
import FacilitatorStudentTask from "./components/FacilitatorStudentTask";
import HRStudentApplicantsv2 from "./components/HRStudentApplicantsv2";
import AdminDashboard from "./components/AdminDashboard";
import AdminEditAccRole from "./components/AdminEditAccRole";
import Protected from "./components/Protected";
import StudentUploadRequirements from "./components/StudentUploadRequirements";
import StudentProfile from "./components/StudentProfile";
import Calendar from "./components/Calendar";
import SchoolAddStudent from "./components/SchoolAddStudent";
import SchoolEditProfile from "./components/SchoolEditProfile";
import StudentUploadRequirementsMOA from "./components/StudentUploadRequirementsMOA";
import IndivCategory from './components/IndivCategory'

const App = () => {
  const location = useLocation();
  const currentPath = location.pathname.toString();

  return (
    <div>
      {localStorage.getItem("default-token") ? (
        <NavbarSignedIn />
      ) : currentPath == "/" ||
        currentPath == "/About" ||
        currentPath == "/Categories" ||
        currentPath == "/Contact" ? (
        <Navbar />
      ) : (
        <Navbar2 />
      )}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ConfirmPassword" element={<ConfirmPassword />} />
        <Route path="/About" element={<About />} />
        <Route path="/StudentProfile" element={<StudentProfile />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/AdminEditAccRole" element={<AdminEditAccRole />} />
        <Route
          path="/FacilitatorStudentLogs"
          element={<FacilitatorStudentLogs />}
        />
        <Route
            <Route path='/indiv-category' element={<IndivCategory/>} />
          path="/FacilitatorStudentLogs2"
          element={<FacilitatorStudentLogs2 />}
        />
        <Route
          path="/FacilitatorStudentTask"
          element={<FacilitatorStudentTask />}
        />
        <Route
          path="/HRStudentApplicantsv2"
          element={<HRStudentApplicantsv2 />}
        />
        <Route path="/SchoolTransaction" element={<SchoolTransaction />} />
        <Route path="/SchoolDashboard" element={<SchoolDashboard />} />
        <Route
          path="/SchoolApplication"
          element={
            <Protected isSignedIn={localStorage.getItem("default-token")}>
              <SchoolApplication />
            </Protected>
          }
        />
        <Route
          path="/StudentUploadRequirements"
          element={<StudentUploadRequirements />}
        />
        <Route
          path="/StudentUploadRequirementsMOA"
          element={<StudentUploadRequirementsMOA />}
        />
        <Route path="/StudentProfile" element={<StudentProfile />} />
        <Route
          path="/SchoolEditProfile"
          element={
            <Protected isSignedIn={localStorage.getItem("default-token")}>
              <SchoolEditProfile />
            </Protected>
          }
        />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/AdminEditAccRole" element={<AdminEditAccRole />} />
        <Route
          path="/FacilitatorStudentLogs"
          element={<FacilitatorStudentLogs />}
        />
        <Route
          path="/FacilitatorStudentLogs2"
          element={<FacilitatorStudentLogs2 />}
        />
        <Route
          path="/FacilitatorStudentTask"
          element={<FacilitatorStudentTask />}
        />
        <Route
          path="/HRStudentApplicantsv2"
          element={<HRStudentApplicantsv2 />}
        />
        <Route path="/SchoolTransaction" element={<SchoolTransaction />} />
        <Route path="/SchoolDashboard" element={<SchoolDashboard />} />
        <Route
          path="/Calendar"
          element={
            <Protected isSignedIn={localStorage.getItem("default-token")}>
              <Calendar />
            </Protected>
          }
        />
        <Route path="/add-student" element={<SchoolAddStudent />} />      </Routes>
      <Footer />
    </div>
  );
};

export default App;
