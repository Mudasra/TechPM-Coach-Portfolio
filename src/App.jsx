import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import Layout from "./pages/Layout";
import store from "./redux/store";
import { SEOHead } from "./SEOHead";
import { ScrollToTop } from "./ScrollToTop";
import { Suspense } from "react";

const ThankYouPage = (() => "./pages/ThankYouPage/Thankyoupage") ;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SEOHead />
        <ScrollToTop />

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/thank-you" element={
              <Suspense fallback={<div style={{minHeight:'100vh', background:'#F9FAFB'}}></div>}><ThankYouPage /></Suspense>
              } />
          </Route>
        </Routes>

      </BrowserRouter>
    </Provider>
  );
}

export default App;