import React, { useState, useEffect } from 'react';
import '../Styling/App.css';

function App() {
  const [protein, setProtein] = useState(0);
  const [calendar, setCalendar] = useState({});

  const CalendarClick = (day) => {
    setCalendar(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        active: !prev[day]?.active,
        meal: prev[day]?.meal || ''
      }
    }));
  };

  const MealChange = (day, value) => {
    setCalendar(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        meal: value
      }
    }));
  };

  return (
    <div className="app">
      <h1 className="header">Trice's Meal Planner</h1>

      <div className="section">
        <h2>Protein Intake (grams)</h2>
        <input
          type="number"
          value={protein}
          onChange={e => setProtein(e.target.value)}
        />
      </div>

      <div className="section calendar">
        <h2>Meal Calendar</h2>
        <div className="calendar-grid">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`calendar-day ${calendar[i]?.active ? 'workout' : 'off'}`}
              onClick={() => CalendarClick(i)}
            >
              <div>Day {i + 1}</div>
              <input
                type="text"
                placeholder="Plan your meal"
                value={calendar[i]?.meal || ''}
                onChange={(e) => MealChange(i, e.target.value)}
                onClick={(e) => e.stopPropagation()} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
