import { lazy, Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

const Login = lazy(() => import("./pages/Login"));
const Exercises = lazy(() => import("./pages/Exercises"));

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/exercises" element={<Exercises />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
