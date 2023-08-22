import AdminRoot from "../components/root/admin";
import MainRoot from "../components/root/site";
import HomePage from "../pages/homePage";

const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "galleriesDetail/:id",
        // element: <AllGalleriesDetail />,
      },
      {
        path: "*",
        // element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/admin/",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        // element: <DashboardPage />,
      },
      {
        path: "user/",
        // element: <AboutMePage />,
      },
    ],
  },
  {
    path: "/login",
    // element: <LoginPage />,
  },
  {
    path: "/signup",
    // element: <SignupPage />,
  },
];

export default ROUTES;
