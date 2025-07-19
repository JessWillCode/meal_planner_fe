import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { userService } from '../services/api'

const UserList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userService.getAllUsers()
        setUsers(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await userService.deleteUser(id)
        setUsers(users.filter(user => user.id !== id))
      } catch (error) {
        setError(error.message)
      }
    }
  }

  if (loading) {
    return <div className="loading">Loading users...</div>
  }

  if (error) {
    return <div className="error">Error: {error}</div>
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Users</h1>
        <Link to="/users/new" className="btn btn-success">
          Add New User
        </Link>
      </div>

      {users.length === 0 ? (
        <div className="card">
          <p>No users found. Create your first user!</p>
          <Link to="/users/new" className="btn btn-primary">
            Add User
          </Link>
        </div>
      ) : (
        <div className="meal-grid">
          {users.map((user) => (
            <div key={user.id} className="meal-card">
              <h3>{user.name}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Age:</strong> {user.age}</p>
              <p><strong>Weight:</strong> {user.weight}kg</p>
              <p><strong>Height:</strong> {user.height}cm</p>
              <p><strong>Activity Level:</strong> {user.activity_level}</p>
              <p><strong>Dietary Restrictions:</strong> {user.dietary_restrictions || 'None'}</p>
              <div className="meal-actions">
                <Link to={`/users/edit/${user.id}`} className="btn btn-primary">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UserList 