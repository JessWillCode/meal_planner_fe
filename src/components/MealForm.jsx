import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMealContext } from '../context/MealContext'
import { mealService } from '../services/api'

const MealForm = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { dispatch } = useMealContext()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    user_id: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (id) {
      const fetchMeal = async () => {
        try {
          const meal = await mealService.getMealById(id)
          setFormData(meal)
        } catch (error) {
          setError(error.message)
        }
      }
      fetchMeal()
    }
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (id) {
        await mealService.updateMeal(id, formData)
        dispatch({ type: 'UPDATE_MEAL', payload: { ...formData, id: parseInt(id) } })
      } else {
        const newMeal = await mealService.createMeal(formData)
        dispatch({ type: 'ADD_MEAL', payload: newMeal })
      }
      navigate('/meals')
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card">
      <h1>{id ? 'Edit Meal' : 'Add New Meal'}</h1>
      
      {error && <div className="error">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Meal Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="calories">Calories</label>
          <input
            type="number"
            id="calories"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="protein">Protein (g)</label>
          <input
            type="number"
            id="protein"
            name="protein"
            value={formData.protein}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="carbs">Carbs (g)</label>
          <input
            type="number"
            id="carbs"
            name="carbs"
            value={formData.carbs}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="fat">Fat (g)</label>
          <input
            type="number"
            id="fat"
            name="fat"
            value={formData.fat}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="user_id">User ID</label>
          <input
            type="number"
            id="user_id"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button
            type="submit"
            className="btn btn-success"
            disabled={loading}
          >
            {loading ? 'Saving...' : (id ? 'Update Meal' : 'Add Meal')}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate('/meals')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default MealForm 