import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import Layout from "./pages/Layout";
import ThankYouPage from "./pages/ThankYouPage/Thankyoupage";
import store from "./redux/store";
import { SEOHead } from "./SEOHead";
import { ScrollToTop } from "./ScrollToTop";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SEOHead />
        <ScrollToTop />

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </Provider>
  );
}

export default App;