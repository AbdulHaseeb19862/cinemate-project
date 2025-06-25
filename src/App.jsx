import { Header, Footer } from "./components";
import AllRoutes from "./routes/AllRoutes";
import "./App.css";

function App() {
  return (
    <div className="dark:bg-gray-800">
      <Header></Header>

      <AllRoutes></AllRoutes>

      <Footer></Footer>
    </div>
  );
}

export default App;
