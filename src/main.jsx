import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { persistor, store } from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toaster
        position='top-right'
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
        }}
      />
      </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
