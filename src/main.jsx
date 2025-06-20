import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux"
import {store,persistor} from "./store/Store.jsx"
import {PersistGate} from "redux-persist/integration/react"
import {BrowserRouter} from "react-router-dom"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
      <App />
  </BrowserRouter>
    </PersistGate>
  </Provider>

)
