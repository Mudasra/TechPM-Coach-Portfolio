import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Layout from './pages/Layout'
import { Provider } from 'react-redux'
import store from './redux/store'
import ThankYouPage from './pages/ThankYouPage/Thankyoupage'

function App() {

  return (
    <Provider store={store}>
      <Routes>
        <Route element={<Layout />}>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/thank-you' element={<ThankYouPage />}/>
        </Route>
      </Routes>
      </Provider>
  )
}

export default App
