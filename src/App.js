import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="max-w-[1140px] bg-primary mx-auto">
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </div>
    </div>
  );
}

export default App;
