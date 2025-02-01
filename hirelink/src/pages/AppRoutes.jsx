import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import FindJob from "./pages/FindJob";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FindTalent from "./pages/FindTalent";
import TalentProfile from "./pages/TalentProfile";
import PostJobPage from "./pages/PostJobPage";
import JobDescriptionPage from "./pages/JobDescriptionPage";
import ApplyJobPage from "./pages/ApplyJobPage";
import CompanyPage from "./pages/CompanyPage";
import PostedJobPage from "./pages/PostedJobPage";
import JobHistoryPage from "./pages/JobHistoryPage";
import SignUp from "./components/SignUpLogin/SignUp";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import { useSelector } from "react-redux";

function AppRoutes() {
  const user = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <div className="relative">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-jobs" element={<FindJob />} />
          <Route path="/find-talent" element={<FindTalent />} />
          <Route path="/talent-profile" element={<TalentProfile />} />
          <Route path="/post-job" element={<PostJobPage />} />
          <Route path="/jobs" element={<JobDescriptionPage />} />
          <Route path="/apply-job" element={<ApplyJobPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/company-posted-job" element={<PostedJobPage />} />
          <Route path="/job-history" element={<JobHistoryPage />} />
          <Route
            path="/signup"
            element={user ? <Navigate to={"/"} /> : <SignUpPage />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to={"/"} /> : <SignUpPage />}
          />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRoutes;
