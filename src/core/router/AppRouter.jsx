import { createBrowserRouter, createHashRouter } from "react-router-dom";
import HomeView from "../../pages/home/view/HomeView";
import Semana1View from "../../pages/semana1/view/Semana1View";
import Semana2View from "../../pages/semana2/view/Semana2View";
import Semana3View from "../../pages/semana3/view/Semana3View";
import Semana4View from "../../pages/semana4/view/Semana4View";
import Semana5View from "../../pages/semana5/view/Semana5View";
import Semana6View from "../../pages/semana6/view/Semana6View";
import Semana7View from "../../pages/semana7/view/Semana7View";
import Semana8View from "../../pages/semana8/view/Semana8View";
import Semana9View from "../../pages/semana9/view/Semana9View";
import Semana10View from "../../pages/semana10/view/Semana10View";

import Layout from "../layout/Layout";
import IdesView from "../../pages/ides/view/IdesView";
import PreEntrega from "../../pages/Pre-entrega PFI/view/PreEntrega";

export const appRouter = createHashRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomeView />
      </Layout>
    ),
  },
  {
    path: "/preEntrega",
    element: (
      <Layout>
        <PreEntrega />
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
    path: "/semana3",
    element: (
      <Layout>
        <Semana3View />
      </Layout>
    ),
  },
  {
    path: "/semana4",
    element: (
      <Layout>
        <Semana4View />
      </Layout>
    ),
  },
  {
    path: "/semana5",
    element: (
      <Layout>
        <Semana5View />
      </Layout>
    ),
  },
  {
    path: "/semana6",
    element: (
      <Layout>
        <Semana6View />
      </Layout>
    ),
  },
  {
    path: "/semana7",
    element: (
      <Layout>
        <Semana7View />
      </Layout>
    ),
  },
  {
    path: "/semana8",
    element: (
      <Layout>
        <Semana8View />
      </Layout>
    ),
  },
  {
    path: "/semana9",
    element: (
      <Layout>
        <Semana9View />
      </Layout>
    ),
  },
  {
    path: "/semana10",
    element: (
      <Layout>
        <Semana10View />
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
