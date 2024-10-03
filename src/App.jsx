import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Loading } from "./components";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const Policy = lazy(() => import("./pages/Policy"));
const SolutionsPage = lazy(() => import("./pages/SolutionsPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
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
          <Route
            path="privacy-policy"
            element={<Policy />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
