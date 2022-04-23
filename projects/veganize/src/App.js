import styles from './App.module.scss'
import MainLayout from './components/layout/MainLayout/MainLayout'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import About from './components/layout/About/About'
import Gallery from './components/layout/Gallery/Gallery'
import Order from './components/layout/Order/Order'
import ContactForm from './components/layout/ContactForm/ContactForm'
import Header from './components/layout/Header/Header'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='#home' element={Header}/>
        <Route path='#about' element={About}/>
        <Route path='#gallery' element={Gallery}/>
        <Route path='#contact' element={ContactForm}/>
        <Route path='#order' element={Order}/>
      </Routes>
      <div className={styles.root}>
        <MainLayout />
      </div>
    </Router>
  )
}

export default App
