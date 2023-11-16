import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
// import { TeacherProvider } from './context/Teacher.jsx';
// import { AuthProvider } from './context/User.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

        <BrowserRouter>
          <App />
        </BrowserRouter>
      

  </React.StrictMode>,
)
