import Body from "./components/Body";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utility/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContaint from "./components/MainContaint";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContaint />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="flex">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
