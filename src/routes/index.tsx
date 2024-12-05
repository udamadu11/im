import { RouteObject, Outlet } from "react-router-dom";

import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import Cookies from "../pages/Cookies/Cookies";

import { RouteNames, routePrefix, routerPaths } from "../config/routes";
import ProjectAndImpact from "../pages/ProjectAndImpact/ProjectAndImpact";
import ContactUs from "../pages/ContactUs/ContactUs";

const routeConfig: RouteObject[] = [
  {
    id: RouteNames.home,
    path: routePrefix,
    element: <Outlet />,
    children: [
      {
        id: RouteNames.home,
        path: "",
        element: <Home />,
      },
      {
        id: RouteNames.aboutUs,
        path: routerPaths.aboutUs,
        element: <AboutUs />,
      },
      {
        id: RouteNames.privacyPolicy,
        path: routerPaths.privacyPolicy,
        element: <PrivacyPolicy />,
      },
      {
        id: RouteNames.cookies,
        path: routerPaths.cookies,
        element: <Cookies />,
      },
      {
        id: RouteNames.projectsAndImpacts,
        path: routerPaths.projectsImpacts,
        element: <ProjectAndImpact />,
      },
      {
        id: RouteNames.contactUs,
        path: routerPaths.contactUs,
        element: <ContactUs />,
      },
    ],
  },
];

export default routeConfig;
