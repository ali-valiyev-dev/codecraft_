import MainLayout from "./layouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import {
  AboutPage,
  ContactsPage,
  HomePage,
  IndustriesPage,
  NotFoundPage,
  SolutionsPage,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout />}>
        <Route
          index
          element={<HomePage />}
        />

        <Route
          path="solutions/:id"
          element={<SolutionsPage />}
        />

        <Route
          path="industries/:id"
          element={<IndustriesPage />}
        />

        <Route
          path="about"
          element={<AboutPage />}
        />
        <Route
          path="contacts"
          element={<ContactsPage />}
        />
      </Route>

      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export default App;
