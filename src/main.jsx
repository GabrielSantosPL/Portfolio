import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

try {
            if (localStorage.getItem("theme") === "dark") {
                document.documentElement.setAttribute("data-theme", "dark");
            }
        } catch (error) {
            // O site continua normalmente caso o armazenamento local esteja indisponível.
        }

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
