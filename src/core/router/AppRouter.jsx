import { createBrowserRouter, createHashRouter } from "react-router-dom";
import HomeView from "../../pages/home/view/HomeView";
import Semana1View from "../../pages/semana1/view/Semana1View";
import Layout from "../layout/Layout";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomeView />
      </Layout>
    ),
  },
  {
    path: "/semana1",
    element: (
      <Layout>
        <Semana1View />
      </Layout>
    ),
  },
]);
