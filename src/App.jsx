import MainLayout from "./layouts/MainLayout";
import { Route, Routes } from "react-router-dom";

import {
  About,
  Contacts,
  Home,
  Industries,
  NotFound,
  Solutions,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout />}>
        <Route
          index
          element={<Home />}
        />

        <Route
          path="solutions/:id"
          element={<Solutions />}
        />

        <Route
          path="industries/:id"
          element={<Industries />}
        />

        <Route
          path="about"
          element={<About />}
        />
        <Route
          path="contacts"
          element={<Contacts />}
        />
      </Route>

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default App;
