import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { TodoApps } from './components/TodoApps'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoApps></TodoApps>
  </React.StrictMode>,
)
