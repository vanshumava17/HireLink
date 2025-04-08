import React from "react";
import "./App.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/notifications/styles.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/dates/styles.css";
import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
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
import { Notifications } from "@mantine/notifications";
import Store from "./Store";
import { Provider } from "react-redux";
import { getItem } from "./services/LocalStorageService";
import AppRoutes from "./pages/AppRoutes";

function App() {
  const theme = createTheme({
    primaryColor: "caribbeanGreen",
    primaryShade: 4,
    colors: {
      mineShaft: [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
      // brightSun: [
      //   "#fffbeb",
      //   "#fff3c6",
      //   "#ffe588",
      //   "#ffd149",
      //   "#ffbd20",
      //   "#f99b07",
      //   "#dd7302",
      //   "#b75006",
      //   "#943c0c",
      //   "#7a330d",
      //   "#461902",
      // ],
      caribbeanGreen: [
        "#eafff7",
        "#cdfee9",
        "#a0fad8",
        "#63f2c5",
        "#25e2ac",
        "#00cc99",
        "#00a47b",
        "#008367",
        "#006752",
        "#005545",
        "#003028",
      ],
    },
  });
  
  return (
    <>
      <Provider store={Store}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Notifications position="top-center" zIndex={1000} />
          <AppRoutes />
        </MantineProvider>
      </Provider>
    </>
  );
}

export default App;
