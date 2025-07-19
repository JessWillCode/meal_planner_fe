import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useMealContext } from '../context/MealContext'
import { mealService } from '../services/api'

const MealList = () => {
  const { state, dispatch } = useMealContext()

  useEffect(() => {
    const fetchMeals = async () => {
      dispatch({ type: 'SET_LOADING', payload: true })
      try {
        const meals = await mealService.getAllMeals()
        dispatch({ type: 'SET_MEALS', payload: meals })
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message })
      }
    }

    fetchMeals()
  }, [dispatch])

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this meal?')) {
      try {
        await mealService.deleteMeal(id)
        dispatch({ type: 'DELETE_MEAL', payload: id })
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message })
      }
    }
  }

  if (state.loading) {
    return <div className="loading">Loading meals...</div>
  }

  if (state.error) {
    return <div className="error">Error: {state.error}</div>
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Meals</h1>
        <Link to="/meals/new" className="btn btn-success">
          Add New Meal
        </Link>
      </div>

      {state.meals.length === 0 ? (
        <div className="card">
          <p>No meals found. Create your first meal!</p>
          <Link to="/meals/new" className="btn btn-primary">
            Add Meal
          </Link>
        </div>
      ) : (
        <div className="meal-grid">
          {state.meals.map((meal) => (
            <div key={meal.id} className="meal-card">
              <h3>{meal.name}</h3>
              <p><strong>Description:</strong> {meal.description}</p>
              <p><strong>Calories:</strong> {meal.calories}</p>
              <p><strong>Protein:</strong> {meal.protein}g</p>
              <p><strong>Carbs:</strong> {meal.carbs}g</p>
              <p><strong>Fat:</strong> {meal.fat}g</p>
              <p><strong>User ID:</strong> {meal.user_id}</p>
              <div className="meal-actions">
                <Link to={`/meals/edit/${meal.id}`} className="btn btn-primary">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(meal.id)}
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

export default MealList 