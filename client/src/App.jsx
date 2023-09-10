import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ROUTES from "./routes";
import { useEffect } from "react";

function App() {
  const router = createBrowserRouter(ROUTES);

  useEffect(() => {
    const setThemeColor = (color) => {
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", color);
      } else {
        const newMeta = document.createElement("meta");
        newMeta.setAttribute("name", "theme-color");
        newMeta.setAttribute("content", color);
        document.head.appendChild(newMeta);
      }
    };

    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const color = prefersDarkMode ? "#0E2954" : "#AAC8A7";
    setThemeColor(color);
  }, []);

  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Come Back :(";
  });

  window.addEventListener("focus", () => {
    document.title = docTitle;
  });

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
