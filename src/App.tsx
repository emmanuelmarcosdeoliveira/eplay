import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyles } from "../styles/styles";
import Banner from "./components/Banner";
import Header from "./components/Header";
import ProducstList from "./components/ProductsList";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Banner />
          <ProducstList title="Promoçoes" background="primary" />
          <ProducstList title="Em Breve" background="black" />
        </>
      ),
    },
  ]);
  return (
    <>
      <GlobalStyles />
      <div className="wrapper">
        <Header />
      </div>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
