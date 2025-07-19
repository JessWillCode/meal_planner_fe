import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="card">
      <h1>Welcome to Meal Planner</h1>
      <p>
        This is a comprehensive meal planning application that helps you manage your meals and users.
        Use the navigation above to explore different features.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h2>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Link to="/meals" className="btn btn-primary">
            View All Meals
          </Link>
          <Link to="/meals/new" className="btn btn-success">
            Add New Meal
          </Link>
          <Link to="/users" className="btn btn-primary">
            View All Users
          </Link>
          <Link to="/users/new" className="btn btn-success">
            Add New User
          </Link>
        </div>
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <h2>Features</h2>
        <ul>
          <li>Create, read, update, and delete meals</li>
          <li>Manage user information</li>
          <li>Responsive design for all devices</li>
          <li>Real-time data synchronization</li>
          <li>Modern and intuitive user interface</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
