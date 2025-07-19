import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MealProvider } from './context/MealContext'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MealList from './components/MealList'
import MealForm from './components/MealForm'
import UserList from './components/UserList'
import UserForm from './components/UserForm'
import './App.css'

function App() {
  return (
    <MealProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/meals" element={<MealList />} />
              <Route path="/meals/new" element={<MealForm />} />
              <Route path="/meals/edit/:id" element={<MealForm />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/users/new" element={<UserForm />} />
              <Route path="/users/edit/:id" element={<UserForm />} />
            </Routes>
          </main>
        </div>
      </Router>
    </MealProvider>
  )
}

export default App 