import AdminRoot from "../components/root/admin";
import MainRoot from "../components/root/site";
import HomePage from "../pages/homePage";
import ModelsDetailPage from "../pages/modelsDetailPage";

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
        path: "model/:id",
        element: <ModelsDetailPage />,
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
