import "./App.css";
import { Header, AllRoutes } from "./imports";
function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AllRoutes />
      </main>
    </>
  );
}
export default App;
