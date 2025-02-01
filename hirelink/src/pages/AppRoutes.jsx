import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import Home from "./Home";
import FindJobs from "./FindJob";
import FindTalent from "./FindTalent";
import TalentProfile from "./TalentProfile";
import PostJobPage from "./PostJobPage";
import JobDescriptionPage from "./JobDescriptionPage";
import ApplyJobPage from "./ApplyJobPage";
import CompanyPage from "./CompanyPage";
import PostedJobPage from "./PostedJobPage";
import JobHistoryPage from "./JobHistoryPage";
import SignUpPage from "./SignUpPage";
import ProfilePage from "./ProfilePage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function AppRoutes() {
  const user = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <div className="relative">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-jobs" element={<FindJobs />} />
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
