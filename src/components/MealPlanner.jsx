import React, {useState, useEffect} from 'react';

const weekDay = ['mOnday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',]

    const MealPlanner = () => {
        const [meals, setMeals] = useState([
            'chicken tacos',
            'ramen noodles',
            'steak bites',
            'fullstack nachos'
        ]);
        const [plan, setPlan] = useState({});
        const [message, setMessage] = useState('');

        useEffect(() => {
            const save = localStorage.getItem('mealPlan');
            if (save) {
                setPlan(parse.JSON(save));
            }
        }, []);
        const selectMeal =(day,meal) => {
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
            <div style={{ padding: '20px' }}>
            <h2>Meal Planner</h2>
            <div style={{ display: 'grid', gap: '10px'}}>
                {weekDay.map(day => (
                    <div key={day}>
                        <label>{day}: </label>
                        <select
                        value={plan[day] || ''}
                        onChange={(e) => handleSelect(day, e.target.value)}>
                            <option value="">-- Select A Meal --</option>
                            {meals.map(meal => (
                                <option key={meal} value={meal}></option>
                               ))}
                                </select>
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
