import AdminRoot from "../components/root/admin";
import MainRoot from "../components/root/site";
import AllModelsPage from "../pages/site/allModelsPage";
import HomePage from "../pages/site/homePage";
import ModelsDetailPage from "../pages/site/modelsDetailPage";
import NotFoundPage from "../pages/site/notFoundPage";
import GuaranteePage from "../pages/site/guaranteePage";
import CustomerServicePage from "../pages/site/customerServicePage";
import AboutPage from "../pages/site/aboutPage";
import TermsPage from "../pages/site/termsPage";
import NewsPage from "../pages/site/newsPage";
import NewsDetailPage from "../pages/site/newsDetailPage";
import VacanciesPage from "../pages/site/VacanciesPage";
import PointOfSalesPages from "../pages/site/pointOfSalePage";
import BlogPage from "../pages/site/blogPage";
import BlogDetailPage from "../pages/site/blogDetailPage";
import ReferencesPage from "../pages/site/referencesPage";
import DashBoard from "../pages/admin/dashBoard";

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
        path: "/mebel/all_models",
        element: <AllModelsPage />,
      },
      {
        path: "haqqimizda/zemanet",
        element: <GuaranteePage />,
      },
      {
        path: "haqqimizda/musteri_xidmeti",
        element: <CustomerServicePage />,
      },
      {
        path: "haqqimizda/terminler",
        element: <TermsPage />,
      },
      {
        path: "haqqimizda",
        element: <AboutPage />,
      },
      {
        path: "xeberler",
        element: <NewsPage />,
      },
      {
        path: "xeberler/:id",
        element: <NewsDetailPage />,
      },
      {
        path: "xeberler/blog",
        element: <BlogPage />,
      },
      {
        path: "xeberler/blog/:id",
        element: <BlogDetailPage />,
      },
      {
        path: "vakansiyalar",
        element: <VacanciesPage />,
      },
      {
        path: "satis_noqteleri",
        element: <PointOfSalesPages />,
      },
      {
        path: "referanslar",
        element: <ReferencesPage />,
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
        element: <DashBoard />,
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
