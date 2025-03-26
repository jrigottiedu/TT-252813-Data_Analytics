import { createBrowserRouter, createHashRouter } from "react-router-dom";
import HomeView from "../../pages/home/view/HomeView";
import Semana1View from "../../pages/semana1/view/Semana1View";    
import Semana2View from "../../pages/semana2/view/Semana2View";    
import Layout from "../layout/Layout";
import IdesView from "../../pages/ides/view/IdesView";

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
  {
    path: "/semana2",
    element: (
      <Layout>
        <Semana2View />
      </Layout>
    ),
  },
  {
    path: "/ides",
    element: (
      <Layout>
        <IdesView />
      </Layout>
    ),
  },
]);
