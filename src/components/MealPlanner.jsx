import React, {useState, useEffect} from 'react';
import { mealService } from '../services/api';
import { useMealContext } from '../context/MealContext';


const weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',]

    const MealPlanner = () => {
       const {state, dispatch} = useMealContext();
        const {meals} = state;
        const [plan, setPlan] = useState({});
        const [message, setMessage] = useState('');

        useEffect(() => {
            
            const save = localStorage.getItem('mealPlan');
            if (save) {
                setPlan(JSON.parse(save));
            }
            mealService.getAllMeals().then((data) => {
                dispatch({ type: 'SET_MEALS', payload: data});
             })
             .catch((err) => {
                console.error('Meals Not Loaded',err);
                dispatch({ type: 'SET_ERROR', payload: err.message});
             }); 
        }, []);
        const handleSelect =(day,meal) => {
            setPlan(prev => ({ ...prev, [day]: meal}));
        };
        
        const savedPlan =() => {
            localStorage.setItem('mealPlan', JSON.stringify(plan));
            setMessage('You Saved Your Meal Plan!!');
            };

        const clearPlan =() => {
            setPlan({});
            localStorage.removeItem('mealPlan');
            setMessage('You Cleared Your Meal Plan');
        };

        return (
            <div style={{ padding: '80px' }}>
            <h2>Meal Planner</h2>
            <div style={{ display: 'grid', gap: '30px'}}>
                {weekDay.map(day => (
                    <div key={day}>
                        <label>{day}: </label>
                        <select
                        value={plan[day] || ''}
                        onChange={(e) => handleSelect(day, e.target.value)}>
                            <option value="">-- Select A Meal --</option>
                            {meals.map(meal => (
                                <option key={meal.id} value={meal.id}>
                                    {meal.name}
                                </option>
                               ))}
                                </select>
                                <p className="selected-meal"> Selected: {meals.find(m => m.id === plan[day])?.name || 'Unknown'}</p>
                                 </div>
                ))}
                </div>
                <br />
                <button onClick={savedPlan}>Save Plan</button>
                <button onClick={clearPlan}>Clear Plan</button>
                {message && <p>{message}</p>}
                </div>
            );
        };

        export default MealPlanner 
