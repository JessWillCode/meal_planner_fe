import axios from 'axios'
const API_BASE_URL = 'http://localhost:3000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const mealService = {
  getAllMeals: async () => {
    const response = await api.get('/meals')
    return response.data
  },

  getMealById: async (id) => {
    const response = await api.get(`/meals/${id}`)
    return response.data
  },

  createMeal: async (mealData) => {
    const response = await api.post('/meals', mealData)
    return response.data
  },

  updateMeal: async (id, mealData) => {
    const response = await api.put(`/meals/${id}`, mealData)
    return response.data
  },

  deleteMeal: async (id) => {
    const response = await api.delete(`/meals/${id}`)
    return response.data
  }
}

export const userService = {
  getAllUsers: async () => {
    const response = await api.get('/users')
    return response.data
  },

  getUserById: async (id) => {
    const response = await api.get(`/users/${id}`)
    return response.data
  },

  createUser: async (userData) => {
    const response = await api.post('/users', userData)
    return response.data
  },

  updateUser: async (id, userData) => {
    const response = await api.put(`/users/${id}`, userData)
    return response.data
  },

  deleteUser: async (id) => {
    const response = await api.delete(`/users/${id}`)
    return response.data
  }
} 