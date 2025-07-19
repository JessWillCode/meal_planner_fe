import React, { createContext, useContext, useReducer } from 'react'

const MealContext = createContext()

const initialState = {
  meals: [],
  loading: false,
  error: null,
  currentUser: null
}

const mealReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false }
    case 'SET_MEALS':
      return { ...state, meals: action.payload, loading: false, error: null }
    case 'ADD_MEAL':
      return { ...state, meals: [...state.meals, action.payload], loading: false }
    case 'UPDATE_MEAL':
      return {
        ...state,
        meals: state.meals.map(meal => 
          meal.id === action.payload.id ? action.payload : meal
        ),
        loading: false
      }
    case 'DELETE_MEAL':
      return {
        ...state,
        meals: state.meals.filter(meal => meal.id !== action.payload),
        loading: false
      }
    case 'SET_USER':
      return { ...state, currentUser: action.payload }
    default:
      return state
  }
}

export const MealProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mealReducer, initialState)

  return (
    <MealContext.Provider value={{ state, dispatch }}>
      {children}
    </MealContext.Provider>
  )
}

export const useMealContext = () => {
  const context = useContext(MealContext)
  if (!context) {
    throw new Error('useMealContext must be used within a MealProvider')
  }
  return context
} 