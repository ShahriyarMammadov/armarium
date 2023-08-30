import AdminRoot from "../components/root/admin";
import MainRoot from "../components/root/site";
import AllModelsPage from "../pages/allModelsPage";
import HomePage from "../pages/homePage";
import ModelsDetailPage from "../pages/modelsDetailPage";
import NotFoundPage from "../pages/notFoundPage";
import GuaranteePage from "../pages/guaranteePage";
import CustomerServicePage from "../pages/customerServicePage";
import AboutPage from "../pages/aboutPage";

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
        path: "allModels",
        element: <AllModelsPage />,
      },
      {
        path: "zemanet",
        element: <GuaranteePage />,
      },
      {
        path: "musteri_xidmeti",
        element: <CustomerServicePage />,
      },
      {
        path: "haqqimizda",
        element: <AboutPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/admin/",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        // element: <addModels />,
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
