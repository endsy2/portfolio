import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayOut from "./Layout/RootLayOut";
import Home from "./Pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Home />} />
      {/* Remove the empty <Route /> or define it properly if needed */}
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
