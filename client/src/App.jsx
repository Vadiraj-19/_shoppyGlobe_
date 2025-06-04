// app.jsx
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Outlet, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Provider store={store}>
      <div>
        <Header />

        {/* If token exists, allow access to app */}
        {token ? <Outlet /> : <Navigate to="/login" />}

        <Footer />
      </div>
    </Provider>
  );
};

export default App;