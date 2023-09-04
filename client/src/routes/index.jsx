import AdminRoot from "../components/root/admin";
import MainRoot from "../components/root/site";
import AllModelsPage from "../pages/allModelsPage";
import HomePage from "../pages/homePage";
import ModelsDetailPage from "../pages/modelsDetailPage";
import NotFoundPage from "../pages/notFoundPage";
import GuaranteePage from "../pages/guaranteePage";
import CustomerServicePage from "../pages/customerServicePage";
import AboutPage from "../pages/aboutPage";
import TermsPage from "../pages/termsPage";
import NewsPage from "../pages/newsPage";
import NewsDetailPage from "../pages/newsDetailPage";
import VacanciesPage from "../pages/VacanciesPage";
import PointOfSalesPages from "../pages/pointOfSalePage";
import BlogPage from "../pages/blogPage";
import BlogDetailPage from "../pages/blogDetailPage";
import ReferencesPage from "../pages/referencesPage";

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
