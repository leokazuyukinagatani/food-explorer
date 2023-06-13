import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
export function AppRoutes() {
  return (
    <Routes>
      {user ? (
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      ) : (
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<SignIn />} />
          <Route path="/" element={<SignUp />} />
        </Route>
      )}
    </Routes>
  );
}
